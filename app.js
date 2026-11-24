"use strict";

// ---------- DATA ----------
// Chapters register themselves in window.CHAPTERS (see data/capNN.js).
// A question without an explicit id gets "<chapterId>-<index>". Do not reorder
// existing questions without ids, or the stored history will point to the wrong ones.
const CHAPTERS = (window.CHAPTERS || []).slice().sort((a, b) => a.id - b.id);
CHAPTERS.forEach((ch) => ch.questions.forEach((q, i) => {
  q.id = q.id || ch.id + "-" + i;
  q.chapterId = ch.id;
}));
const ALL = CHAPTERS.flatMap((ch) => ch.questions);
const SIM_SIZE = 40;

// ---------- STORAGE (optional: the app works without it) ----------
// stats[id] = { n: attempts, ok: correct answers, box: 0-4 (Leitner), sureWrong: wrong while "segura",
//               lastOk: result of the last attempt, ts: time of the last attempt }
const KEY = "fisio-stats-v2";
const OLD_KEY = "fisio-wrong-v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) || {};
    // Migrate the first version, which only stored the ids of wrong questions.
    const old = JSON.parse(localStorage.getItem(OLD_KEY)) || [];
    const migrated = {};
    old.forEach((id) => { migrated[id] = { n: 1, ok: 0, box: 0, sureWrong: 0, lastOk: false, ts: 0 }; });
    return migrated;
  } catch (e) { return {}; }
}
function saveStats() {
  try { localStorage.setItem(KEY, JSON.stringify(stats)); } catch (e) { /* storage unavailable */ }
}
let stats = loadStats();

// Leitner-style update: a wrong answer sends the question back to box 0; a correct answer
// given with confidence moves it up; a correct but doubtful answer keeps its box.
function record(id, ok, conf) {
  const s = stats[id] || { n: 0, ok: 0, box: 0, sureWrong: 0, lastOk: null, ts: 0 };
  s.n += 1;
  if (ok) {
    s.ok += 1;
    if (conf === "segura") s.box = Math.min(4, s.box + 1);
  } else {
    s.box = 0;
    if (conf === "segura") s.sureWrong += 1;
  }
  s.lastOk = ok;
  s.ts = Date.now();
  stats[id] = s;
  saveStats();
}

// ---------- HELPERS ----------
const view = document.getElementById("view");
const chapterById = (id) => CHAPTERS.find((c) => c.id === id);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Weight of a question for the adaptive selection: unseen and weak questions come up more often.
const BOX_WEIGHT = [6, 4, 2.5, 1.5, 1];
function questionWeight(q) {
  const s = stats[q.id];
  if (!s) return 3;
  const w = BOX_WEIGHT[s.box];
  return s.sureWrong > 0 && s.box < 2 ? w * 1.3 : w;
}

// Weighted sampling without replacement (Efraimidis-Spirakis): returns up to `k` items.
function weightedSample(items, k, weightOf) {
  return items
    .map((it) => ({ it, key: Math.pow(Math.random(), 1 / weightOf(it)) }))
    .sort((a, b) => b.key - a.key)
    .slice(0, k)
    .map((x) => x.it);
}

// Simulacro: spread across chapters by chapter weight (at least one per chapter when possible),
// choosing within each chapter the weaker questions first. If the bank has fewer than `size`, returns all.
function pickSimulacro(size) {
  const pools = new Map(CHAPTERS.map((c) => [c.id, c.questions.slice()]));
  const totalWeight = CHAPTERS.reduce((s, c) => s + (c.weight || 1), 0);
  const picked = [];
  CHAPTERS.forEach((c) => {
    const quota = Math.max(1, Math.round(((c.weight || 1) / totalWeight) * size));
    const take = weightedSample(pools.get(c.id), quota, questionWeight);
    picked.push(...take);
    pools.set(c.id, pools.get(c.id).filter((q) => !take.includes(q)));
  });
  if (picked.length < size) {
    const rest = [...pools.values()].flat();
    picked.push(...weightedSample(rest, size - picked.length, questionWeight));
  }
  return shuffle(picked.slice(0, size));
}

// Builds a playable question with shuffled options, keeping track of which one is correct.
// `rule` is the one-line decision rule that keeps the mistake from happening again.
function prepare(q) {
  const options = shuffle(q.options.map((o, i) => ({ ...o, isCorrect: i === q.correct })));
  return { id: q.id, chapterId: q.chapterId, stem: q.stem, rule: q.rule || "", options };
}

