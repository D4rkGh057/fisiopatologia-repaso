// Chapter 34: Neuronal hyperexcitability (seizures and epilepsy). Source: Vinueza, Fisiopatología Humana, book pp. 800-818.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 34,
  weight: 4,
  title: "34. Hiperexcitabilidad neuronal",
  easy: `
  <h2>La idea en una frase</h2>
  <p>Una crisis convulsiva es un grupo de neuronas que se dispara a la vez y sin freno. Ocurre porque sobra glutamato (el mensajero que excita) o falta GABA (el que inhibe).</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <p>Antes de seguir, dos palabras. Un <b>potencial de acción</b> es el impulso eléctrico con el que la neurona habla. La <b>despolarización</b> es perder carga negativa y acercarse al punto en que la neurona dispara.</p>
  <ol>
    <li>Se rompe el equilibrio: sube el glutamato, baja el GABA, o un canal de Na+, K+ o Ca2+ funciona mal.</li>
    <li>Entra Ca2+ y la membrana queda despolarizada más tiempo de lo normal.</li>
    <li>Esa despolarización sostenida abre canales de Na+ y aparecen impulsos repetidos muy rápidos.</li>
    <li>Muchas neuronas disparan juntas: se llama <b>hipersincronización</b> y con ella ocurre la <b>iniciación</b> de la crisis.</li>
    <li>Las descargas suben el K+ que queda fuera de la célula, y ese potasio despolariza a las neuronas vecinas.</li>
    <li>Además se acumula Ca2+ en las terminaciones nerviosas y se activa el receptor NMDA, que deja entrar más calcio.</li>
    <li>El anillo de neuronas GABA que frenaba la descarga no alcanza, y la crisis se extiende: es la <b>propagación</b>.</li>
    <li>Si la descarga abarca los dos hemisferios, se pierde la conciencia y se gasta mucha energía.</li>
    <li>Al final las neuronas quedan agotadas: viene el <b>periodo postictal</b>, con confusión y sueño.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <p>Cada crisis tiene su forma, y la forma dice qué parte del cerebro se descargó.</p>
  <ul>
    <li><b>Ausencia típica:</b> el niño se queda con la mirada fija unos segundos y detiene lo que hacía, sin moverse y sin confusión después; es una descarga generalizada muy breve.</li>
    <li><b>Ausencia atípica:</b> empieza despacio, dura más y el cuerpo se mueve más.</li>
    <li><b>Mioclónica:</b> sacudidas bruscas y cortas; el paciente suelta lo que tiene en la mano y el electroencefalograma muestra puntas o polipuntas generalizadas.</li>
    <li><b>Tónica:</b> contracción sostenida alrededor de un minuto; el espasmo de la laringe produce el grito y la apnea produce la cianosis.</li>
    <li><b>Clónica:</b> sacudidas rítmicas e irregulares, con mordedura de lengua y sialorrea.</li>
    <li><b>Tónico-clónica:</b> pérdida de conciencia, fase tónica y fase clónica, y postictal al final; si pasa de 5 minutos es <b>status epiléptico</b>.</li>
    <li><b>Focal:</b> la descarga empieza en una zona y los síntomas dependen de esa zona; puede generalizarse después.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Te da una viñeta corta con la edad y un antecedente: trauma, encefalitis o familia. Luego te pide el mecanismo de la fase: iniciación o propagación.</li>
    <li>Te pregunta el dato exacto: qué ion entra en la iniciación, qué pasa con el K+ extracelular al propagarse, qué canal explica la epilepsia grave.</li>
    <li>Te pide interpretar un electroencefalograma o una tomografía por emisión de positrones: polipuntas generalizadas, descargas focales, hipometabolismo.</li>
    <li>Te pide el diagnóstico más probable de la crisis: ausencia típica, mioclónica, tónica, atónica, focal.</li>
    <li>Ejemplo de su estilo: «Joven de 19 años que tras una noche de alcohol y sin dormir suelta la taza por sacudidas breves de ambos brazos; en el electroencefalograma, ¿qué espera encontrar?».</li>
  </ul>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> invertir la dirección de los datos. En la propagación el K+ extracelular <b>sube</b> (no baja) y el Ca2+ presináptico se <b>acumula</b>; la hiperpolarización por GABA <b>contiene</b> la descarga, no la provoca. Otra: confundir una ausencia típica (inicio y fin abruptos, sin movimientos, sin postictal) con una atípica (inicio lento, más duración, más movimiento).</div>

  <h2>Números para memorizar</h2>
  <ul>
    <li>Potencial de acción: reposo -70 mV, umbral -55 mV, pico +40 mV.</li>
    <li>Crisis tónico-clónica de más de 5 minutos = status epiléptico.</li>
    <li>Fase tónica: 10 a 30 segundos; crisis tónica: alrededor de un minuto.</li>
    <li>5 a 10 % de la población tendrá al menos una crisis; cerca de un tercio son idiopáticas.</li>
  </ul>
  `,
  summary: `
  <h2>1. Fundamentos</h2>
  <p>La <b>hiperexcitabilidad neuronal</b> es la capacidad anormal de grupos neuronales de generar descargas excesivas, repetitivas y sincronizadas que superan la inhibición normal; es la base de las crisis convulsivas y la epilepsia. Nace de un <b>desequilibrio entre neurotransmisión excitatoria (glutamato) e inhibitoria (GABA)</b> y de alteraciones de canales de Na+, K+ y Ca2+. Se puede tener una crisis sin tener epilepsia. Datos del libro: 5-10% de la población tendrá al menos una crisis; el lóbulo que origina más crisis es el <b>temporal, sobre todo el hipocampo</b>.</p>
  <ul>
    <li><b>Epileptogénesis</b>: transformación progresiva de una red neuronal normal en una red <b>crónicamente hiperexcitable</b>. Tras un traumatismo, cambios estructurales con una zona de fibrosis pueden generar hiperexcitabilidad local.</li>
    <li>Potencial de acción (libro): reposo ≈ -70 mV; umbral -55 mV; la despolarización por entrada de Na+ lleva el potencial a +40 mV; la repolarización por salida de K+ lo regresa a -70 mV.</li>
  </ul>
  <div class="note"><b>Alerta del libro:</b> escribe el potencial de reposo como «70 milivoltios» (sin signo) y atribuye la despolarización al «ingreso de tres iones de Na+» y la repolarización a la «salida de dos iones de K+». Eso mezcla la bomba Na+/K+-ATPasa (3 Na+ afuera, 2 K+ adentro) con el potencial de acción. Para el examen, recuerde las cifras del libro (-70, -55, +40 mV) y que Na+ entra al despolarizar y K+ sale al repolarizar.</div>

  <h2>2. Fases de la crisis</h2>
  <h3>Iniciación</h3>
  <p>Dos sucesos: <b>descargas de alta frecuencia de potenciales de acción</b> e <b>hipersincronización</b>. Se deben a una despolarización prolongada de la membrana por entrada de Ca2+ extracelular, que abre canales de Na+ y genera potenciales repetitivos. Luego, la hiperpolarización mediada por GABA o por canales de K+ queda alterada.</p>
  <h3>Propagación</h3>
  <p>Normalmente la descarga se contiene por una hiperpolarización normal y una región circundante de <b>células inhibidoras GABAérgicas</b>. Las descargas repetitivas provocan: <b>aumento del K+ extracelular</b> (despolariza neuronas vecinas), <b>acumulación de Ca2+ presináptico</b> (más liberación de neurotransmisor) y <b>activación de receptores NMDA</b> por glutamato (más entrada de Ca2+). Así la descarga se extiende.</p>
  <p><b>Mecanismos extrínsecos</b>: cambios en neurotransmisores (↑ glutamato, ↓ GABA). Ejemplo del libro: el <b>ácido domoico</b> de moluscos (almejas, mejillones, ostiones) estimula el glutamato y causa crisis. <b>Mecanismos intrínsecos</b>: cambios en la conductancia de canales iónicos. Desencadenantes: privación de sueño, fiebre, abstinencia de alcohol o drogas, hipoxia, infecciones.</p>
  <p><b>EEG</b>: frecuencia en Hz, potencia en µV. Ondas del libro: delta 1-3 Hz (sueño profundo), theta 3,5-8, alfa 8-13 (calma), beta 12-33 (vigilia, concentración), gamma 25-100 Hz.</p>

  <h2>3. Causas</h2>
  <table>
    <tr><th>Grupo</th><th>Mecanismo o ejemplo</th></tr>
    <tr><td>Genéticas: canalopatías</td><td>Mutaciones de canales iónicos (se conocen 10 genes de canales de K+). Canales de Na+: más corriente de Na+ = más excitabilidad; pérdida total de función = epilepsia muy grave, pérdida parcial = suele ser benigna. Asociación con arritmias, ataxia episódica, parálisis periódica, migraña hemipléjica, QT largo</td></tr>
    <tr><td>Convulsiones neonatales familiares benignas</td><td>Transitorias; cromosomas 20q13 y 8q24; canales de K+</td></tr>
    <tr><td>Fotosensibles</td><td>Respuesta paroxística a la fotoestimulación en el EEG; genéticas, infancia y adolescencia</td></tr>
    <tr><td>Disfunción de barrera hematoencefálica</td><td>Déficit del transportador <b>GLUT1</b>: ↓ captación cerebral de glucosa e hipometabolismo en la zona epileptogénica; paso de albúmina y mala amortiguación del K+</td></tr>
    <tr><td>Astrocitos</td><td><b>Acuaporina 4</b> alterada y ↓ del canal <b>Kir4.1</b>: falla la regulación del K+ extracelular</td></tr>
    <tr><td>Inflamación</td><td><b>IL-1β</b> (e IL-18): inhibe corrientes GABA, aumenta la función del NMDA y la movilización de Ca2+ intracelular</td></tr>
    <tr><td>Otras</td><td>Estructural (ACV, trauma, tumor, malformaciones), infecciosa (neurocisticercosis, VIH, CMV, toxoplasmosis, meningoencefalitis), metabólica (hipo e hiperglucemia, hipo e hipernatremia, hipocalcemia, encefalopatía hepática, uremia), inmune (anti-NMDA, anti-LGI1), idiopática (~1/3), fármacos (betalactámicos, quinolonas, aciclovir, isoniacida, tramadol, teofilina, litio, etc.) y abstinencia de benzodiacepinas, barbitúricos o alcohol</td></tr>
  </table>

  <h2>4. Tipos de crisis y manifestaciones</h2>
  <table>
    <tr><th>Tipo</th><th>Clave</th></tr>
    <tr><td>Ausencia típica</td><td>Niños; segundos de alteración de conciencia, mirada fija, detención de la actividad; cesan hacia la adolescencia</td></tr>
    <tr><td>Ausencia atípica</td><td>Comienzo más lento, más duración, actividad motora más notoria</td></tr>
    <tr><td>Mioclónica</td><td>Sacudidas bruscas y breves; pueden tirar objetos; EEG: puntas o polipuntas generalizadas y simétricas; tras alcohol, estrés, privación de sueño, fatiga</td></tr>
    <tr><td>Tónica</td><td>Contracción prolongada (~1 min); brazos en flexión, piernas en extensión; caídas con traumatismo craneal</td></tr>
    <tr><td>Clónica</td><td>Sacudidas en las cuatro extremidades, irregulares</td></tr>
    <tr><td>Atónica</td><td>Pérdida abrupta del tono muscular con caída; pediátrica</td></tr>
    <tr><td>Tónico-clónica</td><td>Pérdida de conciencia abrupta; fase tónica (10-30 s: grito laríngeo, mandíbula encajada, apnea, cianosis) y fase clónica (sacudidas, sialorrea, mordedura de lengua, taquicardia, HTA, relajación de esfínteres). &gt; 5 min = <b>status epiléptico</b></td></tr>
    <tr><td>Focal</td><td>Zona epileptogénica limitada; según la región; puede generalizarse (focal secundaria)</td></tr>
  </table>
  <p><b>Periodo postictal</b>: las crisis generalizadas consumen mucha energía; las neuronas se agotan y hay confusión y somnolencia de minutos a horas, con flacidez.</p>
  <div class="note"><b>Alerta del libro:</b> el caso clínico (mujer de 18 años con crisis, fiebre, nódulos pulmonares y granuloma en biopsia transbronquial) concluye «tuberculoma cerebral», pero no describe ninguna neuroimagen cerebral; el libro dice que la lesión «probablemente» es tuberculosa. Trátelo como inferencia.</div>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>Iniciación = descarga de alta frecuencia + hipersincronía por despolarización con entrada de Ca2+. Propagación = falla de GABA + ↑ K+ extracelular + Ca2+ presináptico + NMDA.</li>
    <li>Epileptogénesis = red normal → red crónicamente hiperexcitable; hipocampo y lóbulo temporal.</li>
    <li>Glutamato excita (domoico, NMDA); GABA inhibe. IL-1β inhibe GABA y activa NMDA.</li>
    <li>Kir4.1 y acuaporina 4 astrocíticos regulan el K+ extracelular; GLUT1 en la barrera hematoencefálica aporta glucosa.</li>
    <li>Canal de Na+: pérdida total = grave, parcial = benigna.</li>
    <li>Crisis tónico-clónica &gt; 5 min = status; el periodo postictal es agotamiento energético. Mioclónica = polipuntas generalizadas.</li>
    <li>Crisis y estado de alerta: la crisis es un fallo transitorio difuso, no una lesión estructural (se une con el capítulo 32); además la hipoxia e hipercapnia de la crisis pueden elevar la PIC (capítulo 33).</li>
  </ul>
  `,
  questions: [
    {
      id: "34-0",
      stem: "Un hombre de 26 años, con una cicatriz postraumática en el lóbulo temporal derecho, presenta una crisis focal. El electroencefalograma registra al inicio descargas de alta frecuencia en una zona restringida de la corteza. ¿Qué mecanismo celular explica la fase de iniciación?",
      options: [
        { t: "Hiperpolarización sostenida por GABA que impide la descarga repetitiva.", why: "Asumes que el freno GABA está reforzado; en la iniciación la hiperpolarización por GABA o por canales de K+ está alterada, y el trazado muestra descargas, no silencio." },
        { t: "Despolarización prolongada por entrada de Ca2+ que abre canales de Na+.", why: "El Ca2+ extracelular que entra mantiene la despolarización; eso abre los canales de Na+ y genera potenciales repetitivos de alta frecuencia, los dos rasgos de la iniciación." },
        { t: "Salida masiva de K+ que repolariza la membrana y acorta el potencial.", why: "Confundes el final del potencial de acción con su comienzo: el K+ que sale repolariza y apaga la descarga, mientras que iniciarla exige una membrana despolarizada." },
        { t: "Activación de interneuronas GABAérgicas vecinas que sincronizan el foco.", why: "Esas interneuronas son el cerco que contiene la descarga; su falla pertenece a la propagación, no al disparo inicial del foco temporal." }
      ],
      correct: 1,
      rule: "Si preguntan iniciación, busca despolarización prolongada con entrada de Ca2+ y Na+; el freno GABA aparece en la propagación."
    },
    {
      id: "34-1",
      stem: "Un niño de 5 años con encefalitis presenta crisis que comienzan en un punto cortical y avanzan a regiones vecinas. El anillo de neuronas GABAérgicas que rodea el foco no logra contener la descarga. ¿Qué mecanismo permite la propagación?",
      options: [
        { t: "Aumento del K+ extracelular, Ca2+ presináptico y activación de receptores NMDA.", why: "Las descargas repetitivas suben el K+ fuera de la célula y despolarizan a las vecinas, acumulan Ca2+ en las terminaciones y activan el NMDA del glutamato: la descarga avanza." },
        { t: "Descenso del K+ extracelular, Ca2+ presináptico y bloqueo de receptores NMDA.", why: "Inviertes los tres datos a la vez: el K+ extracelular sube, el Ca2+ se acumula y el NMDA se activa; con tu versión la descarga se apagaría sola." },
        { t: "Apertura de canales de K+ con hiperpolarización de las neuronas vecinas.", why: "Esa hiperpolarización es el mecanismo fisiológico que contiene la descarga; abrir canales de K+ aleja a la neurona vecina del umbral de disparo." },
        { t: "Reducción del Ca2+ presináptico con menor liberación de glutamato.", why: "Al revés: menos Ca2+ presináptico liberaría menos glutamato y frenaría la propagación; para propagarse la crisis necesita más liberación, no menos." }
      ],
      correct: 0,
      rule: "Propagación = K+ extracelular alto, Ca2+ presináptico acumulado y NMDA activo. Si la opción apaga la descarga, está invertida."
    },
    {
      id: "34-2",
      stem: "Cuatro adultos previamente sanos presentan crisis convulsivas generalizadas cuatro horas después de comer mejillones cultivados en una zona con ácido domoico. Ninguno tiene antecedentes neurológicos ni fiebre. ¿Qué mecanismo explica la hiperexcitabilidad?",
      options: [
        { t: "Aumento de la inhibición GABAérgica por bloqueo de la recaptación de GABA en la sinapsis cortical.", why: "Confundes excitación con inhibición: el GABA es el freno del sistema nervioso; una toxina que aumentara la inhibición produciría somnolencia, no crisis." },
        { t: "Aumento de la entrada de Na+ por una mutación de los canales de sodio.", why: "Ese es un mecanismo intrínseco por canalopatía heredada; aquí cuatro personas sanas enfermaron tras la misma comida, lo que apunta a una toxina." },
        { t: "Aumento de la liberación de acetilcolina en la placa motora.", why: "La acetilcolina actúa en la placa motora y en el sistema autónomo; la crisis nace en la corteza, donde el transmisor excitador principal es el glutamato." },
        { t: "Aumento de la estimulación glutamatérgica, el principal excitador del sistema nervioso central.", why: "El ácido domoico de los moluscos estimula el glutamato; con más glutamato entra más Ca2+ por el receptor NMDA y la neurona descarga. Es el ejemplo de mecanismo extrínseco." }
      ],
      correct: 3,
      rule: "Toxina en la comida y varios pacientes a la vez = mecanismo extrínseco por glutamato, no canalopatía heredada."
    },
    {
      id: "34-3",
      stem: "En una familia con epilepsia por mutación de los canales de Na+, un hermano perdió toda la función del canal y el otro solo una parte. ¿Qué relación existe entre el grado de pérdida de función del canal y la gravedad de la epilepsia?",
      options: [
        { t: "La pérdida total produce epilepsia benigna y la parcial, epilepsia grave.", why: "Inviertes el gradiente: cuanto más completa es la pérdida de función del canal, peor es la epilepsia; parcial significa que queda función y el cuadro suele ser benigno." },
        { t: "Solo la ganancia de función del canal produce epilepsia; la pérdida es silente.", why: "Confundes ganancia con pérdida: también la pérdida de función del canal de Na+ epileptiza, y de hecho la pérdida total es la forma más grave." },
        { t: "La pérdida total produce epilepsia muy grave y la parcial suele ser benigna.", why: "Sin canales funcionales la membrana y la red quedan inestables, y la epilepsia es muy grave; con pérdida parcial queda corriente suficiente y el cuadro es benigno. La ganancia de corriente también excita." },
        { t: "La gravedad depende solo de la edad de inicio y no del grado de pérdida.", why: "La edad no explica la diferencia entre los dos hermanos: lo que cambia entre ellos es cuánta función del canal de Na+ se perdió." }
      ],
      correct: 2,
      rule: "Canal de Na+: pérdida total de función = epilepsia muy grave; pérdida parcial = benigna. No es al revés."
    },
    {
      id: "34-4",
      stem: "Una niña de 4 años presenta crisis recurrentes y retraso del desarrollo. La tomografía por emisión de positrones muestra hipometabolismo en la zona epileptogénica y se confirma déficit del transportador GLUT-1 en la barrera hematoencefálica. ¿Qué mecanismo explica las crisis?",
      options: [
        { t: "Acúmulo de glucosa en la neurona con activación de receptores NMDA.", why: "Inviertes el sentido del transporte: GLUT-1 mete glucosa desde la sangre al cerebro; si falta, la neurona queda con menos energía, no con glucosa acumulada." },
        { t: "Menor captación cerebral de glucosa con hipometabolismo neuronal.", why: "Sin GLUT-1 la glucosa no cruza desde la sangre, la zona epileptogénica cae en hipometabolismo y la falta de energía vuelve inestable la membrana; de ahí las crisis." },
        { t: "Sobreexpresión de acuaporina 4 con aumento del K+ extracelular.", why: "La acuaporina 4 es un canal de agua astrocitario que ayuda a regular el K+; el defecto descrito aquí está en el transporte de glucosa de la barrera." },
        { t: "Exceso de GABA por falta de glucosa con despolarización neuronal.", why: "La falta de energía no produce exceso de GABA; el GABA es el freno, y su aumento reduciría la excitabilidad en lugar de desencadenar crisis." }
      ],
      correct: 1,
      rule: "Hipometabolismo más GLUT-1 = la neurona no recibe glucosa. Falta de energía, nunca exceso de sustrato."
    },
    {
      id: "34-5",
      stem: "Se estudia el hipocampo resecado a una paciente con epilepsia farmacorresistente: esclerosis del hipocampo, acuaporina 4 mal localizada y expresión disminuida del canal Kir4.1 en los astrocitos. ¿Qué mecanismo explica la hiperexcitabilidad?",
      options: [
        { t: "Pérdida de la regulación astrocitaria del K+ extracelular.", why: "Kir4.1 y acuaporina 4 permiten al astrocito amortiguar el K+ que sale de las neuronas; al faltar, el K+ extracelular sube y despolariza a las células vecinas." },
        { t: "Recaptación excesiva de glutamato por los astrocitos.", why: "El problema descrito es el K+, no el glutamato: el enunciado sitúa el defecto en Kir4.1 y acuaporina 4, un canal de potasio y un canal de agua." },
        { t: "Apertura constante de canales de Na+ neuronales por mutación.", why: "Esa sería una canalopatía genética de la neurona; aquí el defecto está en el astrocito, la célula que debería limpiar el potasio del espacio extracelular." },
        { t: "Aumento de la captación de K+ por mayor expresión de Kir4.1.", why: "Inviertes la dirección: Kir4.1 está disminuido, por eso el astrocito capta menos K+ y el potasio se acumula fuera de la célula." }
      ],
      correct: 0,
      rule: "Astrocito con menos Kir4.1 = K+ extracelular alto y neuronas vecinas despolarizadas. No es una canalopatía neuronal."
    },
    {
      id: "34-6",
      stem: "Un hombre de 40 años con encefalitis viral presenta crisis frecuentes y concentraciones altas de interleucina 1 beta en el líquido cefalorraquídeo. ¿Qué efecto de esa citocina explica la hiperexcitabilidad?",
      options: [
        { t: "Potencia las corrientes GABA y reduce la función del receptor NMDA.", why: "Es exactamente lo contrario: la IL-1β quita el freno GABA y pisa el acelerador NMDA; tu versión apagaría la crisis en lugar de generarla." },
        { t: "Reduce la movilización de Ca2+ intracelular y la transmisión glutamatérgica.", why: "Confundes el efecto sobre el calcio: la IL-1β aumenta la movilización intracelular de Ca2+ y la función del NMDA, no las reduce." },
        { t: "Bloquea la entrada de Na+ y abre canales de K+ en la membrana.", why: "Ese efecto hiperpolarizaría la neurona y la protegería; en la encefalitis la citocina hace lo opuesto sobre la membrana." },
        { t: "Inhibe las corrientes GABA y aumenta la función del NMDA y el Ca2+ intracelular.", why: "La IL-1β inhibe las corrientes GABA, potencia el NMDA y moviliza Ca2+ intracelular: baja la inhibición y sube la excitación al mismo tiempo." }
      ],
      correct: 3,
      rule: "Citocina inflamatoria = quita freno GABA y sube NMDA con calcio. Si la opción reduce la excitación, está invertida."
    },
    {
      id: "34-7",
      stem: "Una niña de 7 años se queda varias veces al día con la mirada fija durante unos segundos, detiene lo que estaba haciendo y no responde al llamado; luego continúa sin movimientos notorios y sin confusión. ¿Cuál es el diagnóstico más probable?",
      options: [
        { t: "Crisis tónico-clónica generalizada, con fase tónica y fase clónica.", why: "La tónico-clónica pierde la conciencia de forma abrupta, tiene contracciones y deja un periodo postictal; aquí no hay movimientos ni confusión posterior." },
        { t: "Ausencia atípica, de comienzo lento y con actividad motora notoria.", why: "La atípica empieza despacio, dura más y mueve más el cuerpo; el enunciado describe segundos, sin movimientos y con corte limpio." },
        { t: "Ausencia típica, de inicio y fin abruptos y sin actividad motora.", why: "Son episodios breves de desconexión con mirada fija e inmovilidad en edad pediátrica, de inicio y fin abruptos y sin confusión al volver." },
        { t: "Crisis atónica, con pérdida abrupta del tono y caída al suelo.", why: "La atónica es una caída por pérdida del tono muscular; esta niña permanece de pie y solo se desconecta durante unos segundos." }
      ],
      correct: 2,
      rule: "Ausencia: segundos, mirada fija, sin caída y sin postictal. Si hay movimientos o confusión, busca otra crisis."
    },
    {
      id: "34-8",
      stem: "Una mujer de 18 años sufre una crisis tónico-clónica de 7 minutos, con cianosis y relajación de esfínteres; después queda confusa y somnolienta durante una hora. ¿Qué explica la confusión posterior?",
      options: [
        { t: "Exceso de inhibición GABAérgica que sigue a la descarga.", why: "Supones que el cerebro queda frenado por GABA; el postictal refleja neuronas agotadas por el gasto energético, y la flacidez acompaña ese agotamiento." },
        { t: "Agotamiento neuronal por el gran consumo de energía de la crisis.", why: "Siete minutos de contracción y sacudidas gastan mucha energía, así que las neuronas se agotan y aparece confusión con somnolencia y flacidez. Además, siete minutos superan los cinco del status." },
        { t: "Lesión estructural nueva de la corteza producida por los movimientos de la crisis.", why: "Una lesión nueva no depende de la duración de la crisis ni da un cuadro que se recupera en una hora sin déficit focal." },
        { t: "Persistencia de la descarga focal en el lóbulo temporal.", why: "La crisis ya terminó: si la descarga focal persistiera habría signos focales en curso, no somnolencia difusa con flacidez." }
      ],
      correct: 1,
      rule: "Más de 5 minutos es status; la confusión que viene después es agotamiento energético, no una lesión nueva."
    },
    {
      id: "34-9",
      stem: "Un estudiante de 19 años, tras una noche de alcohol y sin dormir, presenta sacudidas bruscas y breves de ambos brazos que le hacen soltar la taza. ¿Qué hallazgo espera encontrar en el electroencefalograma?",
      options: [
        { t: "Ondas delta de 1 a 3 Hz propias del sueño profundo.", why: "Las delta son el ritmo del sueño profundo, no un patrón crítico; la privación de sueño favorece la crisis, pero no explica el trazado de la mioclonía." },
        { t: "Ondas alfa de 8 a 13 Hz propias de la calma y la relajación.", why: "Las alfa aparecen en calma con ojos cerrados; no son descargas críticas y no corresponden a una sacudida mioclónica." },
        { t: "Descargas limitadas a una zona restringida de la corteza.", why: "Eso correspondería a una crisis focal; la mioclónica es generalizada y el trazado lo muestra en los dos hemisferios a la vez." },
        { t: "Puntas o polipuntas generalizadas y simétricas.", why: "La crisis mioclónica cursa con puntas o polipuntas generalizadas y simétricas, y es típica tras alcohol, estrés o privación de sueño." }
      ],
      correct: 3,
      rule: "Mioclonía con brazos que sueltan objetos = polipuntas generalizadas y simétricas, no ritmo de sueño."
    },
    {
      id: "34-10",
      stem: "Un hombre de 30 años, en la fase tónica de una crisis tónico-clónica, emite un grito agudo, deja de respirar y se pone cianótico. ¿Qué explica la cianosis en ese momento?",
      options: [
        { t: "Relajación de esfínteres por la flacidez muscular generalizada.", why: "La relajación de esfínteres aparece con la flacidez y se describe en la crisis, pero no cambia el oxígeno de la sangre ni tiñe de azul la piel." },
        { t: "Taquicardia con hipertensión arterial durante la fase clónica.", why: "Taquicardia e hipertensión acompañan la fase clónica; aumentan el gasto cardiaco, no impiden la oxigenación de la sangre." },
        { t: "Espasmo laríngeo con apnea u obstrucción de la vía aérea.", why: "El espasmo de la laringe y la apnea interrumpen la entrada de aire: la sangre se desatura y aparece cianosis mientras dura la contracción." },
        { t: "Pérdida abrupta del tono muscular con caída al suelo.", why: "La caída por pérdida de tono es la crisis atónica; aquí el paciente está en contracción tónica, no flácido." }
      ],
      correct: 2,
      rule: "En la fase tónica, cianosis = espasmo laríngeo con apnea; el grito agudo sale de la laringe espasmódica."
    },
    {
      id: "34-11",
      stem: "Un hombre de 33 años, previamente sano, presenta una crisis tónico-clónica de 2 minutos y una hora después sigue confuso. La tomografía y la resonancia son normales y se recupera por completo. ¿Cómo se explica la pérdida de conciencia?",
      options: [
        { t: "Disfunción cortical difusa transitoria con participación del tálamo.", why: "En la crisis generalizada la excitabilidad abarca toda la corteza y su interacción con el tálamo; de ahí la pérdida de conciencia y el postictal por gasto energético." },
        { t: "Lesión estructural pequeña y no visible de la corteza frontal izquierda.", why: "Las imágenes normales y la recuperación completa descartan una lesión estructural, y una lesión frontal pequeña no borra la conciencia de forma difusa." },
        { t: "Compresión del tallo encefálico durante la fase tónica.", why: "La compresión del tallo da deterioro rostrocaudal progresivo con signos de herniación; este paciente despierta solo y su imagen es normal." },
        { t: "Hipoperfusión cerebral global durante la crisis.", why: "Una hipoperfusión global sostenida dejaría daño y no una recuperación completa en una hora; durante la crisis el problema es la descarga, no el flujo." }
      ],
      correct: 0,
      rule: "Crisis generalizada con imagen normal = disfunción cortical difusa con el tálamo; perder la conciencia no exige lesión."
    }
  ]
}
);
