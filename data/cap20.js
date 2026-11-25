// Chapter 20: Nephrotic syndrome. Source: Vinueza, Fisiopatología Humana.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 20,
  weight: 4, // marcado por el doctor (favoritosdoc.jpeg)
  title: "20. Síndrome nefrótico",
  easy: `
  <h2>La idea en una frase</h2>
  <p>En el síndrome nefrótico el filtro del riñón deja escapar proteínas por la orina. Se pierde sobre todo albúmina, la proteína más abundante de la sangre. Esa fuga explica el edema, las infecciones, las trombosis y el colesterol alto. El daño no es inflamatorio: por eso la orina no lleva sangre.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <ol>
    <li>El filtro del riñón es el <b>glomérulo</b>. Tiene tres capas: el <b>endotelio</b> (la pared interna del capilar), la <b>membrana basal</b> (una malla de sostén) y los <b>podocitos</b> (células con pies que tapan los últimos huecos).</li>
    <li>Los podocitos están cubiertos de cargas negativas. La albúmina también es negativa, y cargas iguales se repelen: la albúmina queda dentro del vaso.</li>
    <li>En el nefrótico se neutralizan esas cargas y el podocito se despega de la membrana basal. Quedan zonas sin cubierta y la albúmina escapa: <b>proteinuria masiva</b>.</li>
    <li>Al perderse albúmina baja la <b>presión oncótica</b>, que es la fuerza con que las proteínas retienen agua dentro del vaso.</li>
    <li>Con poca presión oncótica el agua sale del capilar al <b>intersticio</b> (el espacio entre las células) y aparece el <b>edema</b>.</li>
    <li>El vaso queda con poco volumen: <b>hipovolemia relativa</b>. El riñón lo lee como falta de líquido y activa el eje <b>renina-angiotensina-aldosterona</b> y la <b>ADH</b>, mientras frena el <b>péptido natriurético auricular</b>.</li>
    <li>El riñón retiene sodio y agua, y el edema crece.</li>
    <li>La orina arrastra defensas y frenos de la coagulación: <b>IgG</b> y <b>complemento</b> (infecciones), <b>antitrombina III</b> (trombosis) y <b>transferrina</b> (anemia).</li>
    <li>El hígado fabrica más lípidos y se frena la <b>lipoproteína lipasa</b>, la enzima que los quema: aparece la <b>dislipidemia</b>.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <ul>
    <li><b>Edema de párpados al despertar</b>: el líquido sale del vaso y de noche se acumula en el tejido blando de la cara.</li>
    <li><b>Orina espumosa</b>: la espuma aparece cuando la orina lleva mucha proteína.</li>
    <li><b>Albúmina baja en la sangre</b>: se pierde por la orina más rápido de lo que el hígado la fabrica.</li>
    <li><b>Peritonitis por neumococo</b> en el niño: faltan IgG y complemento, las proteínas que marcan la bacteria para que la fagociten.</li>
    <li><b>Trombosis venosa</b>: falta antitrombina III, el freno natural de la coagulación, y sube el fibrinógeno.</li>
    <li><b>Anemia microcítica que no responde a hierro</b>: falta transferrina, la proteína que lleva el hierro a la médula.</li>
    <li><b>Colesterol y triglicéridos altos</b>: el hígado fabrica más y la lipoproteína lipasa no los degrada.</li>
    <li><b>Cuerpos ovales grasos con cruz de Malta</b>: son lípidos del plasma que se filtran y el túbulo reabsorbe.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Te da una albúmina baja y pregunta por qué el líquido se va al intersticio.</li>
    <li>Te pone una complicación y pregunta qué proteína falta: infección, trombosis o anemia.</li>
    <li>Te muestra un laboratorio raro (triglicéridos de 780, anemia microcítica sin respuesta al hierro) y pide el mecanismo.</li>
    <li>Te pide el diagnóstico más probable según la edad y la biopsia.</li>
    <li>Te da una diuresis en mL/kg/h y pide la interpretación con la cifra exacta.</li>
  </ul>
  <p class="note">Así lo dice él: <i>Paciente masculino de 4 años con edema palpebral matutino, proteinuria de 4+ y albúmina de 1,9 g/dL. ¿Cuál es el mecanismo que explica principalmente la acumulación de líquido en el intersticio?</i></p>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> responder aumento de la permeabilidad capilar o presión oncótica alta para el edema. En el nefrótico la presión oncótica BAJA y el capilar sistémico no está inflamado. Otra trampa: invertir el eje; la renina, la angiotensina, la aldosterona y la ADH suben, y el péptido natriurético baja.</div>

  <h2>Números y cálculos</h2>
  <ul>
    <li>Proteinuria del síndrome nefrótico en adultos: más de 3,5 g/24 h (lo normal es hasta 150-300 mg/24 h).</li>
    <li>Hipoalbuminemia: albúmina de 3,5 g/dL o menos. Bajo 2 g/dL el riesgo de trombosis es alto.</li>
    <li>Cambios mínimos: niños de 1 a 6 años, el 80-90% de los casos en esa edad.</li>
    <li>Diuresis normal: 0,5-1 mL/kg/h en el adulto y 1-2 mL/kg/h en el niño.</li>
  </ul>
  <p>Cuenta del caso del libro: una niña de 4 años pesa 11,46 kg y hace 0,6 mL/kg/h.</p>
  <ol>
    <li>Por hora: 0,6 × 11,46 = 6,9 mL/h. Por día: 6,9 × 24 ≈ 165 mL.</li>
    <li>Mínimo esperado en el niño: 1 × 11,46 × 24 ≈ 275 mL/día.</li>
    <li>165 mL es cerca del 60% del mínimo, es decir un 40% por debajo: retención de sodio y agua.</li>
  </ol>
  <p>Si usaras el rango del adulto (0,5 mL/kg/h), 0,6 parecería normal y perderías el diagnóstico.</p>
  `,
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
      id: "20-0",
      stem: "Un niño de 4 años consulta por edema palpebral matutino de dos semanas de evolución. La orina muestra proteinuria de 4+ y no hay hematíes ni hipertensión. La biopsia renal informa microscopía de luz normal e inmunofluorescencia negativa. ¿Cuál es el diagnóstico más probable?",
      options: [
        { t: "Glomeruloesclerosis focal y segmentaria con esclerosis de algunos segmentos glomerulares", why: "Supones que una biopsia de luz normal descarta esclerosis; la GEFS afecta solo segmentos de algunos glomérulos y muestra focos de esclerosis al microscopio." },
        { t: "Enfermedad de cambios mínimos con borramiento difuso de los pedicelos", why: "El podocito pierde su cubierta, los pedicelos se borran de forma difusa y la luz glomerular queda normal; con inmunofluorescencia negativa y esa edad es la causa más frecuente." },
        { t: "Glomerulopatía membranosa con engrosamiento de la membrana basal glomerular", why: "Confundes proteinuria con depósito de complejos; la membranosa engruesa la membrana basal y da inmunofluorescencia positiva, dato que el informe niega." },
        { t: "Glomerulonefritis membranoproliferativa con proliferación de células mesangiales", why: "Buscas proliferación donde el informe dice normalidad; la membranoproliferativa muestra hipercelularidad y depósitos de C3 en la biopsia." }
      ],
      correct: 1,
      rule: "Biopsia de luz normal e inmunofluorescencia negativa en un niño de 1 a 6 años con nefrótico: cambios mínimos."
    },
    {
      id: "20-1",
      stem: "Una niña de 6 años con síndrome nefrótico y albúmina de 1,8 g/dL ingresa con fiebre, dolor abdominal difuso y líquido ascítico del que se aísla Streptococcus pneumoniae. ¿Cuál es el mecanismo que explica su susceptibilidad a esta infección?",
      options: [
        { t: "Pérdida urinaria de antitrombina III con aumento del fibrinógeno plasmático", why: "Confundes la coagulación con la defensa humoral; sin antitrombina el paciente trombotiza, pero la opsonización del neumococo depende de IgG y C3." },
        { t: "Pérdida urinaria de transferrina con ferropenia funcional secundaria", why: "La transferrina perdida deja el hierro fuera de la médula y da anemia microcítica; el neumococo se frena con opsoninas, no con hierro." },
        { t: "Pérdida urinaria de aciltransferasa y de lipoproteína lipasa circulante", why: "Ese déficit enzimático pertenece al metabolismo de los lípidos y explica la dislipidemia, no la peritonitis neumocócica." },
        { t: "Pérdida urinaria de IgG y de proteínas del complemento", why: "La proteinuria arrastra IgG y C3 a la orina; sin opsoninas el neumococo escapa a la fagocitosis y coloniza el peritoneo cuando la albúmina está en 1,8 g/dL." }
      ],
      correct: 3,
      rule: "Nefrótico que se infecta perdió IgG y complemento por orina; la antitrombina solo explica trombosis."
    },
    {
      id: "20-2",
      stem: "Una mujer de 30 años con síndrome nefrótico presenta hemoglobina de 8,9 g/dL con hematíes microcíticos e hipocrómicos. Recibió hierro oral durante ocho semanas sin mejoría y su creatinina es normal. ¿Qué mecanismo explica esta anemia refractaria?",
      options: [
        { t: "Pérdida urinaria de transferrina que impide llevar hierro a la médula ósea", why: "La transferrina se pierde con la proteinuria; sin transportador el hierro absorbido no llega a la médula y la anemia sigue microcítica aunque tome hierro oral." },
        { t: "Déficit de eritropoyetina por lesión del parénquima renal", why: "Asumes anemia renal por daño tubular; aquí la creatinina es normal y el déficit de eritropoyetina produce anemia normocítica, no microcítica." },
        { t: "Hemólisis microangiopática con fragmentación de eritrocitos en la sangre", why: "Buscas hemólisis porque el hierro no funciona; la hemólisis se ve en el frotis y no es un rasgo del síndrome nefrótico." },
        { t: "Menor absorción intestinal de hierro por edema de la pared intestinal con pérdida de transportadores", why: "Atribuyes la refractariedad a mala absorción; el problema no es absorber hierro sino transportarlo cuando falta transferrina." }
      ],
      correct: 0,
      rule: "Anemia microcítica que no responde a hierro en el nefrótico: se perdió transferrina por la orina."
    },
    {
      id: "20-3",
      stem: "Un hombre de 40 años con síndrome nefrótico mantiene triglicéridos de 780 mg/dL con quilomicrones en el suero, pese a dieta estricta y proteinuria masiva sostenida. ¿Cuál es el mecanismo que vincula la proteinuria con esta hipertrigliceridemia persistente?",
      options: [
        { t: "La Angptl4 activa la lipoproteína lipasa y acelera el catabolismo de quilomicrones", why: "Inviertes la acción de la Angptl4: si activara la enzima, los triglicéridos bajarían en lugar de mantenerse en 780 mg/dL." },
        { t: "La hipoalbuminemia aumenta la síntesis hepática de quilomicrones y de VLDL", why: "El hígado sintetiza más lipoproteínas, pero el dato persistente se explica porque el catabolismo está frenado, no solo por la síntesis." },
        { t: "La Angptl4 inhibe la lipoproteína lipasa y frena el catabolismo de quilomicrones", why: "La proteinuria masiva estimula la Angptl4, que apaga la lipoproteína lipasa; sin esa enzima los quilomicrones y las VLDL no liberan sus triglicéridos." },
        { t: "La pérdida urinaria de lipoproteína lipasa impide hidrolizar los triglicéridos", why: "Confundes la enzima con una proteína que se filtra; la lipoproteína lipasa sigue en el endotelio y lo que falla es su actividad inhibida." }
      ],
      correct: 2,
      rule: "Hipertrigliceridemia persistente del nefrótico: Angptl4 inhibe la lipoproteína lipasa, no la activa."
    },
    {
      id: "20-4",
      stem: "Un paciente con síndrome nefrótico mantiene proteinuria masiva durante 18 meses y su filtración glomerular desciende. La biopsia muestra fibrosis tubulointersticial y túbulos con gotas de albúmina reabsorbida. ¿Cuál es el mecanismo de esta lesión crónica?",
      options: [
        { t: "Isquemia tubular por hipotensión arterial sostenida", why: "Atribuyes la fibrosis al bajo flujo; en el nefrótico predomina la retención de sodio y agua, y el daño lo produce la proteína que el túbulo reabsorbe." },
        { t: "Depósito progresivo de inmunocomplejos en la membrana basal", why: "Piensas en un mecanismo inflamatorio; el nefrótico es no inflamatorio y la fibrosis se debe a la toxicidad de la albúmina filtrada." },
        { t: "Trombosis de la vena renal por hipercoagulabilidad persistente", why: "La trombosis venosa es una complicación real, pero no produce la fibrosis tubulointersticial difusa que muestra esta biopsia." },
        { t: "Reabsorción excesiva de albúmina que satura megalina y cubilina", why: "La albúmina unida a ácidos grasos satura megalina y cubilina, activa NF-κB y libera citoquinas profibróticas que fibrosan el intersticio." }
      ],
      correct: 3,
      rule: "Fibrosis en nefrótico de larga data: la albúmina reabsorbida activa NF-κB, no la isquemia."
    },
    {
      id: "20-5",
      stem: "Una mujer de 22 años con síndrome nefrótico y albúmina de 1,9 g/dL presenta un edema que progresa pese al reposo. Se estudia su perfil neurohumoral para explicar la retención de líquido. ¿Qué combinación de cambios perpetúa el edema?",
      options: [
        { t: "Aumento del eje renina-angiotensina-aldosterona, aumento de ADH, descenso del péptido natriurético auricular", why: "La hipovolemia relativa activa el eje renina-angiotensina-aldosterona y la ADH, y frena el péptido auricular: las tres respuestas retienen sodio y agua." },
        { t: "Aumento del eje renina-angiotensina-aldosterona, descenso de ADH, aumento del péptido natriurético auricular", why: "Inviertes el efecto de la ADH y del péptido: con hipovolemia la ADH sube y el péptido natriurético se inhibe." },
        { t: "Descenso del eje renina-angiotensina-aldosterona, aumento de ADH, descenso del péptido natriurético auricular", why: "Equivocas el eje renina: la caída de volumen lo activa; solo acertarías en el péptido natriurético bajo." },
        { t: "Descenso del eje renina-angiotensina-aldosterona, descenso de ADH, aumento del péptido natriurético auricular", why: "Corriges al revés: el eje está activado y la ADH alta, mientras el péptido natriurético cae para no perder más sodio." }
      ],
      correct: 0,
      rule: "En nefrótico con hipovolemia relativa suben renina y ADH y baja el péptido natriurético; si la opción baja la ADH, está invertida."
    },
    {
      id: "20-6",
      stem: "Un lactante de 2 meses, hijo de padres sanos y consanguíneos, presenta edema desde la tercera semana de vida y proteinuria masiva. No respondió a cuatro semanas de prednisona y la ecografía renal es normal. ¿Cuál es el diagnóstico más probable?",
      options: [
        { t: "Nefropatía membranosa primaria por anticuerpos anti-PLA2R", why: "Trasladas una causa del adulto al lactante; el anti-PLA2R describe la membranosa del adulto y aquí la membrana basal no está engrosada." },
        { t: "Glomeruloesclerosis focal y segmentaria por variantes de APOL1", why: "Las variantes APOL1 dan progresión rápida en poblaciones de riesgo, pero no un inicio en las primeras semanas de vida con padres consanguíneos." },
        { t: "Síndrome nefrótico congénito tipo finlandés por mutación de NPHS1", why: "La mutación de NPHS1 altera el diafragma de hendidura del podocito; sin ese cierre la proteinuria empieza en los primeros tres meses y no responde a corticoides." },
        { t: "Enfermedad de cambios mínimos de inicio en el lactante con recaídas frecuentes", why: "Cambios mínimos predomina entre 1 y 6 años y responde a corticoides; este lactante empezó antes del mes y no respondió al tratamiento." }
      ],
      correct: 2,
      rule: "Menor de 3 meses con nefrótico resistente a corticoides y consanguinidad: pienso en NPHS1."
    },
    {
      id: "20-7",
      stem: "Un niño de 7 años con edema generalizado tiene proteinuria de 6 g/24 h y albúmina de 2,0 g/dL, sin hematíes en la orina ni inflamación en la biopsia. ¿Qué cambio en la barrera de filtración permite el paso de la albúmina?",
      options: [
        { t: "Aumento de la presión hidrostática del capilar glomerular con poros de tamaño normal", why: "Crees que más presión empuja la albúmina por poros sanos; los 60 mmHg son la presión normal y sin perder carga la albúmina sigue retenida." },
        { t: "Neutralización de las cargas aniónicas y despegamiento del podocito de la membrana basal", why: "La albúmina es aniónica como el glicocálix del podocito; al neutralizarse las cargas desaparece la repulsión y, sin integrinas, quedan áreas denudadas por donde escapa." },
        { t: "Dilatación de los poros endoteliales por hiperfiltración compensatoria sostenida", why: "Supones que la hiperfiltración abre poros; la hiperfiltración de las nefronas sanas acelera la esclerosis, pero no inicia la proteinuria." },
        { t: "Engrosamiento de la membrana basal que atrapa albúmina y la vuelca al espacio urinario", why: "Confundes engrosamiento con fuga; el grosor de la membrana basal corresponde a la membranosa y no vuelca albúmina a la orina." }
      ],
      correct: 1,
      rule: "La albúmina escapa por pérdida de carga negativa y de podocitos, no por más presión ni poros más grandes."
    },
    {
      id: "20-8",
      stem: "Una niña de 5 años tiene edema, proteinuria de 5 g/24 h, albúmina de 1,8 g/dL y una orina sin hematíes. ¿Qué sector del glomérulo debe estar dañado para producir proteinuria masiva sin hematuria?",
      options: [
        { t: "Sector extracapilar: membrana basal y podocitos", why: "El daño hacia fuera del endotelio, en membrana basal y podocitos, no rompe el capilar; por eso hay proteinuria masiva sin eritrocitos en la orina." },
        { t: "Sector endocapilar: endotelio y células mesangiales", why: "El daño endocapilar es inflamatorio y rompe el capilar; con esa lesión habría hematuria, que esta niña no tiene." },
        { t: "Sector mixto: endotelio, mesangio y podocitos a la vez", why: "Si fuera mixto también habría lesión endocapilar y hematuria, ausente en el sedimento de esta paciente." },
        { t: "Aparato yuxtaglomerular con liberación de renina", why: "El aparato yuxtaglomerular regula la presión arterial y no produce proteinuria masiva sin hematuria." }
      ],
      correct: 0,
      rule: "Proteinuria sin hematuria significa daño extracapilar; con hematuria el daño es endocapilar e inflamatorio."
    },
    {
      id: "20-9",
      stem: "Un hombre de 34 años con síndrome nefrótico y albúmina de 1,7 g/dL presenta dolor lumbar súbito y edema de la pierna derecha; el Doppler confirma trombosis venosa profunda. ¿Qué alteraciones de la coagulación explican este evento?",
      options: [
        { t: "Aumento de antitrombina III con descenso de fibrinógeno y consumo de plaquetas", why: "Inviertes los cuatro datos; una antitrombina alta con fibrinógeno bajo protegería de la trombosis en lugar de provocarla." },
        { t: "Descenso de antitrombina III con descenso de fibrinógeno y plaquetas normales", why: "Aciertas la antitrombina, pero olvidas el fibrinógeno, que en el nefrótico sube y aporta el material del trombo." },
        { t: "Aumento de antitrombina III con aumento del fibrinógeno y de las plaquetas", why: "Solo fallas en la antitrombina: si aumentara, el riesgo trombótico sería menor y no habría trombosis con albúmina de 1,7 g/dL." },
        { t: "Descenso de antitrombina III con aumento del fibrinógeno y de la agregación plaquetaria", why: "La antitrombina III se pierde por orina y el hígado sintetiza más fibrinógeno: el equilibrio se inclina hacia el coágulo, sobre todo con albúmina bajo 2 g/dL." }
      ],
      correct: 3,
      rule: "Trombosis del nefrótico: antitrombina III baja y fibrinógeno alto; si la opción sube la antitrombina, está invertida."
    },
    {
      id: "20-10",
      stem: "En el sedimento urinario de una niña con síndrome nefrótico se observan cuerpos ovales grasos que brillan en cruz de Malta con luz polarizada. ¿Cuál es el origen de estos elementos?",
      options: [
        { t: "Eritrocitos dismórficos que pierden la hemoglobina al atravesar el túbulo y se ven pálidos en el sedimento", why: "Confundes grasa con sangre; la hematuria del nefrítico da eritrocitos dismórficos y aquí el sedimento muestra lípidos." },
        { t: "Lípidos plasmáticos filtrados que el túbulo reabsorbe y acumula en sus células", why: "Con la barrera dañada pasan lipoproteínas al filtrado; el túbulo las reabsorbe y los ésteres de colesterol forman la cruz de Malta." },
        { t: "Leucocitos degenerados por una infección urinaria sobreagregada", why: "Supones infección por el aspecto del sedimento; los cuerpos ovales aparecen con lipiduria y no implican bacterias." },
        { t: "Gotas de grasa de origen intestinal que el riñón elimina por la orina", why: "Buscas un origen digestivo; la grasa urinaria viene del plasma filtrado por el glomérulo lesionado." }
      ],
      correct: 1,
      rule: "Cruz de Malta en la orina significa lipiduria: lípidos filtrados y reabsorbidos por el túbulo."
    },
    {
      id: "20-11",
      stem: "Una niña de 4 años con síndrome nefrótico pesa 11,46 kg y en seis horas orina 41 mL. Se considera normal en el niño 1-2 mL/kg/h y se habla de oliguria por debajo de 1 mL/kg/h. ¿Cuál es la interpretación correcta de su diuresis?",
      options: [
        { t: "0,6 mL/kg/h y 165 mL/día, dentro del rango normal del niño", why: "Usas el rango del adulto de 0,5 a 1 mL/kg/h; en el niño el mínimo es 1 y 0,6 queda por debajo, como corresponde a la retención de sodio y agua." },
        { t: "1,2 mL/kg/h y 330 mL/día, justo en el límite inferior normal", why: "Duplicas la cifra: 41 mL en 6 horas son 6,8 mL/h y 6,8 entre 11,46 kg da 0,6 mL/kg/h, no 1,2." },
        { t: "0,6 mL/kg/h y 165 mL/día, un 40% por debajo del mínimo esperado", why: "41 mL en 6 h son 6,8 mL/h, es decir 0,6 mL/kg/h; por día son 165 mL frente a los 275 mL del mínimo de 1 mL/kg/h, un 40% menos." },
        { t: "0,6 mL/kg/h y 275 mL/día, en el mínimo esperado para su peso", why: "Confundes su diuresis con el mínimo esperado: 275 mL/día es lo que debería orinar, no lo que está orinando." }
      ],
      correct: 2,
      rule: "Convierto la diuresis a mL/kg/h dividiendo por peso y por horas; en el niño el mínimo es 1, no 0,5."
    }
  ]
}
);
