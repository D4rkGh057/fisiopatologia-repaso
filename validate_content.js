"use strict";

// Content validator for the study bank. No framework: run `node validate_content.js`.
// It enforces the data contract the student's three complaints depend on:
//   - questions written in the professor's exam style (short vignette + one question, 4 short parallel options)
//   - explanations that diagnose the error instead of citing the book
//   - a per-question decision rule
//   - a summary that can be read without the book (six required sections)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA_DIR = path.join(__dirname, "data");
const EXPECTED_IDS = [20, 21, 22, 23, 24, 25, 32, 33, 34, 35, 36, 37];
const QUESTIONS_PER_CHAPTER = 12;

// The simulacro is a 40-question sample built in proportion to chapter weight, so the weights
// are the distribution. `favoritosdoc.jpeg` is the class schedule with the professor's three
// purple boxes: 20-21, 32-33 and 34-36. Those seven chapters weigh 4 and the five unmarked ones
// weigh 2 (a 2:1 ratio), which draws roughly 30 marked and 10 unmarked questions out of 40.
// The earlier 5:1 gave 87.5%, too much of a bet on a hand-drawn annotation nobody can attribute.
const FAVORITE_IDS = [20, 21, 32, 33, 34, 35, 36];
const WEIGHT_MARKED = 4;
const WEIGHT_UNMARKED = 2;
// The decision, as a band: the marked chapters must lead the draw without owning it.
const MARKED_SHARE_MIN = 0.6;
const MARKED_SHARE_MAX = 0.8;

// S1: the readable summary must carry these six sections, in this order.
const REQUIRED_SECTIONS = [
  "la idea en una frase",
  "por qué pasa",
  "qué se ve en la clínica",
  "cómo te lo va a preguntar el doctor",
  "trampa típica",
  "números",
];

// S6: the student-facing UI is neutral Spanish. Voseo forms and Rioplatense markers are
// the easy accident when a rewrite is written quickly, so they are checked, not trusted.
const VOSEO_WORDS = ["elegí", "elegís", "podés", "tenés", "sabés", "querés", "hacé", "hacés",
  "volvé", "volvés", "mirá", "fijate", "acordate", "quedate", "andá", "decime", "pensá", "pensás",
  "revisá", "practicá", "leé", "leés", "usá", "usás", "buscá", "tomá", "empezá", "anotá", "pasá",
  "esperá", "dejá", "poné", "sacá", "sos", "acá", "vos"];

// \b cannot bound an accented word in JavaScript (á is not a word character), so the
// boundaries are explicit letter lookarounds.
function voseoHit(text) {
  const lower = String(text).toLowerCase();
  return VOSEO_WORDS.find((w) => new RegExp("(^|[^\\p{L}])" + w + "(?![\\p{L}])", "u").test(lower)) || null;
}
const BANNED_PHRASES = [
  /seg[úu]n el libro/i,
  /lo que (dice|describe|menciona) el libro/i,
  /el libro (dice|lo dice|no lo (dice|explica|describe|menciona))/i,
  /es la secuencia (que dice|del libro)/i,
  /as[íi] (es|lo dice|lo describe) (la secuencia|el libro)/i,
  /mecanismo descrito en el libro/i,
  /correcta\.?\s*es lo que dice el libro/i,
  /el libro (señala|define|considera|cita|sostiene|afirma)/i,
];

function loadChapters() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  const files = fs.readdirSync(DATA_DIR).filter((f) => /^cap\d+\.js$/.test(f)).sort();
  files.forEach((f) => {
    const code = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
    vm.runInContext(code, sandbox, { filename: f });
  });
  return sandbox.window.CHAPTERS || [];
}

const failures = [];
const fail = (where, msg) => failures.push(where + ": " + msg);
const len = (s) => (typeof s === "string" ? s.trim().length : 0);

function checkSummary(ch) {
  const where = "cap " + ch.id;
  if (!ch.easy || len(ch.easy) < 400) return fail(where, "easy summary missing or too short");
  const easyHit = voseoHit(ch.easy.replace(/<[^>]+>/g, " "));
  if (easyHit) fail(where, "easy summary uses voseo: " + easyHit);
  const summaryHit = voseoHit(ch.summary || "");
  if (summaryHit) fail(where, "book summary uses voseo: " + summaryHit);
  const headings = [...ch.easy.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, "").trim().toLowerCase());
  REQUIRED_SECTIONS.forEach((section) => {
    if (!headings.some((h) => h.includes(section))) fail(where, 'easy summary is missing the section "' + section + '"');
  });
}

function checkQuestion(ch, q, i) {
  const where = "cap " + ch.id + " q" + i;
  if (q.id !== ch.id + "-" + i) fail(where, 'id must be "' + ch.id + "-" + i + '", found "' + q.id + '"');
  if (len(q.stem) < 90) fail(where, "stem too short for a clinical vignette (" + len(q.stem) + " chars)");
  if (len(q.stem) > 700) fail(where, "stem too long (" + len(q.stem) + " chars)");
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    fail(where, "needs exactly 4 options");
    return;
  }
  if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) fail(where, "correct must be an integer 0-3");
  const visible = [q.stem, q.rule].concat((q.options || []).map((o) => o.t + " " + o.why)).join(" ");
  const voseo = voseoHit(visible);
  if (voseo) fail(where, "student-facing text uses voseo: " + voseo);
  if (len(q.rule) < 20) fail(where, "missing decision rule (q.rule)");
  if (len(q.rule) > 220) fail(where, "rule too long (" + len(q.rule) + " chars)");

  const lens = [];
  q.options.forEach((o, j) => {
    const ow = where + " option " + j;
    if (len(o.t) < 8) fail(ow, "option text too short");
    if (len(o.t) > 240) fail(ow, "option too long (" + len(o.t) + " chars)");
    if (len(o.why) < 70) fail(ow, "explanation too short to diagnose anything (" + len(o.why) + " chars)");
    if (len(o.why) > 420) fail(ow, "explanation too long (" + len(o.why) + " chars)");
    BANNED_PHRASES.forEach((re) => {
      if (re.test(o.why)) fail(ow, "explanation appeals to the book instead of the mechanism: " + re);
    });
    lens.push(len(o.t));
  });

  const max = Math.max(...lens);
  const min = Math.min(...lens);
  if (min > 0 && max / min > 3) fail(where, "option lengths too uneven (max/min = " + (max / min).toFixed(1) + ")");
}

