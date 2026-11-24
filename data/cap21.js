// Chapter 21: Nephritic syndrome. Source: Vinueza, Fisiopatología Humana.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 21,
  weight: 4,
  title: "21. Síndrome nefrítico",
  easy: `
  <h2>La idea en una frase</h2>
  <p>En el síndrome nefrítico el glomérulo se inflama de forma aguda. El filtro se llena de células, filtra menos y además se rompe y deja salir sangre. Por eso aparecen juntos hematuria, oliguria, hipertensión y edema.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <ol>
    <li>Un antígeno persistente (de garganta, piel o intestino) o un autoanticuerpo activa al sistema inmune.</li>
    <li>Se forman <b>inmunocomplejos</b>: un antígeno pegado a su anticuerpo. Otras veces el anticuerpo ataca la membrana basal del glomérulo.</li>
    <li>Esos depósitos activan el <b>complemento</b> (C3 y C5), un sistema de proteínas que perfora y llama células.</li>
    <li>Llegan <b>neutrófilos</b> y liberan enzimas: el glomérulo se inflama y se llena de células (<b>hipercelularidad</b>).</li>
    <li>Los capilares se colapsan y el filtrado cae: sale menos orina (<b>oliguria</b>) y se retiene sodio y agua.</li>
    <li>Esa retención sube el volumen de sangre: aparece <b>edema</b> y sube la <b>presión arterial</b>.</li>
    <li>El capilar inflamado se rompe y salen glóbulos rojos: aparece la <b>hematuria</b>.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <ul>
    <li><b>Orina color cola o té</b>: son glóbulos rojos que salieron del capilar roto.</li>
    <li><b>Edema de párpados</b> (cerca del 90% de los casos): sodio y agua retenidos porque el filtrado está bajo.</li>
    <li><b>Presión arterial alta</b>: hay más volumen circulante y renina liberada por la isquemia del glomérulo.</li>
    <li><b>Oliguria menor de 400 mL/día</b>: quedan menos capilares filtrando.</li>
    <li><b>Proteinuria menor de 3,5 g/24 h</b>: los anticuerpos dañan los podocitos y se pierde la carga negativa del filtro.</li>
    <li><b>Azotemia</b> (urea y creatinina altas en sangre): el filtrado reducido deja desechos acumulados.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Te cuenta una infección previa y pide el mecanismo del daño glomerular.</li>
    <li>Te da un patrón de inmunofluorescencia (granular o lineal) y pide qué entidad lo explica.</li>
    <li>Te pone dos pacientes con edema y pregunta cuál es el mecanismo en cada uno.</li>
    <li>Te da diuresis en mL, peso y horas, y pide el cálculo con su interpretación.</li>
    <li>Te hace elegir el diagnóstico más probable por edad, antecedente y latencia.</li>
  </ul>
  <p class="note">Así lo dice él: <i>Una niña de 11 años presenta edema palpebral y orina oscura dos semanas después de una amigdalitis. ¿Qué mecanismo explica la hematuria y la caída del filtrado glomerular?</i></p>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> explicar el edema nefrítico con albúmina baja o presión oncótica baja. Eso pertenece al nefrótico. En el nefrítico el edema viene de retener sodio y agua, y el volumen plasmático está aumentado. Otra trampa: confundir el depósito granular (postestreptocócica) con el lineal (Goodpasture).</div>

  <h2>Números y cálculos</h2>
  <ul>
    <li>Latencia entre la infección y el cuadro: 1 a 4 semanas.</li>
    <li>Oliguria: menos de 400 mL/día (diuresis normal 0,5-1 mL/kg/h en el adulto).</li>
    <li>Proteinuria nefrítica: menos de 3,5 g/24 h (en el nefrótico es más de 3,5).</li>
    <li>Edema palpebral: cerca del 90% de los casos.</li>
  </ul>
  <p>Cuenta del caso del libro: un adulto de 70 kg recoge 90 mL de orina en 6 horas.</p>
  <ol>
    <li>Por hora: 90 ÷ 6 = 15 mL/h. Por día: 15 × 24 = 360 mL, menos de 400: oliguria.</li>
    <li>Por kilo y hora: 15 ÷ 70 ≈ 0,21 mL/kg/h, menos de 0,5: oliguria.</li>
    <li>Error frecuente: dividir 90 ÷ 70 ≈ 1,29 mL/kg/h y concluir que es normal, porque se olvidaron las horas.</li>
  </ol>
  `,
  summary: `
  <h2>1. Qué es y qué falla</h2>
  <p>El síndrome nefrítico es un cuadro de <b>inicio agudo</b> por <b>inflamación del glomérulo</b>, obstrucción de la luz del capilar glomerular y daño de su pared, por activación y acumulación de complejos inmunes y mediadores inflamatorios. Se define por cuatro signos: <b>hematuria</b> (micro o macroscópica), <b>oliguria</b>, <b>hipertensión arterial</b> y <b>edema</b>. Contraste con el cap. 20: allí el daño es <b>no inflamatorio</b> y extracapilar (MBG y podocitos); aquí es <b>inflamatorio</b> y endocapilar (endotelio hacia adentro), lo que permite que salgan eritrocitos.</p>

  <h2>2. Cómo se produce la inflamación</h2>
  <p>El libro describe tres procesos: (1) <b>complejos inmunitarios</b> y acción del complemento sobre mesangio y subendotelio; (2) <b>anticuerpos anti-membrana basal glomerular</b>; (3) <b>anticuerpos contra antígenos citoplásmicos de neutrófilos</b> (ANCA). La secuencia es: un antígeno persistente (suele venir de la vía aérea o digestiva), patrones moleculares de patógenos o clones B y T autorreactivos activan la inmunidad adaptativa → se forman complejos o autoanticuerpos que lesionan la MBG → se activa el complemento (C3, C5; C5-C7) y se atraen polimorfonucleares, que liberan enzimas lisosómicas → hipercelularidad y daño. El flujo renal abundante y la presión intraglomerular facilitan la acumulación de antígenos y complejos. El gasto renal es el 20% del gasto cardiaco.</p>
  <p>Otros mecanismos de autoinmunidad que cita el libro: desregulación de linfocitos T reguladores, <b>mimetismo molecular</b> (superantígenos, activación policlonal B), y <b>cambios conformacionales y diseminación de epítopo</b> (p. ej., el colágeno tipo IV cambia de conformación por estrés oxidativo del tabaquismo y expone epítopos ocultos).</p>

  <h2>3. Cada manifestación con su mecanismo</h2>
  <table>
    <tr><th>Signo</th><th>Mecanismo (según el libro)</th></tr>
    <tr><td>Hematuria</td><td>El daño inflamatorio de los capilares glomerulares deja salir eritrocitos al filtrado.</td></tr>
    <tr><td>Oliguria y ↓ del filtrado</td><td>Colapso capilar, hipercelularidad y contracción mesangial reducen la capacidad de filtración; las citocinas empeoran el cuadro. Oliguria: &lt; 400 mL/día con deterioro de la función renal (azotemia).</td></tr>
    <tr><td>Edema</td><td>Retención de sodio y agua (sobre todo en la nefrona distal) por menor filtrado y por mediadores proinflamatorios. Predomina en párpados (≈ 90%) y puede llegar a anasarca. No depende de hipoalbuminemia.</td></tr>
    <tr><td>Hipertensión</td><td>Retención de sodio y agua con ↑ del volumen extracelular y plasmático, más liberación de renina por la isquemia glomerular.</td></tr>
    <tr><td>Proteinuria (&lt; 3,5 g/24 h)</td><td>Los anticuerpos dañan podocitos y endotelio: se pierde la carga aniónica de la MBG y aumenta el diámetro de sus poros.</td></tr>
  </table>

  <h2>4. Principales causas (qué recordar de cada una)</h2>
  <table>
    <tr><th>Entidad</th><th>Mecanismo y datos clave</th></tr>
    <tr><td>Glomerulonefritis aguda postestreptocócica (la más representativa)</td><td>Estreptococo β-hemolítico del grupo A, de piel o faringe, <b>1 a 4 semanas</b> después de la infección. Varones 2:1, 5-12 años y adultos &gt; 60; hacinamiento y bajo nivel socioeconómico. Antígenos nefritogénicos (exotoxina B y gliceraldehído-3-fosfato deshidrogenasa) forman inmunocomplejos que activan el complemento (vía clásica; también activan la alterna). <b>Depósitos granulares de IgG y C3</b> en subendotelio, espacio intramembranoso o subepitelial. Hipercelularidad: proliferan células mesangiales y endoteliales, con infiltración de monocitos y neutrófilos.</td></tr>
    <tr><td>Nefropatía por IgA</td><td>Varones, niños y 20-30 años. <b>IgA1 con déficit de galactosa</b> en la bisagra: se expone N-acetilgalactosamina, que reconocen anticuerpos anti-IgG y anti-IgA1 → complejos en el <b>mesangio</b>. Activa vías alterna y de la lectina; hipercelularidad mesangial y glomeruloesclerosis. Aparece tras exposición de mucosas (respiratoria o digestiva). Daño por infiltrado túbulo-intersticial, exposición tubular a albúmina e interacción glomérulo-podocito-túbulo; las células mesangiales liberan angiotensina II.</td></tr>
    <tr><td>Nefropatía lúpica</td><td>Mujeres 9:1; 50-75% de niños con LES. <b>Anti-ADN de doble cadena</b> con el nucleosoma como antígeno, unido al heparán sulfato de la MBG. Clases histológicas I-VI; <b>III y IV</b> (difusa) son las más comunes.</td></tr>
    <tr><td>Síndrome de Goodpasture</td><td>Anticuerpos contra la MBG <b>y la membrana basal alveolar</b> (cadena α3, mismo epítopo en ambas): hemorragia pulmonar + insuficiencia renal. <b>Depósitos lineales de IgG y C3.</b> ≈ un tercio tiene también ANCA. Asociado a tabaquismo, influenza, solventes de hidrocarburos, fármacos y cáncer.</td></tr>
  </table>
  <p>Otras causas del libro: vasculitis, púrpura de Schönlein-Henoch, síndrome hemolítico urémico, mieloma, crioglobulinemia, diabetes, etc. Primarias (solo renales) vs secundarias (enfermedad sistémica).</p>

  <h2>5. Diferenciar nefrítico de nefrótico (cap. 20)</h2>
  <table>
    <tr><th></th><th>Nefrítico</th><th>Nefrótico</th></tr>
    <tr><td>Daño</td><td>Inflamatorio, endocapilar</td><td>No inflamatorio, extracapilar (MBG, podocitos)</td></tr>
    <tr><td>Orina</td><td>Hematuria; proteinuria &lt; 3,5 g/24 h</td><td>Sin hematuria; proteinuria &gt; 3,5 g/24 h; lipiduria</td></tr>
    <tr><td>Volumen</td><td>Retención de Na y agua con ↑ del volumen plasmático; HTA</td><td>↓ presión oncótica → hipovolemia relativa → ↑ RAA y ADH, ↓ ANP</td></tr>
    <tr><td>Sangre</td><td>Azotemia, oliguria &lt; 400 mL/día</td><td>Albúmina ≤ 3,5 g/dL; hipercolesterolemia</td></tr>
    <tr><td>Infección</td><td>Precede (1-4 semanas) y desencadena</td><td>Es consecuencia (pierde IgG y complemento)</td></tr>
  </table>

  <h2>6. Ejemplo numérico (diuresis)</h2>
  <p>El libro da diuresis de 0,5-1 mL/kg/h en adultos y define oliguria como &lt; 400 mL/día. Adulto de 70 kg que recoge 90 mL en 6 h: 90 ÷ 6 = 15 mL/h; 15 × 24 = 360 mL/día (&lt; 400, oliguria); 15 ÷ 70 ≈ 0,21 mL/kg/h (&lt; 0,5). Error frecuente: dividir 90 mL entre 70 kg sin dividir por las horas (≈ 1,29 mL/kg/h, que parecería normal).</p>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>Hematuria + HTA + edema + oliguria con proteinuria &lt; 3,5 g/24 h: nefrítico. Sin hematuria y &gt; 3,5 g/24 h: nefrótico.</li>
    <li>Edema nefrítico = retención de Na y agua con volumen plasmático aumentado. Edema nefrótico = presión oncótica baja.</li>
    <li>IF granular IgG/C3 = postestreptocócica; lineal IgG/C3 = Goodpasture (riñón y pulmón); mesangial IgA = nefropatía por IgA.</li>
    <li>Postestreptocócica: la infección precede al cuadro; en el nefrótico la infección es consecuencia.</li>
  </ul>

  <div class="note"><b>Alertas del libro:</b> (1) pág. 504: dice que el 20% de 5000 mL/min equivale a "1,0 mL/min"; el valor correcto es 1000 mL/min. (2) Pág. 516: lista "glomerulonefritis de cambios mínimos" entre las causas nefríticas, pero cambios mínimos es causa nefrótica (cap. 20). (3) La tabla 65 del libro (nefrótico "sin llegar a anasarca", albúmina "&lt; 3,5") difiere del cap. 20 ("≤ 3,5"; con anasarca a mayor proteinuria). (4) Clasifica la postestreptocócica como primaria (tabla 66) y también lista lupus y Goodpasture como secundarias, pero su test de evaluación pregunta por una "causa primaria" con respuesta nefropatía por IgA. (5) Dice que la IgA activa las vías alterna y de la lectina por ausencia de C1 y C4; seguimos el libro en la respuesta.</div>
  `,
  questions: [
    {
      id: "21-0",
      stem: "Un niño de 8 años presenta orina color cola, edema palpebral y presión arterial de 135/90 mmHg dos semanas después de una faringitis por estreptococo beta-hemolítico del grupo A. ¿Cuál es el mecanismo que explica el daño glomerular?",
      options: [
        { t: "Autoanticuerpos contra la cadena alfa 3 de la membrana basal glomerular y alveolar", why: "Es el síndrome de Goodpasture, con depósito lineal y hemorragia pulmonar; el antecedente de faringitis estreptocócica apunta a otra vía." },
        { t: "Acumulación de IgA1 con déficit de galactosa en el mesangio glomerular", why: "Es la nefropatía por IgA, que suele seguir a infecciones de mucosas y no muestra estreptococo documentado con dos semanas de latencia." },
        { t: "Inmunocomplejos con antígenos estreptocócicos que activan el complemento", why: "Los antígenos estreptocócicos forman inmunocomplejos que activan el complemento y atraen neutrófilos; el depósito es granular y aparece 1 a 4 semanas después." },
        { t: "Anticuerpos anti-ADN de doble cadena unidos al nucleosoma glomerular", why: "Es la nefropatía lúpica, que exige un lupus de base y no una faringitis por estreptococo." }
      ],
      correct: 2,
      rule: "Faringitis estreptocócica más 1 a 4 semanas más hematuria: inmunocomplejos con complemento."
    },
    {
      id: "21-1",
      stem: "Un hombre de 23 años, fumador, presenta hemoptisis, orina oscura y diuresis de 300 mL/día. Los anticuerpos anti-membrana basal glomerular son positivos. ¿Qué mecanismo explica la afectación simultánea del pulmón y del riñón?",
      options: [
        { t: "Anticuerpos contra la cadena alfa 3, accesible en la membrana basal glomerular y alveolar", why: "El epítopo de la cadena alfa 3 queda accesible en las dos membranas basales, la del glomérulo y la del alvéolo; por eso hay hemorragia pulmonar y glomerulonefritis a la vez." },
        { t: "Inmunocomplejos con antígenos estreptocócicos depositados de forma granular", why: "Los inmunocomplejos dan depósito granular y explican la postestreptocócica, no la positividad de anticuerpos anti-membrana basal." },
        { t: "Anticuerpos anti-ADN de doble cadena unidos al heparán sulfato", why: "Esa es la vía lúpica y no explica la hemoptisis ni los anticuerpos anti-membrana basal." },
        { t: "IgA1 con déficit de galactosa acumulada en el mesangio", why: "La IgA mesangial no alcanza el alvéolo y no produce hemorragia pulmonar." }
      ],
      correct: 0,
      rule: "Anti-membrana basal positivo con pulmón y riñón: la cadena alfa 3 es compartida, depósito lineal."
    },
    {
      id: "21-2",
      stem: "Un hombre de 21 años consulta por hematuria macroscópica recurrente después de una infección respiratoria. La biopsia muestra hipercelularidad mesangial con depósitos dominantes de IgA. ¿Cuál es el mecanismo que inicia el daño?",
      options: [
        { t: "Depósito lineal de IgG y C3 por anticuerpos contra la cadena alfa 3 de la membrana basal", why: "Es Goodpasture, con depósito lineal; la biopsia de este paciente muestra IgA en el mesangio y no anticuerpos anti-membrana basal." },
        { t: "IgA1 sin galactosa que expone N-acetilgalactosamina y forma complejos", why: "La IgA1 sin galactosa expone N-acetilgalactosamina, que reconocen anticuerpos; esos complejos se depositan en el mesangio y activan las vías alterna y de la lectina." },
        { t: "Complejos con antígenos estreptocócicos que activan la vía clásica", why: "Esa es la postestreptocócica, con depósitos granulares de IgG y C3 y no de IgA en el mesangio." },
        { t: "Anticuerpos anti-ADN de doble cadena dirigidos contra el nucleosoma", why: "Es la nefropatía lúpica, que necesita un lupus de base y no se limita a brotes tras infecciones respiratorias." }
      ],
      correct: 1,
      rule: "IgA mesangial tras infección de mucosas: IgA1 sin galactosa, no inmunocomplejos estreptocócicos."
    },
    {
      id: "21-3",
      stem: "Una mujer de 26 años con lupus eritematoso sistémico presenta hipertensión, hematuria y proteinuria. La biopsia muestra nefritis lúpica difusa. ¿Qué mecanismo explica la lesión de la membrana basal glomerular?",
      options: [
        { t: "Autoanticuerpos contra el colágeno tipo IV con depósito lineal de IgG", why: "Ese es el mecanismo de Goodpasture, con depósito lineal; en el lupus el depósito es granular y hay anti-ADN." },
        { t: "IgA1 sin galactosa acumulada en el mesangio glomerular con hipercelularidad mesangial", why: "Es la nefropatía por IgA, que no requiere lupus ni anticuerpos anti-ADN." },
        { t: "Complejos de antígenos estreptocócicos con depósitos granulares de IgG", why: "Es la postestreptocócica; aquí no hay infección previa y sí una enfermedad sistémica de base." },
        { t: "Anticuerpos anti-ADN de doble cadena con el nucleosoma unido al heparán sulfato", why: "El nucleosoma se une al heparán sulfato de la membrana basal y allí lo reconocen los anti-ADN; se forman depósitos que activan el complemento y dañan el capilar." }
      ],
      correct: 3,
      rule: "Lupus con nefritis: anti-ADN más nucleosoma sobre heparán sulfato, no anti-membrana basal."
    },
    {
      id: "21-4",
      stem: "Un hombre de 45 años con glomerulonefritis aguda tiene creatinina de 3,1 mg/dL y diuresis de 300 mL/día. ¿Cuál es el mecanismo que explica la oliguria?",
      options: [
        { t: "Colapso capilar, hipercelularidad y contracción mesangial que reducen el filtrado", why: "La inflamación llena el glomérulo de células, colapsa los capilares y contrae el mesangio; la superficie de filtración cae y la orina baja a 300 mL/día." },
        { t: "Hipovolemia relativa por hipoalbuminemia con baja perfusión glomerular", why: "Ese es el mecanismo del nefrótico; en el nefrítico el volumen está aumentado, no disminuido." },
        { t: "Aumento de la presión oncótica del plasma que se opone a la filtración", why: "La presión oncótica no sube en el nefrítico y por sí sola no explica una oliguria con creatinina de 3,1 mg/dL." },
        { t: "Aumento de la permeabilidad de la membrana basal con pérdida de proteínas", why: "La permeabilidad explica la proteinuria, no la caída del filtrado glomerular." }
      ],
      correct: 0,
      rule: "Oliguria del nefrítico: capilares colapsados por hipercelularidad, no hipovolemia."
    },
    {
      id: "21-5",
      stem: "Un niño de 6 años con síndrome nefrótico y otro de 9 años con glomerulonefritis postestreptocócica presentan edema. ¿Cuál es el mecanismo del edema en cada uno?",
      options: [
        { t: "Nefrótico: retención de sodio y agua por menor filtrado. Nefrítico: baja presión oncótica con hipovolemia.", why: "Está invertido: el nefrótico pierde albúmina y el nefrítico retiene sodio porque filtra menos, y por eso el nefrítico tiene hipertensión por volumen." },
        { t: "En ambos: caída de la presión oncótica por pérdida urinaria de albúmina", why: "La albúmina cae en el nefrótico; en el nefrítico el edema no depende de hipoalbuminemia sino de retención hidrosalina." },
        { t: "En ambos: retención de sodio y agua con volumen plasmático aumentado", why: "En el nefrótico predomina la hipovolemia relativa con el eje renina-angiotensina-aldosterona activado." },
        { t: "Nefrótico: baja presión oncótica con hipovolemia relativa. Nefrítico: retención de sodio y agua por menor filtrado.", why: "Sin albúmina baja la presión oncótica y el líquido sale al intersticio; en el nefrítico el filtrado cae, se retiene sodio y el volumen plasmático sube, de ahí la hipertensión." }
      ],
      correct: 3,
      rule: "Edema nefrítico: retención hidrosalina con volumen alto. Edema nefrótico: presión oncótica baja."
    },
    {
      id: "21-6",
      stem: "Un niño de 10 años con glomerulonefritis aguda tiene presión arterial de 140/95 mmHg, edema palpebral y orina oscura. ¿Cuál es el mecanismo fisiopatológico que explica la hipertensión?",
      options: [
        { t: "Hipovolemia relativa con vasoconstricción compensatoria por renina", why: "En el nefrítico el volumen está aumentado; una hipovolemia bajaría la presión en vez de subirla a 140/95 mmHg." },
        { t: "Retención de sodio y agua con mayor volumen extracelular y liberación de renina", why: "El glomérulo inflamado excreta menos sodio, se retiene agua y sube el volumen extracelular, mientras la isquemia glomerular libera renina: dos vías que suben la presión." },
        { t: "Aumento de la presión oncótica del plasma que expande el volumen plasmático circulante", why: "No se retienen proteínas; una presión oncótica alta no explica la hipertensión por volumen de este cuadro." },
        { t: "Mayor excreción fraccional de sodio con contracción del volumen", why: "En el nefrítico la excreción fraccional de sodio disminuye, no aumenta, y el volumen se expande." }
      ],
      correct: 1,
      rule: "Hipertensión nefrítica: sodio retenido con volumen alto más renina liberada por isquemia glomerular."
    },
    {
      id: "21-7",
      stem: "El riñón recibe cerca del 20% del gasto cardiaco y mantiene una presión hidrostática alta en el capilar glomerular. ¿Por qué ese dato ayuda a explicar la glomerulonefritis por inmunocomplejos?",
      options: [
        { t: "Porque el flujo alto arrastra más eritrocitos hacia el espacio de Bowman", why: "Confundes flujo con hematuria; los eritrocitos salen por la rotura inflamatoria del capilar y no porque el flujo sea alto." },
        { t: "Porque la presión alta filtra más proteínas y produce hipoalbuminemia", why: "Ese razonamiento describe el edema nefrótico por pérdida de carga; aquí el tema es el depósito de complejos." },
        { t: "Porque el flujo abundante y la presión intraglomerular favorecen el atrapamiento de antígenos y complejos", why: "El riñón recibe una quinta parte del gasto cardiaco y filtra con presión alta; por eso los antígenos y complejos que circulan se depositan en el glomérulo." },
        { t: "Porque la hipoxia glomerular activa directamente el complemento", why: "La hipoxia no activa el complemento en este cuadro; lo activa la unión del antígeno con su anticuerpo." }
      ],
      correct: 2,
      rule: "Flujo renal alto más presión intraglomerular significa más depósito de complejos en el glomérulo."
    },
    {
      id: "21-8",
      stem: "Un varón de 62 años y 70 kg con glomerulonefritis aguda recoge 90 mL de orina en 6 horas. Se define oliguria por debajo de 400 mL/día y diuresis normal de 0,5-1 mL/kg/h. ¿Qué resultado y qué interpretación corresponden?",
      options: [
        { t: "1,29 mL/kg/h, que está dentro del rango normal del adulto", why: "Dividiste 90 mL entre 70 kg sin dividir entre las 6 horas; al incluir las horas el resultado es 0,21 mL/kg/h." },
        { t: "90 mL/día, una oliguria extrema por retención total", why: "Confundes el volumen de 6 horas con el de 24: 90 mL en 6 horas equivalen a 360 mL al día." },
        { t: "360 mL/día, que todavía no alcanza el criterio de oliguria", why: "360 mL/día sí cumple oliguria, porque el límite es menos de 400 mL/día." },
        { t: "15 mL/h, 360 mL/día y 0,21 mL/kg/h, es decir oliguria", why: "90 entre 6 da 15 mL/h, por 24 da 360 mL/día y 15 entre 70 da 0,21 mL/kg/h: las tres cifras quedan por debajo de los límites." }
      ],
      correct: 3,
      rule: "Convierto la diuresis a mL/h y a mL/kg/h antes de decidir; 360 mL/día ya es oliguria."
    },
    {
      id: "21-9",
      stem: "Un niño de 7 años con síndrome nefrótico ingresa por peritonitis neumocócica. Su hermano de 9 años presenta hematuria, hipertensión y edema dos semanas después de una faringitis estreptocócica. ¿Qué relación tiene la infección con cada glomerulopatía?",
      options: [
        { t: "Nefrótico: consecuencia de perder IgG y complemento. Nefrítico: desencadenante 1 a 4 semanas antes.", why: "En el nefrótico la orina arrastra defensas y la infección aparece después; en el nefrítico la infección precede y dispara la formación de complejos." },
        { t: "Nefrótico: desencadenante por inmunocomplejos. Nefrítico: consecuencia de la hematuria y la oliguria.", why: "Está invertido: en el nefrítico la infección va antes y desencadena el cuadro, no es su consecuencia." },
        { t: "En ambos: consecuencia de la pérdida urinaria de inmunoglobulinas.", why: "Solo el nefrótico pierde IgG y complemento por la orina; el nefrítico no pierde defensas de esa forma." },
        { t: "En ambos: desencadenante por formación de inmunocomplejos estreptocócicos.", why: "En el nefrótico la infección no forma complejos estreptocócicos: es una complicación por las defensas perdidas." }
      ],
      correct: 0,
      rule: "En el nefrítico la infección precede y desencadena; en el nefrótico la infección es la consecuencia."
    },
    {
      id: "21-10",
      stem: "Un hombre de 30 años, fumador, tiene hemoptisis, hematuria y creatinina en aumento, con anticuerpos anti-membrana basal glomerular positivos. ¿Qué mecanismo explica la contribución del tabaquismo?",
      options: [
        { t: "Mimetismo molecular entre los antígenos del humo y la membrana basal", why: "El mimetismo molecular que describe el cuadro ocurre con proteínas de patógenos, no con los componentes del humo del tabaco." },
        { t: "Producción de IgA1 sin galactosa en la mucosa bronquial tras la exposición al humo", why: "Esa es la vía de la nefropatía por IgA, que no produce anticuerpos anti-membrana basal ni hemorragia pulmonar." },
        { t: "Estrés oxidativo que cambia la conformación del colágeno tipo IV y expone epítopos", why: "El humo genera estrés oxidativo que deforma el colágeno tipo IV; el epítopo oculto de la cadena alfa 3 queda expuesto y aparecen los autoanticuerpos." },
        { t: "Activación policlonal de linfocitos B por superantígenos del humo", why: "La activación policlonal por superantígenos es un mecanismo descrito con patógenos; aquí el dato es el tabaco y el cambio del colágeno." }
      ],
      correct: 2,
      rule: "Tabaco en Goodpasture: estrés oxidativo que expone el epítopo oculto del colágeno tipo IV."
    },
    {
      id: "21-11",
      stem: "Una niña de 8 años presenta edema palpebral, orina oscura, diuresis de 300 mL/día y presión arterial de 130/90 mmHg dos semanas después de un impétigo. La proteinuria es de 2 g/24 h y no hay datos de lupus ni de hemorragia pulmonar. ¿Cuál es el diagnóstico más probable?",
      options: [
        { t: "Nefropatía por IgA con hematuria macroscópica recurrente", why: "La IgA sigue a infecciones de mucosas y recurre con cada episodio; aquí la latencia de dos semanas tras un impétigo apunta a otra entidad." },
        { t: "Glomerulonefritis aguda postestreptocócica", why: "El estreptococo de piel, la latencia de 1 a 4 semanas y el conjunto de hematuria, oliguria, edema e hipertensión forman el patrón clásico de esta glomerulonefritis." },
        { t: "Síndrome de Goodpasture con compromiso renal aislado", why: "El anti-membrana basal puede afectar solo el riñón, pero en una niña tras impétigo con proteinuria de 2 g y hematuria el cuadro es una glomerulonefritis posinfecciosa; Goodpasture no sigue a una faringitis ni a un impétigo." },
        { t: "Nefritis lúpica difusa de clase IV", why: "La nefritis lúpica necesita un lupus de base; aquí no hay datos sistémicos que lo sustenten." }
      ],
      correct: 1,
      rule: "Impétigo más 1 a 4 semanas más hematuria y oliguria: glomerulonefritis aguda postestreptocócica."
    }
  ]
}
);