const LETTERS = ["A", "B", "C", "D", "E"];

function chapterStats(ch) {
  let n = 0, ok = 0;
  ch.questions.forEach((q) => { const s = stats[q.id]; if (s) { n += s.n; ok += s.ok; } });
  return { n, ok };
}

// ---------- STATE ----------
// mode: "practice" answers one question at a time and explains immediately.
// mode: "exam" mimics the professor's partial: 40 questions, no feedback until the end.
let session = null; // { title, items[], i, results[], confidence, mode }

function startSession(title, questions, mode = "practice") {
  if (!questions.length) return;
  session = { title, items: questions.map(prepare), i: 0, results: [], confidence: null, mode };
  renderQuestion();
}

// ---------- VIEWS ----------
function renderHome() {
  session = null;
  const wrongCount = ALL.filter((q) => stats[q.id] && stats[q.id].lastOk === false).length;
  const tiles = CHAPTERS.map((c) => {
    const cs = chapterStats(c);
    const acc = cs.n ? pct(cs.ok, cs.n) : 0;
    const progress = cs.n ? `Aciertos: ${acc}% (${cs.n} intentos)` : "Sin intentos";
    return `
    <div class="tile">
      <h3>${c.title}</h3>
      <div class="meta">${c.questions.length} preguntas · ${progress}</div>
      <div class="progress" aria-hidden="true"><span style="width:${acc}%"></span></div>
      <div class="row">
        <button class="btn primary" data-act="practice" data-ch="${c.id}">Practicar</button>
        <button class="btn" data-act="summary" data-ch="${c.id}">Resumen</button>
      </div>
    </div>`;
  }).join("");
  view.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Parcial del Dr. Vinueza</p>
      <h2>Entrena con el formato del parcial</h2>
      <p class="lede">Viñeta corta, una pregunta de mecanismo y cuatro opciones parecidas. El modo examen imita la prueba real: cuarenta preguntas, 0,25 puntos cada una y la corrección recién al final.</p>
      <div class="actions">
        <button class="btn big" data-act="exam"><span>Modo examen</span><small>${SIM_SIZE} preguntas · 0,25 c/u · sin corrección hasta el final</small></button>
        <button class="btn" data-act="sim">Simulacro con explicación al instante</button>
        <button class="btn" data-act="mixed" data-n="20">Mixto de 20</button>
        <button class="btn" data-act="mixed" data-n="10">Mixto de 10</button>
        <button class="btn" data-act="errors" ${wrongCount ? "" : "disabled"}>Repasar errores (${wrongCount})</button>
      </div>
    </section>
    <h2>Capítulos</h2>
    <p class="meta">Banco total: ${ALL.length} preguntas en ${CHAPTERS.length} capítulo(s). Las opciones se barajan cada vez. El mixto y el simulacro priorizan lo que fallaste o aún no viste.</p>
    <div class="grid">${tiles}</div>
    ${ALL.length < SIM_SIZE ? `<p class="meta">El simulacro usará todas las preguntas disponibles (${ALL.length}).</p>` : ""}
    <h2>Mi progreso</h2>
    <p class="meta">El historial se guarda solo en este navegador. Exporta los resultados para analizarlos o para no perderlos.</p>
    <div class="row">
      <button class="btn" data-act="export">Exportar resultados</button>
      <button class="btn" data-act="reset">Borrar historial</button>
    </div>`;
}

function renderSummary(chId) {
  const c = chapterById(chId);
  view.innerHTML = `
    <div class="row"><button class="btn" data-act="home">← Volver</button>
    <button class="btn" data-act="practice" data-ch="${c.id}">Practicar este capítulo</button></div>
    <h2>${c.title}</h2>
    <p class="lead">Cómo leer esto: primero la idea en una frase. Después la cadena de causas, que es exactamente lo que te van a preguntar. Al final, cómo aparece en el examen. No memorices: cada paso explica al anterior.</p>
    ${c.easy ? `<section class="lesson">${c.easy}</section>
    <details class="full"><summary>Resumen completo del libro (solo si querés el detalle)</summary>${c.summary}</details>` : c.summary}`;
}

function renderQuestion() {
  const s = session;
  if (s.i >= s.items.length) return s.mode === "exam" ? renderExamResult() : renderResult();
  const q = s.items[s.i];
  const exam = s.mode === "exam";
  const done = Math.round((s.i / s.items.length) * 100);
  view.innerHTML = `
    <div class="qhead">
      <button class="btn" data-act="home">Salir</button>
      <p class="meta">${s.title} · pregunta ${s.i + 1} de ${s.items.length}${exam ? " · sin corrección hasta el final" : ""}</p>
    </div>
    <div class="bar"><span style="width:${done}%"></span></div>
    <div class="qbody">
    <p class="stem">${q.stem}</p>
    ${exam ? `<p class="meta exam-hint">Elegí una sola respuesta. No se corrige y no podés volver atrás.</p>` : `<div class="conf" role="group" aria-label="Seguridad">
      <span>Antes de responder, ¿qué tan segura estás?</span>
      <button class="pill" data-conf="segura" aria-pressed="false">Segura</button>
      <button class="pill" data-conf="dudo" aria-pressed="false">Dudo</button>
    </div>`}
    <div>${q.options.map((o, i) => `<button class="opt" data-opt="${i}"><b>${LETTERS[i]})</b> ${o.t}</button>`).join("")}</div>
    <p class="warn" id="warn"></p>
    <div id="after"></div>
    </div>`;
}

// S3: the feedback names the student's error. A book citation is not an explanation.
function feedbackHtml(q, chosen, ok) {
  const correctIndex = q.options.findIndex((o) => o.isCorrect);
  const chosenIndex = q.options.indexOf(chosen);
  const correct = q.options[correctIndex];
  const rule = q.rule || "Fijate qué dato del enunciado descarta la opción que elegiste.";
  if (ok) {
    return `<div id="feedback" class="fb fb-ok">
      <p class="fb-h">Correcto. Elegiste ${LETTERS[chosenIndex]})</p>
      <p class="fb-l">Por qué está bien</p><p>${correct.why}</p>
      <p class="fb-rule"><b>Regla:</b> ${rule}</p>
    </div>`;
  }
  return `<div id="feedback" class="fb fb-bad">
    <p class="fb-h">Incorrecto. Elegiste ${LETTERS[chosenIndex]})</p>
    <p class="fb-l">Qué falló en tu elección</p><p>${chosen.why}</p>
    <p class="fb-l">La correcta es ${LETTERS[correctIndex]})</p><p>${correct.why}</p>
    <p class="fb-rule"><b>Regla:</b> ${rule}</p>
  </div>`;
}

// S4: score with the professor's arithmetic and explain only at the end.
function renderExamResult() {
  const r = session.results;
  const hit = r.filter((x) => x.ok).length;
  const notaNum = (hit / r.length) * 10;
  const nota = notaNum.toFixed(2).replace(".", ",");
  const tone = notaNum >= 7 ? "is-pass" : notaNum >= 5 ? "is-mid" : "is-fail";
  const scale = r.length === SIM_SIZE ? " · 0,25 puntos por pregunta, como el parcial" : "";
  const missed = r.filter((x) => !x.ok).length;
  // The answer sheet is the one bold element of the app: the professor's printed response
  // grid, rebuilt from this run. Each cell opens its own explanation.
  const sheet = r.map((x, n) => `<button class="sheet-cell ${x.ok ? "is-ok" : "is-bad"}" data-rev="${n}" title="Pregunta ${n + 1}: ${x.ok ? "correcta" : "incorrecta"}">${n + 1}</button>`).join("");
  const review = r.map((x, n) => {
    const q = x.item;
    const correctIndex = q.options.findIndex((o) => o.isCorrect);
    const chosen = q.options[x.chosen];
    return `<details class="rev ${x.ok ? "rev-ok" : "rev-bad"}">
      <summary>${n + 1}. ${x.ok ? "✓" : "✗"} ${q.stem.slice(0, 90)}…</summary>
      <p class="stem">${q.stem}</p>
      <p class="${x.ok ? "ok-t" : "bad-t"}">Tu respuesta: ${LETTERS[x.chosen]}) ${chosen.t}</p>
      ${x.ok ? "" : `<p class="fb-l">Qué falló en tu elección</p><p>${chosen.why}</p>`}
      <p class="ok-t">Correcta: ${LETTERS[correctIndex]}) ${q.options[correctIndex].t}</p>
      <p>${q.options[correctIndex].why}</p>
      ${q.rule ? `<p class="fb-rule"><b>Regla:</b> ${q.rule}</p>` : ""}
    </details>`;
  }).join("");
  view.innerHTML = `
    <h2 class="score-h ${tone}">Nota: ${nota} / 10</h2>
    <p>${hit} de ${r.length} correctas${scale}. ${missed ? "Fallaste " + missed + "." : "No fallaste ninguna."}</p>
    <h3>Hoja de respuestas</h3>
    <p class="meta">Toca un número para leer la explicación de esa pregunta.</p>
    <div class="sheet" role="group" aria-label="Hoja de respuestas">${sheet}</div>
    <div class="sheet-key"><span><i class="k-ok"></i>correcta</span><span><i class="k-bad"></i>incorrecta</span></div>
    <div class="note">Esto es lo que vería el doctor: sin corrección durante la prueba. Lee la revisión de abajo y quédate con la regla de cada pregunta que fallaste.</div>
    <h3>Revisión pregunta por pregunta</h3>
    ${review}
    <div class="row"><button class="primary" data-act="home">Volver al inicio</button></div>`;
}

function renderResult() {
  const s = session;
  const r = s.results;
  const hit = r.filter((x) => x.ok).length;
  const sure = r.filter((x) => x.conf === "segura");
  const doubt = r.filter((x) => x.conf === "dudo");
  const byChapter = {};
  r.forEach((x) => {
    const b = byChapter[x.chapterId] || (byChapter[x.chapterId] = { ok: 0, n: 0 });
    b.n += 1;
    if (x.ok) b.ok += 1;
  });
  const missed = r.filter((x) => !x.ok);
  view.innerHTML = `
    <h2>Resultado: ${hit} de ${r.length}</h2>
    <p>Respuestas "segura": ${sure.filter((x) => x.ok).length} correctas de ${sure.length}.<br>
       Respuestas "dudo": ${doubt.filter((x) => x.ok).length} correctas de ${doubt.length}.</p>
    <div class="note">Si marcaste "segura" y fallaste, es una confusión de concepto: repasa el resumen. Si marcaste "dudo" y acertaste, probablemente sabes más de lo que crees: confía en tu primer razonamiento.</div>
    <h3>Por capítulo</h3>
    <table><tr><th>Capítulo</th><th>Aciertos</th></tr>
      ${Object.keys(byChapter).map((id) => `<tr><td>${chapterById(Number(id)).title}</td><td>${byChapter[id].ok} de ${byChapter[id].n}</td></tr>`).join("")}
    </table>
    ${missed.length ? "<h3>Para repasar</h3><ul>" + missed.map((x) => `<li>${chapterById(x.chapterId).title}: ${x.stem.slice(0, 90)}…</li>`).join("") + "</ul>" : "<p>No fallaste ninguna. Ahora intenta explicar en voz alta por qué cada distractor es incorrecto.</p>"}
    <div class="row"><button class="primary" data-act="home">Volver al inicio</button></div>`;
}

// Plain-text report to paste into a chat for analysis. Includes a compact JSON line with the raw stats.
function buildReport() {
  const seen = ALL.filter((q) => stats[q.id]);
  const total = seen.reduce((s, q) => s + stats[q.id].n, 0);
  const okTotal = seen.reduce((s, q) => s + stats[q.id].ok, 0);
  const sureWrong = seen.reduce((s, q) => s + stats[q.id].sureWrong, 0);
  const lines = [];
  lines.push("RESULTADOS DE FISIOPATOLOGÍA (" + new Date().toLocaleString("es-EC") + ")");
  lines.push(`Preguntas vistas: ${seen.length} de ${ALL.length}. Intentos: ${total}. Aciertos: ${okTotal} (${pct(okTotal, total)}%). Falladas con "segura": ${sureWrong}.`);
  lines.push("");
  lines.push("POR CAPÍTULO");
  CHAPTERS.forEach((c) => {
    const cs = chapterStats(c);
    lines.push(`- ${c.title}: ${cs.n ? cs.ok + "/" + cs.n + " (" + pct(cs.ok, cs.n) + "%)" : "sin intentos"}`);
  });
  const weak = seen.filter((q) => stats[q.id].lastOk === false || stats[q.id].sureWrong > 0)
    .sort((a, b) => stats[b.id].sureWrong - stats[a.id].sureWrong || (stats[a.id].ok / stats[a.id].n) - (stats[b.id].ok / stats[b.id].n));
  lines.push("");
  lines.push("PREGUNTAS PARA REPASAR (falladas la última vez o falladas con \"segura\")");
  if (!weak.length) lines.push("- Ninguna.");
  weak.forEach((q) => {
    const s = stats[q.id];
    lines.push(`- [${q.id}] cap ${q.chapterId}: ${q.stem.slice(0, 110)}… | intentos ${s.n}, aciertos ${s.ok}, falladas con segura ${s.sureWrong}`);
  });
  lines.push("");
  lines.push("DATOS: " + JSON.stringify(stats));
  return lines.join("\n");
}

function renderExport() {
  view.innerHTML = `
    <div class="row"><button class="btn" data-act="home">← Volver</button>
    <button class="btn" data-act="copy">Copiar</button><span class="meta" id="copied"></span></div>
    <h2>Exportar resultados</h2>
    <p class="meta">Copia este texto y pégalo en el chat para que se analice tu progreso.</p>
    <textarea id="report" readonly rows="18" style="width:100%;font:13px/1.4 ui-monospace,monospace;background:var(--bg);color:var(--text);border:1px solid var(--line);border-radius:8px;padding:10px">${esc(buildReport())}</textarea>`;
}

// ---------- EVENTS ----------
document.getElementById("home-link").addEventListener("click", (e) => { e.preventDefault(); renderHome(); });

view.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  const act = t.dataset.act;

  if (act === "home") return renderHome();
  if (act === "summary") return renderSummary(Number(t.dataset.ch));
  if (act === "practice") {
    const c = chapterById(Number(t.dataset.ch));
    return startSession(c.title, weightedSample(c.questions, c.questions.length, questionWeight));
  }
  if (act === "mixed") return startSession("Mixto", weightedSample(ALL, Number(t.dataset.n), questionWeight));
  if (act === "sim") return startSession("Simulacro", pickSimulacro(SIM_SIZE));
  if (act === "exam") return startSession("Modo examen", pickSimulacro(SIM_SIZE), "exam");
  if (act === "errors") return startSession("Repaso de errores", shuffle(ALL.filter((q) => stats[q.id] && stats[q.id].lastOk === false)));
  if (act === "next") { session.i += 1; session.confidence = null; return renderQuestion(); }
  if (act === "export") return renderExport();
  if (act === "copy") {
    const ta = document.getElementById("report");
    const mark = () => { document.getElementById("copied").textContent = " Copiado"; };
    const fallback = () => { ta.select(); try { document.execCommand("copy"); mark(); } catch (err) { /* user can copy manually */ } };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(mark, fallback);
    else fallback();
    return;
  }
  if (act === "reset") {
    if (window.confirm("¿Borrar todo el historial de este navegador? No se puede deshacer.")) {
      stats = {};
      try { localStorage.removeItem(KEY); localStorage.removeItem(OLD_KEY); } catch (err) { /* storage unavailable */ }
      renderHome();
    }
    return;
  }

  if (t.dataset.rev !== undefined) {
    const detail = view.querySelectorAll("details.rev")[Number(t.dataset.rev)];
    if (detail) {
      detail.open = true;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      detail.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
    }
    return;
  }

  if (t.dataset.conf) {
    session.confidence = t.dataset.conf;
    view.querySelectorAll(".pill").forEach((p) => p.setAttribute("aria-pressed", String(p === t)));
    document.getElementById("warn").textContent = "";
    return;
  }

  if (t.dataset.opt !== undefined) {
    const q = session.items[session.i];
    const chosen = Number(t.dataset.opt);
    const ok = q.options[chosen].isCorrect;

    if (session.mode === "exam") {
      session.results.push({ ok, chapterId: q.chapterId, stem: q.stem, chosen, item: q });
      record(q.id, ok, "dudo");
      session.i += 1;
      return renderQuestion();
    }

    if (!session.confidence) { document.getElementById("warn").textContent = "Elige primero qué tan segura estás."; return; }
    session.results.push({ ok, conf: session.confidence, chapterId: q.chapterId, stem: q.stem, chosen, item: q });
    record(q.id, ok, session.confidence);
    // The chosen and the correct option are explained in the feedback block; the remaining
    // distractors keep their own line so the four alternatives are still accounted for.
    view.querySelectorAll(".opt").forEach((b) => {
      const i = Number(b.dataset.opt);
      b.disabled = true;
      if (q.options[i].isCorrect) b.classList.add("ok");
      else if (i === chosen) b.classList.add("bad");
      if (i !== chosen && !q.options[i].isCorrect) b.insertAdjacentHTML("beforeend", `<div class="why">${q.options[i].why}</div>`);
    });
    const last = session.i === session.items.length - 1;
    document.getElementById("after").innerHTML = feedbackHtml(q, q.options[chosen], ok) +
      `<button class="primary" data-act="next">${last ? "Ver resultado" : "Siguiente"}</button>`;
  }
});

renderHome();