function checkChapter(ch) {
  const where = "cap " + ch.id;
  if (!ch.title) fail(where, "missing title");
  if (!ch.summary || len(ch.summary) < 400) fail(where, "full summary missing or too short");
  checkSummary(ch);
  if (!Array.isArray(ch.questions)) return fail(where, "questions missing");
  if (ch.questions.length < QUESTIONS_PER_CHAPTER) {
    fail(where, "needs at least " + QUESTIONS_PER_CHAPTER + " questions, found " + ch.questions.length);
  }
  ch.questions.forEach((q, i) => checkQuestion(ch, q, i));

  // Anti-bias checks the previous audit found broken: 82% of correct answers were the unique longest option.
  let uniqueLongest = 0;
  const positions = [0, 0, 0, 0];
  ch.questions.forEach((q) => {
    if (!Array.isArray(q.options) || q.options.length !== 4) return;
    const lens = q.options.map((o) => len(o.t));
    const max = Math.max(...lens);
    const countMax = lens.filter((l) => l === max).length;
    if (lens[q.correct] === max && countMax === 1) uniqueLongest += 1;
    if (Number.isInteger(q.correct)) positions[q.correct] += 1;
  });
  if (uniqueLongest > Math.floor(ch.questions.length / 3)) {
    fail(where, "the correct answer is the unique longest option in " + uniqueLongest + " questions (max " + Math.floor(ch.questions.length / 3) + ")");
  }
  const maxPos = Math.max(...positions);
  if (maxPos > Math.ceil(ch.questions.length / 2)) {
    fail(where, "correct answers clumped in one position (" + positions.join("/") + ")");
  }
}

const chapters = loadChapters();
if (chapters.length !== EXPECTED_IDS.length) {
  fail("bank", "expected " + EXPECTED_IDS.length + " chapters, found " + chapters.length);
}
const ids = chapters.map((c) => c.id).sort((a, b) => a - b);
if (ids.join(",") !== EXPECTED_IDS.join(",")) {
  fail("bank", "chapter ids must be " + EXPECTED_IDS.join(",") + ", found " + ids.join(","));
}

const marked = new Set(FAVORITE_IDS);
chapters.forEach((ch) => {
  const where = "capítulo " + ch.id;
  const want = marked.has(ch.id) ? WEIGHT_MARKED : WEIGHT_UNMARKED;
  if (ch.weight !== want) {
    const why = marked.has(ch.id) ? "marked in favoritosdoc.jpeg" : "not marked in favoritosdoc.jpeg";
    fail(where, "weight must be " + want + " (" + why + "), found " + ch.weight);
  }
});
const weightSum = chapters.reduce((s, c) => s + (c.weight || 0), 0);
const markedWeight = chapters.reduce((s, c) => s + (marked.has(c.id) ? (c.weight || 0) : 0), 0);
const markedShare = weightSum ? markedWeight / weightSum : 0;
if (markedShare < MARKED_SHARE_MIN || markedShare > MARKED_SHARE_MAX) {
  fail("bank", "marked chapters must take " + MARKED_SHARE_MIN * 100 + "-" + MARKED_SHARE_MAX * 100 +
    "% of the simulacro, their weights take " + (markedShare * 100).toFixed(1) + "%");
}

const seen = new Map();
chapters.forEach((ch) => {
  checkChapter(ch);
  (ch.questions || []).forEach((q) => {
    if (seen.has(q.id)) fail("bank", "duplicate question id " + q.id);
    seen.set(q.id, true);
  });
});

// The bank is not the only student-facing surface: the app shell and the page carry copy too.
[["app.js", path.join(__dirname, "app.js")], ["index.html", path.join(__dirname, "index.html")]]
  .forEach(([name, file]) => {
    if (!fs.existsSync(file)) return;
    const hit = voseoHit(fs.readFileSync(file, "utf8"));
    if (hit) fail(name, "student-facing copy uses voseo: " + hit);
  });

const total = chapters.reduce((s, c) => s + (c.questions || []).length, 0);
if (total < EXPECTED_IDS.length * QUESTIONS_PER_CHAPTER) {
  fail("bank", "expected at least " + EXPECTED_IDS.length * QUESTIONS_PER_CHAPTER + " questions, found " + total);
}

if (failures.length) {
  failures.forEach((f) => console.log("FAIL " + f));
  console.log("\n" + failures.length + " failure(s) across " + chapters.length + " chapters, " + total + " questions.");
  process.exit(1);
}
console.log("PASS " + chapters.length + " chapters, " + total + " questions, 4 options each, rules and error explanations present.");
