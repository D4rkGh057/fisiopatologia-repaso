// Chapter 20: Nephrotic syndrome. Source: Vinueza, Fisiopatología Humana.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 20,
  weight: 3,
  title: "20. Síndrome nefrótico",
  summary: `
  <h2>1. Qué falla</h2>
  <p>La barrera de filtración glomerular tiene tres capas: <b>endotelio fenestrado</b>, <b>membrana basal glomerular (MBG)</b> y <b>podocitos</b> con su diafragma de hendidura. Normalmente deja pasar menos del 0,1% de la albúmina plasmática. Si la barrera se daña, pierde selectividad y se escapan proteínas. El daño es <b>no inflamatorio</b>.</p>

  <h2>2. La cascada fisiopatológica</h2>
  <ol>
    <li>↑ permeabilidad glomerular → <b>proteinuria masiva</b>.</li>
    <li>→ <b>hipoalbuminemia</b>.</li>
    <li>→ ↓ presión coloidosmótica (oncótica) del plasma (normal ≈ 28 mmHg según el libro).</li>
    <li>→ se rompe el equilibrio de Starling: el líquido pasa del vaso al intersticio → <b>edema</b>.</li>
    <li>→ <b>hipovolemia relativa</b> → se activa el eje renina-angiotensina-aldosterona (RAA) y la ADH, y se inhibe el péptido natriurético auricular.</li>
    <li>→ retención de sodio y agua → más edema.</li>
  </ol>
  <div class="note">Idea clave: el edema nefrótico se debe a la <b>caída de la presión oncótica</b>, no a un aumento de la permeabilidad de los capilares sistémicos.</div>

  <h2>3. Qué se pierde y qué consecuencia produce</h2>
  <table>
    <tr><th>Qué se pierde o se altera</th><th>Consecuencia</th></tr>
    <tr><td>Albúmina</td><td>Edema, hipoalbuminemia, signo de Muehrcke (bandas blancas horizontales en las uñas)</td></tr>
    <tr><td>Antitrombina III y factor de Von Willebrand; ↑ fibrinógeno y agregación plaquetaria</td><td>Hipercoagulabilidad: trombosis arterial o venosa</td></tr>
    <tr><td>IgG y proteínas del complemento; zinc y hierro</td><td>Infecciones (neumococo, estreptococo β-hemolítico; peritonitis neumocócica en niños)</td></tr>
    <tr><td>Transferrina</td><td>Anemia hipocrómica microcítica resistente al hierro oral</td></tr>
    <tr><td>↑ síntesis hepática de lipoproteínas, ↓ lipoproteína lipasa (LPL), Angptl4</td><td>Dislipidemia: ↑ colesterol, LDL y triglicéridos</td></tr>
    <tr><td>Lípidos filtrados que el túbulo no alcanza a reabsorber</td><td>Lipiduria: cuerpos ovales grasos y "cruz de Malta" con luz polarizada</td></tr>
  </table>

  <h2>4. Criterios diagnósticos (según el libro)</h2>
  <ul>
    <li>Proteinuria &gt; 3,5 g/24 h en adultos.</li>
    <li>Hipoalbuminemia ≤ 3,5 g/dL.</li>
    <li>Edema.</li>
    <li>Hiperlipidemia: colesterol total &gt; 200 mg/dL y triglicéridos &gt; 200 mg/dL.</li>
    <li>Lipiduria.</li>
  </ul>
  <p>Excreción normal de proteínas: ≤ 150–300 mg/24 h. El libro considera albúmina &lt; 2 g/dL como marcador de riesgo trombótico.</p>

  <h2>5. Causas</h2>
  <table>
    <tr><th>Glomerulopatía</th><th>Qué recordar (según el libro)</th></tr>
    <tr><td>Cambios mínimos</td><td>Principal causa en niños (1–6 años). Microscopía de luz normal e inmunofluorescencia negativa.</td></tr>
    <tr><td>Glomeruloesclerosis focal y segmentaria (GEFS)</td><td>Esclerosis de algunos glomérulos y solo de segmentos. Variantes APOL1 (G1, G2): progresión rápida y resistencia a inmunosupresores.</td></tr>
    <tr><td>Membranosa</td><td>Engrosamiento de la MBG por inmunocomplejos. Anti-PLA2R en la forma primaria.</td></tr>
    <tr><td>Membranoproliferativa</td><td>Proliferación celular y engrosamiento de la MBG.</td></tr>
    <tr><td>Síndrome finlandés</td><td>Gen NPHS1. Aparece en los primeros 3 meses de vida, resistente a corticoides, autosómico recesivo.</td></tr>
  </table>

  <h2>6. Por qué progresa a enfermedad renal crónica</h2>
  <p>La proteína filtrada es tóxica para el túbulo: la reabsorción excesiva de albúmina unida a ácidos grasos satura megalina y cubilina, activa NF-κB y libera citoquinas profibróticas y proinflamatorias. Resultado: fibrosis tubulointersticial irreversible.</p>

  <h2>7. Dislipidemia en detalle</h2>
  <ul>
    <li>↑ síntesis hepática de colesterol, triglicéridos y lipoproteínas, con menor catabolismo.</li>
    <li>La hipoalbuminemia afecta el transporte de colesterol.</li>
    <li>↓ actividad de la lipoproteína lipasa (LPL).</li>
    <li>Deficiencia de aciltransferasa por pérdidas urinarias: impide el desarrollo normal de HDL.</li>
    <li>Angptl4 (secretada en exceso ante la proteinuria masiva) inhibe la LPL y causa acumulación de quilomicrones y VLDL: explica la hipertrigliceridemia severa y persistente.</li>
  </ul>

  <h2>8. Anatomía y fisiología que sostienen el cuadro (págs. 476-484)</h2>
  <ul>
    <li><b>Barrera de doble filtro, por tamaño y por carga.</b> El endotelio retiene albúmina e inmunoglobulinas. La MBG (colágeno IV, laminina, proteoglicanos de heparán sulfato; 300-350 nm) frena solutos &gt; 69 000 Da y con carga negativa. Los podocitos tienen un glicocálix aniónico (ácido siálico, podocalixina). La albúmina (&gt; 69 000 Da y con carga negativa) queda retenida por ambos mecanismos.</li>
    <li><b>Qué pasa en el síndrome nefrótico:</b> se neutralizan las cargas aniónicas (se pierde la repulsión electrostática) y se pierden integrinas: el podocito se "despega" de la MBG y quedan áreas denudadas por donde escapan las proteínas.</li>
    <li><b>Filtrado:</b> pasan agua y solutos &lt; 15 000 Da; los de 15 000-69 000 Da pasan de forma variable. La presión hidrostática capilar (≈ 60 mmHg, alta a diferencia de otros capilares) favorece la filtración; la presión oncótica y la presión del espacio urinario se oponen. FG normal ≈ 125 mL/min.</li>
    <li><b>Endocapilar vs extracapilar:</b> lo que ocurre del endotelio hacia adentro (endocapilar) tiende a dar <b>hematuria</b> y es inflamatorio (glomerulonefritis). Lo que ocurre hacia afuera (MBG y podocitos, extracapilar) tiende a dar <b>proteinuria</b>. La proteinuria puede ser selectiva (albúmina) o no selectiva (también globulinas e inmunoglobulinas).</li>
    <li><b>Hiperfiltración compensatoria:</b> si se pierden nefronas o hay daño podocitario, las nefronas sanas aumentan su filtrado individual. Es útil al inicio, pero genera hipertensión intraglomerular y esclerosis secundaria, y acelera el daño. Las nefronas no se regeneran.</li>
    <li><b>Túbulo:</b> el proximal reabsorbe ≈ 65% del filtrado (glucosa, bicarbonato y aminoácidos); el asa de Henle, ≈ 25% del NaCl y 15% del agua; el distal, fracciones del 10% de Na y 15% de agua restantes. La ADH actúa en el colector (acuaporina 2). Se excreta &lt; 1% del Na filtrado y el volumen extracelular es el principal determinante de su reabsorción: si baja, se activa el RAA.</li>
    <li><b>Cifras de proteínas (libro):</b> normal ≤ 150-300 mg/24 h (2-4 mg/m²/h en niños). Albúmina máxima ≈ 100 mg/24 h; proteínas de bajo peso molecular &lt; 10 mg/24 h; proteínas tubulares ≤ 60 mg/24 h. Microalbuminuria 30-300 mg/día; macroalbuminuria &gt; 300 mg/día. Proteinuria fisiológica: fiebre/hipertermia y ejercicio intenso.</li>
  </ul>

  <h2>9. Epidemiología y causas secundarias</h2>
  <ul>
    <li>Niños: 2-10 años, relación 2:1 a favor de varones. En 1-6 años, cambios mínimos causa 80-90%. En &gt; 10 años: cambios mínimos 50%, GEFS 30%, membranoproliferativa 20%. Pronóstico bueno en cambios mínimos (recaídas frecuentes); mayor riesgo de ERC en GEFS y membranosa.</li>
    <li><b>Secundario</b> (libro, tabla 64): infecciones (sífilis, malaria, VIH, hepatitis B y C, varicela, herpes zóster, esquistosomiasis), tóxicos (mercurio, oro, bismuto, contrastes), alergias, neoplasias (Hodgkin, leucemias, carcinomas), amiloidosis, insuficiencia cardiaca, púrpura de Schönlein-Henoch, lupus, síndrome urémico hemolítico. <b>Primario:</b> frecuente en niños, sin causa conocida.</li>
  </ul>

  <h2>10. Otros mecanismos que cita el libro</h2>
  <ul>
    <li>La hipertensión del nefrótico se atribuye a la incapacidad de excretar sodio en la nefrona distal (retención de volumen).</li>
    <li>Estrés oxidativo: la proteinuria masiva genera radicales libres que peroxidan los lípidos de la membrana del podocito.</li>
    <li>La hipoalbuminemia se mantiene porque la síntesis hepática es superada por la pérdida y está restringida por la inflamación. El edema refractario con albúmina &lt; 2 g/dL se trata con albúmina exógena más diurético de asa.</li>
  </ul>

  <h2>11. Ejemplo numérico con datos del libro (diuresis)</h2>
  <p>El libro da diuresis normal de 0,5-1 mL/kg/h en adultos y <b>1-2 mL/kg/h en niños</b>. En su caso clínico: niña de 4 años, 11,46 kg, diuresis 0,6 mL/kg/h.</p>
  <ol>
    <li>Por hora: 0,6 × 11,46 = 6,88 mL/h.</li>
    <li>Por día: 6,88 × 24 ≈ 165 mL/24 h.</li>
    <li>Mínimo esperado para un niño (1 mL/kg/h): 11,46 × 24 ≈ 275 mL/24 h (rango 275-550 mL).</li>
    <li>Interpretación: 165 mL es ≈ 60% del mínimo, o sea 40% por debajo. Si se usara por error el rango adulto, 0,6 mL/kg/h parecería normal. Concuerda con la retención de sodio y agua del cuadro.</li>
  </ol>
  <p>Para comparar: FG 125 mL/min equivale a 180 L/día; con diuresis ≈ 1,5 L/día se reabsorbe más del 99% del filtrado.</p>

  <div class="note"><b>Alertas del libro:</b> en su test de evaluación, la pregunta 4 invierte las definiciones de primario y secundario. En el caso clínico, la relación proteína/creatinina aparece como "mg/ml": la unidad correcta sería mg/mmol o mg/mg. En la pág. 485 dice que cambios mínimos predomina "especialmente en menores de un año", pero en las págs. 474 y 495 lo ubica en niños de 1 a 6 años (y el síndrome finlandés es el de los primeros 3 meses): para el examen, usar 1-6 años. El libro explica la dislipidemia como mayor síntesis de LDL por la caída de presión oncótica; es una simplificación (ver sección 7). En el capítulo 21 la tabla comparativa dice que el nefrótico edema "sin llegar a anasarca" y con hipoalbuminemia "&lt; 3,5", mientras este capítulo describe anasarca y usa "≤ 3,5": hay inconsistencia interna.</div>
  `,
  questions: [
    {
      stem: "Un niño de 3 años presenta edema palpebral matutino, luego generalizado, con orina de proteínas +++ y sin hematíes ni hipertensión. Se realiza biopsia renal por recaídas frecuentes: la microscopía de luz es normal y la inmunofluorescencia es negativa. ¿Cuál es la glomerulopatía más probable?",
      options: [
        { t: "Glomeruloesclerosis focal y segmentaria, con esclerosis de segmentos de algunos glomérulos visible en la microscopía de luz", why: "Hay esclerosis de algunos glomérulos y solo de segmentos; la microscopía de luz no sería normal." },
        { t: "Enfermedad de cambios mínimos, con microscopía de luz normal e inmunofluorescencia negativa, típica de niños de 1 a 6 años", why: "Correcta. Es la principal causa en niños, sin alteraciones en la microscopía de luz y con inmunofluorescencia negativa." },
        { t: "Glomerulopatía membranosa, con engrosamiento difuso de la membrana basal por inmunocomplejos subepiteliales", why: "El engrosamiento de la membrana basal por inmunocomplejos sería visible en la biopsia; aquí la microscopía es normal." },
        { t: "Nefropatía membranoproliferativa, con proliferación celular y engrosamiento de la membrana basal en la biopsia", why: "Se caracteriza por proliferación celular y engrosamiento de la membrana basal; la biopsia no sería normal." }
      ],
      correct: 1
    },
    {
      stem: "Una niña de 6 años con síndrome nefrótico en actividad (albúmina 1,9 g/dL, proteinuria masiva) ingresa con fiebre, dolor abdominal difuso y signos de peritonitis. El cultivo del líquido ascítico desarrolla Streptococcus pneumoniae. ¿Qué mecanismo explica mejor su susceptibilidad a esta infección?",
      options: [
        { t: "Pérdida urinaria de antitrombina III, con microtrombosis mesentérica y paso de bacterias a la cavidad peritoneal", why: "La pérdida de antitrombina III explica la hipercoagulabilidad, no la susceptibilidad a la infección." },
        { t: "Pérdida urinaria de transferrina, con anemia por falta de transporte de hierro y sin efecto sobre la opsonización", why: "La pérdida de transferrina produce anemia microcítica resistente al hierro, pero no altera la opsonización ni explica la peritonitis neumocócica." },
        { t: "Aumento de la presión oncótica plasmática, que dificulta la migración de leucocitos al intersticio", why: "En el síndrome nefrótico la presión oncótica está disminuida, no aumentada." },
        { t: "Pérdida urinaria de IgG y complemento, con opsonización y fagocitosis deficientes", why: "Correcta. Es el mecanismo que describe el libro, junto con la pérdida de zinc y hierro y la disfunción linfocitaria." }
      ],
      correct: 3
    },
    {
      stem: "Una mujer de 30 años con síndrome nefrótico presenta hemoglobina 8,9 g/dL con anemia microcítica e hipocrómica. Recibió hierro oral durante 8 semanas sin ninguna respuesta. ¿Qué mecanismo es el más probable?",
      options: [
        { t: "Pérdida urinaria de transferrina por la barrera dañada, con mala llegada del hierro a la médula ósea", why: "Correcta. Sin transferrina el hierro no llega a la médula para fabricar eritrocitos, por eso no responde al hierro oral." },
        { t: "Déficit de eritropoyetina por daño del parénquima renal, con anemia normocítica y normocrómica", why: "Es el mecanismo de la anemia de la enfermedad renal crónica avanzada, y esa anemia es normocítica, no microcítica e hipocrómica." },
        { t: "Hemólisis microangiopática con fragmentación de eritrocitos y consumo de hierro en el bazo", why: "No hay datos de hemólisis, y el libro no la asocia al síndrome nefrótico." },
        { t: "Menor absorción intestinal de hierro por edema de la pared del intestino secundario a hipoalbuminemia", why: "El libro no explica así la anemia; la causa es la pérdida urinaria de la proteína transportadora, la transferrina." }
      ],
      correct: 0
    },
    {
      stem: "Un paciente con síndrome nefrótico y proteinuria masiva mantiene triglicéridos de 780 mg/dL pese a ajustes en la dieta. ¿Qué mecanismo vincula directamente la proteinuria con esta hipertrigliceridemia severa y persistente?",
      options: [
        { t: "La Angptl4 activa la lipoproteína lipasa y acelera el catabolismo de quilomicrones y VLDL", why: "Es el efecto contrario al que describe el libro: la Angptl4 inhibe la LPL." },
        { t: "La hipoalbuminemia aumenta la excreción urinaria de triglicéridos y estimula su síntesis hepática compensatoria", why: "La dislipidemia se debe a mayor síntesis y menor catabolismo, no a pérdida urinaria de triglicéridos." },
        { t: "La Angptl4, secretada en exceso, inhibe la lipoproteína lipasa y se acumulan quilomicrones y VLDL", why: "Correcta. Al inhibirse la LPL los triglicéridos no se hidrolizan, y se explica la hipertrigliceridemia severa y persistente." },
        { t: "La deficiencia de aciltransferasa por pérdida urinaria impide la maduración normal de la HDL", why: "Es un hecho que describe el libro, pero afecta a la HDL y no explica la hipertrigliceridemia severa." }
      ],
      correct: 2
    },
    {
      stem: "Un paciente con síndrome nefrótico mantiene proteinuria masiva por 18 meses. Ahora presenta descenso de la tasa de filtración glomerular y la biopsia muestra fibrosis tubulointersticial. ¿Qué mecanismo explica mejor esa progresión según el libro?",
      options: [
        { t: "Hipotensión sostenida con isquemia tubular por pérdida de volumen intravascular y necrosis tubular aguda", why: "No es el mecanismo que describe el libro; además, en el nefrótico pueden coexistir hipertensión y retención de sodio." },
        { t: "La reabsorción excesiva de albúmina satura megalina y cubilina y activa NF-κB, con citoquinas profibróticas", why: "Correcta. Es la toxicidad proteica sobre el túbulo que lleva a la fibrosis tubulointersticial y a la enfermedad renal crónica." },
        { t: "Depósito progresivo de inmunocomplejos en la membrana basal, con engrosamiento y obstrucción capilar", why: "Eso corresponde a la glomerulopatía membranosa y no explica la fibrosis tubulointersticial causada por la proteinuria." },
        { t: "Trombosis de la vena renal por hipercoagulabilidad, con infarto venoso del parénquima renal", why: "Es una posible complicación trombótica, pero no el mecanismo del daño tubular progresivo por proteinuria." }
      ],
      correct: 1
    },
    {
      stem: "Un paciente con síndrome nefrótico desarrolla hipovolemia relativa por hipoalbuminemia. ¿Qué combinación describe la respuesta neurohumoral que perpetúa el edema?",
      options: [
        { t: "↑ RAA, ↓ ADH, ↑ péptido natriurético auricular", why: "La ADH aumenta y el péptido natriurético se inhibe; esta opción invierte ambos." },
        { t: "↓ RAA, ↑ ADH, ↑ péptido natriurético auricular", why: "El RAA se activa, no se inhibe, y el péptido natriurético se inhibe, no aumenta." },
        { t: "↓ RAA, ↓ ADH, ↓ péptido natriurético auricular", why: "Solo es correcta la inhibición del péptido natriurético; el RAA y la ADH aumentan." },
        { t: "↑ RAA, ↑ ADH, ↓ péptido natriurético auricular", why: "Correcta. Las tres respuestas favorecen la retención de sodio y agua ante la hipovolemia relativa." }
      ],
      correct: 3
    },
    {
      stem: "Un lactante de 2 meses presenta edema y proteinuria masiva. Los padres, sanos y consanguíneos, refieren que no hubo respuesta al tratamiento con corticoides. ¿Cuál es la alteración más probable?",
      options: [
        { t: "Mutación del gen NPHS1, autosómica recesiva y resistente a corticoides (tipo finlandés)", why: "Correcta. Aparece en los primeros 3 meses, es resistente a corticoides y su herencia es autosómica recesiva." },
        { t: "Anticuerpos anti-PLA2R dirigidos al podocito, causa de nefropatía membranosa primaria", why: "Es un cuadro autoinmune de la nefropatía membranosa primaria, que no se presenta típicamente a los 2 meses de vida." },
        { t: "Variantes APOL1 (G1 y G2) con progresión rápida y resistencia a la inmunosupresión (GEFS)", why: "Se asocian a GEFS de progresión rápida, no al cuadro congénito de los primeros meses de vida." },
        { t: "Enfermedad de cambios mínimos de aparición temprana, que suele responder a los corticoides", why: "El dato clave es la ausencia de respuesta a los corticoides; los cambios mínimos responden a ellos." }
      ],
      correct: 0
    },
    {
      stem: "Un niño de 7 años con edema generalizado tiene proteinuria masiva y albúmina de 2,0 g/dL. La albúmina pesa más de 69 000 Da, un tamaño que normalmente la retiene en la membrana basal. En este paciente no hay inflamación glomerular ni hematuria. ¿Qué alteración de la barrera explica mejor el paso de la albúmina?",
      options: [
        { t: "Aumento de la presión hidrostática capilar glomerular por encima de 60 mmHg, que fuerza el paso de la albúmina por poros normales", why: "La presión de ≈ 60 mmHg es la normal del capilar glomerular; el paso de albúmina depende de la selectividad de la barrera, no de empujarla." },
        { t: "Fusión del endotelio con la membrana basal, que elimina la restricción por tamaño de las proteínas mayores de 69 000 Da", why: "El libro no describe esa fusión; el cuadro nefrótico se explica por la pérdida de la selectividad de carga." },
        { t: "Neutralización de las cargas aniónicas del glicocálix podocitario y pérdida de integrinas, con podocitos despegados de la membrana basal", why: "Correcta. Se pierde la repulsión electrostática con la albúmina, también aniónica, y quedan áreas denudadas por donde escapan las proteínas." },
        { t: "Hiperfiltración de nefronas sanas por pérdida de nefronas vecinas, que agranda los poros de la membrana basal sin cambiar su carga", why: "La hiperfiltración compensatoria es un mecanismo de progresión del daño, no la causa inicial de la proteinuria nefrótica." }
      ],
      correct: 2
    },
    {
      stem: "Paciente A: niño de 5 años con edema generalizado, proteinuria de 6 g/24 h, albúmina 1,9 g/dL y orina sin hematíes. Paciente B: niño de 9 años con orina color cola, PA 140/90 mmHg, diuresis de 300 mL/día y proteinuria de 1,5 g/24 h. Según la anatomía glomerular del libro, ¿qué localización predominante del daño corresponde a cada uno?",
      options: [
        { t: "A: endocapilar, con inflamación del endotelio y salida de eritrocitos; B: extracapilar, con daño de la membrana basal y los podocitos", why: "Está invertido: lo endocapilar (del endotelio hacia adentro) va con hematuria, y lo extracapilar (MBG y podocitos) va con proteinuria." },
        { t: "A: extracapilar, con daño de la membrana basal y los podocitos; B: endocapilar, con inflamación del endotelio y hematuria", why: "Correcta. El daño extracapilar produce proteinuria masiva sin hematuria (nefrótico) y el endocapilar inflamatorio permite la salida de eritrocitos (nefrítico)." },
        { t: "A y B: extracapilar, porque ambos tienen proteinuria y daño de la barrera de filtración podocitaria", why: "La hematuria con oliguria e hipertensión del paciente B indica daño endotelial inflamatorio; tener proteinuria no basta para ubicar la lesión." },
        { t: "A y B: endocapilar, porque ambos tienen daño de la barrera de filtración con pérdida de proteínas", why: "Ambos dañan la barrera, pero el sitio dominante difiere y explica la presencia o ausencia de hematuria." }
      ],
      correct: 1
    },
    {
      stem: "Un hombre de 34 años con síndrome nefrótico, albúmina de 1,7 g/dL, desarrolla dolor lumbar derecho súbito y edema doloroso unilateral de la pierna derecha. El Doppler confirma trombosis venosa. ¿Qué combinación de alteraciones explica mejor este evento?",
      options: [
        { t: "Aumento de la antitrombina III como respuesta compensatoria a la pérdida de volumen, con exceso de anticoagulación natural", why: "La antitrombina III se pierde por la orina, no aumenta; y un exceso de anticoagulación no produciría trombosis." },
        { t: "Descenso del fibrinógeno por pérdida urinaria, con consumo de plaquetas y coagulación intravascular diseminada", why: "En el nefrótico el fibrinógeno está aumentado y hay mayor agregación plaquetaria, no consumo." },
        { t: "Pérdida urinaria de IgG y complemento, con activación persistente de la cascada de coagulación por inmunocomplejos", why: "Esa pérdida explica la susceptibilidad a infecciones, no la trombosis." },
        { t: "Pérdida urinaria de antitrombina III con aumento del fibrinógeno y de la agregación plaquetaria", why: "Correcta. Es el desequilibrio entre factores procoagulantes y anticoagulantes que describe el libro; la albúmina < 2 g/dL es el marcador de riesgo." }
      ],
      correct: 3
    },
    {
      stem: "En el examen de orina de una niña con síndrome nefrótico se observan cuerpos ovales grasos que, con luz polarizada, muestran la imagen de \"cruz de Malta\". ¿Qué son esos cuerpos y qué indica su presencia?",
      options: [
        { t: "Células tubulares con lípidos filtrados; los ésteres de colesterol dan la cruz de Malta con luz polarizada", why: "Correcta. Es la explicación del libro, e indica que la grasa viene del plasma filtrado por el glomérulo dañado." },
        { t: "Leucocitos degenerados con lípidos adheridos, que indican infección urinaria sobreagregada de las vías bajas", why: "No son leucocitos; la lipiduria nefrótica no indica infección." },
        { t: "Eritrocitos dismórficos con gotas de grasa, que indican sangrado por rotura de la membrana basal glomerular", why: "En el síndrome nefrótico no hay hematuria característica, y los cuerpos ovales no son eritrocitos." },
        { t: "Gotas de grasa de origen intestinal eliminadas por el riñón, por menor capacidad de transporte con hipoalbuminemia", why: "Los lípidos de la orina proceden del plasma filtrado por el glomérulo dañado, no del intestino." }
      ],
      correct: 0
    },
    {
      stem: "Una niña de 4 años (11,46 kg) con síndrome nefrótico tiene albúmina de 2,0 g/dL y diuresis medida de 0,6 mL/kg/h. El libro da como normal 1-2 mL/kg/h en niños. ¿Cuál es la interpretación correcta?",
      options: [
        { t: "Normal: 0,6 mL/kg/h está dentro del rango de diuresis 0,5-1 mL/kg/h, por lo que no hay oliguria", why: "Ese rango es el de adultos; en niños el límite inferior es 1 mL/kg/h." },
        { t: "≈ 1 650 mL/día, es decir poliuria por pérdida de la barrera de filtración y de la reabsorción de agua", why: "Error de cálculo: 0,6 × 11,46 × 24 da ≈ 165 mL/día, no 1 650, y el nefrótico retiene sodio y agua." },
        { t: "≈ 165 mL/día, ≈ 40% por debajo del mínimo esperado de ≈ 275 mL/día, compatible con retención de sodio y agua", why: "Correcta. 0,6 × 11,46 × 24 ≈ 165 mL/día, frente a un mínimo esperado de ≈ 275 mL/día." },
        { t: "≈ 275 mL/día, justo en el límite inferior esperado para su peso, sin retención de sodio y agua", why: "275 mL/día es el mínimo esperado (1 mL/kg/h × 11,46 kg × 24 h), no su diuresis real." }
      ],
      correct: 2
    }
  ]
}
);
