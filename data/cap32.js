// Chapter 32: Alertness / level of consciousness. Source: Vinueza, Fisiopatología Humana, book pp. 754-777.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 32,
  weight: 4,
  title: "32. Estado de alerta",
  summary: `
  <h2>1. Fundamentos</h2>
  <p>La <b>conciencia</b> es el estado de estar despierto con registro de uno mismo y del entorno; su alteración extrema es el <b>coma</b>. Se logra en la <b>corteza cerebral</b> (telencéfalo) y exige que funcione el <b>sistema activador reticular ascendente (SARA)</b>, que va desde los tres primeros segmentos cervicales hasta el diencéfalo y el tálamo, y desde el tálamo se conecta con la corteza. Según el libro, <b>para perder la conciencia deben afectarse al mismo tiempo la corteza y el SARA</b>, o bien actuar causas extraneurológicas (metabólicas, tóxicas, depresores del SNC) que alteran ambos de forma difusa. Las conexiones tálamo-corticales, cortico-talámicas e intracorticales permiten la sincronización neuronal necesaria; si falla de forma difusa, hay desde somnolencia hasta coma.</p>
  <table>
    <tr><th>Dato del libro</th><th>Valor</th></tr>
    <tr><td>Flujo sanguíneo cerebral (FSC)</td><td>15% del gasto cardiaco = 750 mL/min = 50 mL/100 g de tejido/min</td></tr>
    <tr><td>Requerimiento de O2</td><td>40-70 mL/min; el cerebro necesita O2 y glucosa de forma continua (no almacena energía)</td></tr>
    <tr><td>Si cesa el flujo</td><td>Reservas de glucosa y ATP se agotan en 3-5 min; la conciencia se pierde de inmediato (máximo 20 s tras agotarse la reserva)</td></tr>
    <tr><td>Efecto de la PaCO2</td><td>1 mmHg de cambio = 3-4% de cambio del FSC. Hipercapnia aumenta el flujo; hipocapnia lo disminuye</td></tr>
    <tr><td>Autorregulación</td><td>Mantiene el flujo constante con PAM de 50 a 150 mmHg</td></tr>
  </table>
  <p>Si la PAM es &lt; 50 mmHg el flujo se interrumpe y hay <b>infartos</b>; si es &gt; 150 mmHg aumenta el flujo y la presión en los vasos cerebrales y hay <b>hemorragias</b>.</p>

  <h2>2. Ciclo vigilia-sueño</h2>
  <ul>
    <li><b>Sistema inductor de la vigilia</b>: <b>locus coeruleus</b> (suelo del cuarto ventrículo), con la mayor cantidad de neuronas noradrenérgicas, que se proyectan a corteza y tronco. Según el libro, la fiebre aumenta su actividad metabólica y la liberación de noradrenalina, que induce vigilia. Participan además dopamina, acetilcolina e histamina.</li>
    <li><b>Sistema inductor del sueño</b>: núcleos del <b>rafe dorsal</b> (serotonina) y núcleo gigantocelular de la formación reticular (acetilcolina). La <b>melatonina</b> la produce la glándula pineal, se sintetiza de noche y está controlada por el núcleo supraquiasmático.</li>
    <li><b>Factores externos</b>: luz, oscuridad, horario de comidas, de trabajo y escolar. <b>Factores internos</b>: ritmos circadianos hormonales (hormona del crecimiento, cortisol, melatonina, prolactina).</li>
    <li>Redes de la conciencia: red de modo por defecto (reposo, autorreflexión), red ejecutiva central (atención dirigida a tareas) y red de saliencia (mediadora entre ambas). Pueden alterarse sin lesión estructural visible.</li>
  </ul>
  <div class="note"><b>Alerta del libro:</b> el texto dice que el neurotransmisor más importante del SARA es la serotonina, pero describe la vigilia como dependiente de catecolaminas del locus coeruleus (noradrenalina). Para el examen, vigilia = locus coeruleus/noradrenalina; sueño = rafe/serotonina. También escribe «melanina» en lugar de melatonina en las conclusiones.</div>

  <h2>3. Causas</h2>
  <p>Cuatro grupos: <b>estructurales</b> (traumatismo, tumores, hemorragias, lesiones vasculares, isquemia: déficit focal, efecto de masa, edema y aumento de la presión intracraneal), <b>metabólicas</b> (hipoxia, hipercarbia, hipo e hiperglucemia, alteraciones de calcio y sodio, coma urémico, encefalopatía hepática, Wernicke: disfunción difusa y potencialmente reversible), <b>toxicológicas</b> (sobredosis, alcohol, sedantes) e <b>infecciosas</b> (meningitis, encefalitis, absceso, encefalopatía séptica). El libro cita que 4-10% de las consultas a urgencias son por alteración de la conciencia y que un tercio corresponde a tóxicos.</p>

  <h2>4. Grados de alteración cuantitativa</h2>
  <table>
    <tr><th>Estado</th><th>Característica</th></tr>
    <tr><td>Vigilia</td><td>Despierto, consciente de sí mismo y del entorno</td></tr>
    <tr><td>Somnolencia</td><td>Dormido, despierta con facilidad con cualquier estímulo y atiende órdenes simples</td></tr>
    <tr><td>Obnubilación</td><td>Vigilancia disminuida, letárgico, atención deficiente, confuso; responde solo a estímulos repetidos y vigorosos</td></tr>
    <tr><td>Estupor</td><td>No atiende estímulos simples; despierta con estímulos intensos o dolorosos y vuelve al estado previo; respuesta verbal lenta e inadecuada</td></tr>
    <tr><td>Coma</td><td>Sin respuesta a ningún estímulo; por lo general Glasgow <b>≤ 8</b></td></tr>
  </table>

  <h2>5. Cálculo: Escala de coma de Glasgow</h2>
  <p><b>Fórmula:</b> Glasgow = apertura ocular (1-4) + respuesta verbal (1-5) + respuesta motora (1-6). Rango 3-15 (el libro escribe «/15»).</p>
  <table>
    <tr><th>Apertura ocular</th><th>Respuesta verbal</th><th>Respuesta motora</th></tr>
    <tr><td>4 espontánea<br>3 al estímulo verbal<br>2 al dolor<br>1 nula</td><td>5 orientado<br>4 desorientado<br>3 palabras inapropiadas<br>2 sonidos incomprensibles<br>1 nula</td><td>6 obedece órdenes<br>5 localiza el dolor<br>4 retirada al dolor<br>3 reflejo flexor<br>2 reflejo extensor<br>1 nulo</td></tr>
  </table>
  <p><b>Ejemplo resuelto:</b> abre los ojos solo al dolor (2), emite sonidos incomprensibles (2) y flexiona anormalmente los brazos (3): 2 + 2 + 3 = <b>7</b>. Como es ≤ 8, corresponde a coma según el libro. <b>Interpretación:</b> decorticación = motor 3 (total típico del libro: 5 si ocular 1 y verbal 1); descerebración = motor 2 (total 4).</p>
  <p><b>Escala FOUR</b> (Full Outline of UnResponsiveness): 4 componentes (respuesta ocular, respuesta motora, reflejos del tronco, patrón respiratorio), cada uno de 0 a 4, máximo <b>16</b>. No evalúa respuesta verbal, por eso sirve en pacientes <b>intubados o sedados</b>, y valora mejor el tronco y la respiración.</p>

  <h2>6. Posturas y deterioro rostro-caudal</h2>
  <table>
    <tr><th></th><th>Decorticación</th><th>Descerebración</th></tr>
    <tr><td>Lesión (libro)</td><td>Daño diencefálico; TCE grave; mal pronóstico</td><td>Mesencéfalo, protuberancia</td></tr>
    <tr><td>Postura</td><td>Flexión de brazos, muñecas y dedos; piernas con flexión plantar y rotación interna</td><td>Brazos extendidos en aducción e hiperpronación, dientes apretados; piernas rígidas en extensión y flexión plantar; opistótonos posible</td></tr>
    <tr><td>Glasgow motor</td><td>3 (total 5)</td><td>2 (total 4)</td></tr>
  </table>
  <p>El <b>síndrome central de deterioro rostro-caudal</b> avanza por fases, pierde funciones en sentido descendente:</p>
  <ul>
    <li><b>Diencefálica</b>: pupilas mióticas, decorticación, Babinski bilateral, respiración de Cheyne-Stokes.</li>
    <li><b>Mesencefálica</b>: pupilas intermedias irregulares sin reflejos, hiperventilación, descerebración.</li>
    <li><b>Protuberancial</b>: pupilas intermedias sin reflejos, paciente flácido, Babinski bilateral, respiración superficial con apneas.</li>
    <li><b>Bulbar</b>: respiración de Biot (lenta, irregular, con apnea), hipotensión, pupilas midriáticas sin reflejos, cuadripléjico, sin tono.</li>
    <li><b>Estado vegetativo</b>: recupera ciclo vigilia-sueño, abre los ojos, no responde a estímulos ni conoce el entorno.</li>
  </ul>

  <h2>7. Muerte cerebral</h2>
  <p>Pérdida total e irreversible de todas las funciones encefálicas, incluido el tronco. Tres datos cardinales: <b>coma, ausencia de reflejos del tallo y apnea</b>. Antes debe haber una catástrofe del SNC compatible, y deben <b>excluirse</b> alteraciones electrolíticas, ácido-base, endocrinas, intoxicación o drogas neurodepresoras, y la temperatura central no debe ser menor de <b>32 °C</b>. Si no puede evaluarse con fiabilidad: EEG, potenciales evocados, angiografía o Doppler transcraneal.</p>
  <div class="note"><b>Alerta del libro:</b> el texto dice que se debe cumplir «uno de estos criterios», pero la lista enumera condiciones que en la práctica deben cumplirse en conjunto (catástrofe compatible, exclusión de confusores, temperatura y ausencia de reflejos). En las preguntas se trabaja con la lógica de la lista completa.</div>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>Coma = Glasgow ≤ 8. Decorticación motor 3 (diencéfalo); descerebración motor 2 (mesencéfalo/protuberancia).</li>
    <li>Pérdida de conciencia = corteza + SARA, o causa difusa extraneurológica. Una lesión pequeña unilateral no basta.</li>
    <li>Autorregulación PAM 50-150 mmHg: debajo, infarto; encima, hemorragia. PaCO2: 1 mmHg = 3-4% del FSC.</li>
    <li>Locus coeruleus/noradrenalina = vigilia; rafe/serotonina = sueño; melatonina = pineal, de noche.</li>
    <li>FOUR para intubados (sin verbal; máximo 16). Glasgow necesita la respuesta verbal.</li>
    <li>Confusión frecuente: somnolencia (despierta fácil) vs obnubilación (necesita estímulo vigoroso) vs estupor (necesita dolor) vs coma.</li>
    <li>Muerte cerebral: coma + sin reflejos del tallo + apnea, con temperatura ≥ 32 °C y sin fármacos que confundan.</li>
  </ul>
  `,
  questions: [
    {
      stem: "Un varón de 34 años con neumonía lleva dos noches con insomnio marcado: temperatura 39,2 °C, taquicardia y sensación de hipervigilia. Al explicar por qué la fiebre favorece que permanezca despierto, ¿qué estructura y qué mediador propone el capítulo?",
      options: [
        { t: "Mayor actividad del rafe dorsal con liberación de serotonina, que sostiene la vigilia durante el estado febril", why: "El libro asigna a la fiebre el locus coeruleus (noradrenalina); el rafe dorsal se cita como inductor del sueño, y no es la estructura descrita para la hipervigilia febril." },
        { t: "Mayor actividad metabólica del locus coeruleus con liberación aumentada de noradrenalina, que induce la vigilia", why: "Correcta. El libro indica que con la fiebre el locus coeruleus aumenta su actividad y libera más catecolaminas, sobre todo noradrenalina, que induce la vigilia." },
        { t: "Mayor síntesis nocturna de melatonina en la glándula pineal, controlada por el núcleo supraquiasmático, que activa la corteza", why: "La melatonina se sintetiza de noche y favorece el sueño dentro del ritmo circadiano; no explica la hipervigilia febril." },
        { t: "Mayor descarga del núcleo gigantocelular de la formación reticular con liberación de acetilcolina, que mantiene la vigilia", why: "Ese núcleo forma parte del sistema inductor del sueño según el libro, no del inductor de la vigilia." }
      ],
      correct: 1
    },
    {
      stem: "Un hombre de 52 años es traído tras una caída desde una escalera. Solo abre los ojos cuando se le aplica presión en el esternón, no emite palabras sino sonidos ininteligibles y, ante el dolor, flexiona de forma anormal ambos brazos sobre el tórax. ¿Cuál es su puntaje en la escala de Glasgow y cómo se interpreta con el criterio del capítulo?",
      options: [
        { t: "9 puntos (ocular 2 + verbal 3 + motor 4); queda por encima del umbral de coma de 8", why: "Sumaría 9 solo si los sonidos fueran palabras inapropiadas (3) y la respuesta motora fuera retirada al dolor (4); aquí valen 2 y 3." },
        { t: "8 puntos (ocular 2 + verbal 2 + motor 4); límite superior del rango de coma", why: "Resulta de tomar la flexión anormal como retirada al dolor (4); en realidad es reflejo flexor, que vale 3, y el total es 7." },
        { t: "6 puntos (ocular 2 + verbal 2 + motor 2); coma con postura de descerebración", why: "El motor sería 2 solo con reflejo extensor (descerebración); la flexión anormal de brazos es decorticación y vale 3." },
        { t: "7 puntos (ocular 2 + verbal 2 + motor 3); compatible con coma por ser ≤ 8", why: "Correcta. Ocular al dolor = 2, verbal sonidos incomprensibles = 2, motor reflejo flexor (decorticación) = 3; 2 + 2 + 3 = 7, y el libro asocia el coma a Glasgow ≤ 8." }
      ],
      correct: 3
    },
    {
      stem: "Tras un traumatismo craneoencefálico grave, una paciente de 27 años no abre los ojos ni emite sonidos. Ante un estímulo doloroso extiende ambos brazos en aducción con hiperpronación, aprieta los dientes y mantiene las piernas rígidas en extensión con flexión plantar. Glasgow 4. ¿Qué nivel lesional es más compatible según el capítulo?",
      options: [
        { t: "Mesencéfalo y protuberancia, con rigidez de descerebración (motor 2, total 4)", why: "Correcta. El libro asocia la descerebración (motor 2, total 4) con lesiones del mesencéfalo y la protuberancia." },
        { t: "Diencéfalo, con rigidez de decorticación y flexión de brazos y muñecas (motor 3, total 5)", why: "La decorticación implica flexión de los brazos y Glasgow 5; la postura descrita es de extensión y el total es 4." },
        { t: "Corteza frontal bilateral con tronco indemne, que libera la postura en extensión por pérdida del control cortical", why: "El libro liga la postura en extensión con hiperpronación a daño del tronco (mesencéfalo y protuberancia); una lesión cortical aislada no la explica." },
        { t: "Bulbo raquídeo, con cuadriplejía flácida, respiración de Biot y pupilas midriáticas sin reflejos", why: "La afectación bulbar corresponde a flacidez, respiración de Biot e hipotensión, no a rigidez extensora con dientes apretados." }
      ],
      correct: 0
    },
    {
      stem: "Un varón de 61 años hipertenso, sin tratamiento, llega a urgencias con cefalea súbita intensa y somnolencia. Presión arterial 230/130 mmHg. Considere los límites de autorregulación cerebral que describe el capítulo. ¿Qué valor de PAM tiene y qué riesgo implica?",
      options: [
        { t: "PAM 120 mmHg ((230 + 130) / 3); dentro del rango de autorregulación, sin riesgo cerebral directo", why: "Divide la suma simple entre 3; la PAM ponderada es (230 + 2 x 130) / 3 = 163 mmHg, que sale del rango de 50-150 mmHg." },
        { t: "PAM 180 mmHg (promedio simple de 230 y 130); por encima de 150 mmHg hay riesgo de hemorragia", why: "La PAM no es el promedio simple de sistólica y diastólica; con la fórmula ponderada es 163 mmHg." },
        { t: "PAM 163 mmHg; sobre 150 mmHg aumenta el flujo y la presión en los vasos cerebrales, con riesgo de hemorragia", why: "Correcta. PAM = (230 + 2 x 130) / 3 = 163,3 mmHg. Sobre 150 mmHg se pierde la autorregulación y el libro describe aumento del flujo y hemorragias cerebrales." },
        { t: "PAM 163 mmHg; por encima de 150 mmHg el flujo se interrumpe por vasoconstricción, con riesgo de infarto", why: "El valor es correcto, pero el libro asigna los infartos a PAM menor de 50 mmHg; sobre 150 mmHg el riesgo es hemorragia." }
      ],
      correct: 2
    },
    {
      stem: "Una mujer de 24 años con crisis de ansiedad hiperventila durante 30 minutos. Su PaCO2 baja de 40 a 30 mmHg y refiere mareo intenso y casi desmayo. Con la relación que da el libro entre PaCO2 y flujo sanguíneo cerebral (1 mmHg = 3-4%), ¿cómo se explica la sintomatología?",
      options: [
        { t: "Aumento del flujo de 30-40% por vasodilatación secundaria a la caída de la PaCO2 y mayor aporte de sangre al encéfalo", why: "La hipocapnia disminuye el flujo; el signo del cambio está invertido." },
        { t: "Disminución del flujo de 30-40% (10 mmHg x 3-4%) por vasoconstricción hipocápnica, que explica el mareo", why: "Correcta. Una caída de 10 mmHg de PaCO2 x 3-4% = 30-40% menos flujo; la hipoperfusión explica el mareo y la presíncope." },
        { t: "Disminución del flujo de apenas 3-4% (cambio por 1 mmHg), insuficiente para explicar el mareo ni la sensación de desmayo", why: "El 3-4% corresponde a cada 1 mmHg, no al total; con 10 mmHg el cambio es diez veces mayor." },
        { t: "Flujo sin cambios, porque la autorregulación con PAM de 50-150 mmHg lo protege por completo del efecto de la PaCO2 sobre el calibre vascular", why: "La autorregulación frente a la presión arterial no impide el efecto de la PaCO2, que es un determinante potente del calibre vascular." }
      ],
      correct: 1
    },
    {
      stem: "Un paciente de 70 años con diabetes e hipertensión es llevado por estupor progresivo con caída del nivel de conciencia de 4 horas. No hay traumatismo ni tóxicos. La RM muestra hemorragia en ganglios basales derechos con edema perilesional y desviación de la línea media de 5 mm. Glasgow 5 (ocular 1, verbal 1, motor 3) y postura de flexión anormal de brazos. ¿Qué enunciado es correcto?",
      options: [
        { t: "La pérdida de conciencia se explica por una lesión pequeña y unilateral de la corteza, sin participación del tronco ni del diencéfalo", why: "Según el libro la pérdida de conciencia requiere afectar corteza y SARA, o una disfunción difusa; aquí interviene el efecto de masa y el edema." },
        { t: "La postura indica daño mesencefálico, porque el motor 3 equivale a descerebración y la rigidez orienta a lesión del tronco alto", why: "Motor 3 es reflejo flexor (decorticación); la descerebración corresponde a motor 2." },
        { t: "El Glasgow de 5 es esperable a los 70 años con comorbilidad, pues responde al dolor y por ello no alcanza el rango de coma", why: "Un Glasgow de 5 indica deterioro grave, en rango de coma (≤ 8), sin ajuste por edad." },
        { t: "El efecto de masa y el edema comprometen vías corticales y diencefálicas; la decorticación (motor 3, Glasgow 5) orienta a daño diencefálico", why: "Correcta. El libro explica que las causas estructurales producen efecto de masa, edema y aumento de la presión intracraneal, y asocia la decorticación (Glasgow 5) con daño diencefálico." }
      ],
      correct: 3
    },
    {
      stem: "Tras una intoxicación, un varón de 40 años presenta pupilas mióticas, rigidez de decorticación, signo de Babinski bilateral y respiración de Cheyne-Stokes. Dentro del síndrome central de deterioro rostro-caudal, ¿en qué fase se encuentra?",
      options: [
        { t: "Fase mesencefálica, con pupilas intermedias irregulares, hiperventilación y descerebración", why: "Esas son las características de la fase mesencefálica; aquí hay miosis, decorticación y Cheyne-Stokes, que son más rostrales." },
        { t: "Fase bulbar, con respiración de Biot, hipotensión y paciente cuadripléjico y sin tono", why: "Es la última fase, con pupilas midriáticas sin reflejos y flacidez; el paciente descrito conserva tono flexor y pupilas mióticas." },
        { t: "Fase diencefálica, la primera del deterioro, con pupilas pequeñas y postura flexora", why: "Correcta. Miosis, decorticación, Babinski bilateral y Cheyne-Stokes son el cuadro del libro para la fase diencefálica." },
        { t: "Fase protuberancial, con paciente flácido, pupilas intermedias sin reflejos y apneas", why: "En esta fase el paciente está flácido, con pupilas intermedias sin reflejos y respiración superficial con apneas." }
      ],
      correct: 2
    },
    {
      stem: "Un hombre de 29 años sufre un traumatismo craneoencefálico y es llevado a UCI. A las 24 horas tiene Glasgow 3, pupilas sin reflejo, ausencia de reflejos oculocefálicos y oculovestibulares y apnea al probar desconexión del ventilador. La temperatura central es de 30,5 °C y el tamizaje toxicológico es positivo para benzodiazepinas. ¿Cuál es la conducta coherente con el capítulo?",
      options: [
        { t: "No declarar muerte cerebral aún: hay que recalentar hasta ≥ 32 °C y descartar el efecto de las benzodiazepinas antes de evaluar", why: "Correcta. El libro exige excluir drogas neurodepresoras y condiciones confusoras, y que la temperatura central no sea menor de 32 °C." },
        { t: "Declarar muerte cerebral: coma, ausencia de reflejos del tallo y apnea son los tres datos cardinales y bastan para el diagnóstico", why: "Esos son los datos cardinales, pero el diagnóstico exige además excluir fármacos y que la temperatura sea ≥ 32 °C." },
        { t: "Declarar muerte cerebral por el Glasgow 3 sostenido a las 24 horas; la hipotermia de 30,5 °C solo retrasa el trámite", why: "Glasgow 3 describe ausencia de respuesta, no establece muerte cerebral; y una temperatura menor de 32 °C impide hacer el diagnóstico." },
        { t: "Descartar el diagnóstico de forma definitiva, pues la apnea no figura entre los datos cardinales ni los reflejos oculocefálicos cuentan", why: "La apnea y la ausencia de reflejos del tallo son dos de los tres datos cardinales de la muerte cerebral según el capítulo." }
      ],
      correct: 0
    },
    {
      stem: "Un paciente de 58 años es ingresado a UCI intubado, bajo sedación parcial, tras una hemorragia subaracnoidea. El equipo quiere seguir su estado neurológico día a día. ¿Qué escala es más apropiada y cuál es su estructura según el capítulo?",
      options: [
        { t: "Glasgow, porque evalúa ocular, motor, reflejos del tronco y patrón respiratorio sin necesitar respuesta verbal", why: "Glasgow solo evalúa apertura ocular, respuesta verbal y motora; no incluye el tronco ni la respiración y exige respuesta verbal." },
        { t: "FOUR: cuatro componentes (ocular, motor, tronco y respiración), 0-4 cada uno, máximo 16; sin respuesta verbal", why: "Correcta. Al no requerir respuesta verbal sirve en intubados o sedados y valora mejor el tronco y el patrón respiratorio." },
        { t: "FOUR: tres componentes (ocular, verbal y motor), 1-5 cada uno, máximo 15; requiere respuesta verbal conservada", why: "La escala FOUR tiene cuatro componentes calificados de 0 a 4, con máximo de 16, y no usa la respuesta verbal." },
        { t: "Glasgow, asignando 0 a la respuesta verbal por la intubación y manteniendo el máximo de 15 de la escala", why: "Glasgow pierde utilidad al no poder valorar la respuesta verbal y su rango real empieza en 3; el libro propone FOUR como alternativa." }
      ],
      correct: 1
    },
    {
      stem: "Un hombre de 66 años con un infarto cortical pequeño en el lóbulo frontal izquierdo presenta paresia del brazo derecho, pero está despierto, atento y orientado en persona, lugar y tiempo. Un residente pregunta por qué no entró en coma. ¿Cuál es la explicación más adecuada según el capítulo?",
      options: [
        { t: "Porque el infarto cortical respeta el sistema activador reticular ascendente en cualquier localización, y ninguna lesión cortical altera la conciencia", why: "La generalización es incorrecta; el principio es que la pérdida de conciencia exige afectar corteza y SARA al mismo tiempo, o una disfunción difusa." },
        { t: "Porque el coma requiere lesión hipotalámica, estructura que no se afectó en este paciente", why: "El libro no sostiene eso; menciona corteza, SARA, tálamo y conexiones tálamo-corticales." },
        { t: "Porque la corteza frontal no participa en la conciencia, que depende solo del tálamo y del tronco", why: "La corteza es la sede de la conciencia; el punto es que una lesión limitada no basta si el SARA y el resto de la corteza funcionan." },
        { t: "Porque la lesión es focal y unilateral: perder la conciencia exige afectar corteza y SARA a la vez, o una disfunción difusa tálamo-cortical", why: "Correcta. Con SARA, tálamo y el resto de la corteza indemnes, la vigilia y la conciencia se conservan y solo hay déficit focal." }
      ],
      correct: 3
    },
    {
      stem: "Un paciente de 45 años sufre un traumatismo craneoencefálico grave. Presión arterial 100/60 mmHg. Un monitor intraparenquimatoso marca una presión intracraneal de 40 mmHg y el paciente está en estupor. Con el valor normal de presión de perfusión cerebral del libro (70-100 mmHg), ¿cuál es su PPC y qué consecuencia tiene para la conciencia?",
      options: [
        { t: "PPC 33 mmHg (PAM 73 - PIC 40); muy inferior a 70-100 mmHg: hipoperfusión, isquemia y descenso del nivel de alerta", why: "Correcta. PAM = (100 + 2 x 60) / 3 = 73,3; PPC = 73,3 - 40 = 33,3 mmHg, muy inferior a 70-100: hipoperfusión, isquemia y descenso del nivel de alerta." },
        { t: "PPC 60 mmHg (presión sistólica - PIC); perfusión limítrofe que no alcanza a explicar el estupor del paciente", why: "Resta la PIC a la presión sistólica; la PPC se calcula con la PAM (73,3), no con la sistólica, y da 33 mmHg." },
        { t: "PPC 113 mmHg (PAM 73 + PIC 40); sobreperfusión con hiperemia cerebral que explicaría el estupor", why: "Suma la PIC en lugar de restarla; la PPC es PAM - PIC." },
        { t: "PPC 73 mmHg (PAM sin restar la PIC); perfusión normal, con estupor atribuido solo a edema citotóxico", why: "73 es la PAM, no la PPC; omite restar la PIC de 40 mmHg." }
      ],
      correct: 0
    },
    {
      stem: "Un joven de 22 años sufre un golpe en la región temporal derecha. Inicialmente lúcido, a las 3 horas se vuelve somnoliento y luego estuporoso. Presenta midriasis fija derecha, hemiplejia izquierda y, más tarde, rigidez de decorticación. Integrando estado de alerta e hipertensión intracraneal, ¿cuál es el mecanismo más probable?",
      options: [
        { t: "Hernia subfalcina por desplazamiento de la línea media, con compresión de la arteria cerebral anterior y paresia crural contralateral de inicio progresivo", why: "Produce sobre todo paresia contralateral de miembros inferiores, sin midriasis por compromiso del III par." },
        { t: "Hernia amigdalina con descenso de las amígdalas cerebelosas por el agujero magno y compresión del bulbo, con paro cardiorrespiratorio", why: "Se manifiesta con paro cardiorrespiratorio y muerte, no con midriasis unilateral progresiva ni hemiplejia." },
        { t: "Hernia transtentorial uncal por hematoma de fosa media, que comprime el III par, con midriasis ipsilateral y hemiplejia contralateral", why: "Correcta. Las lesiones de la fosa media provocan hernia uncal con midriasis ipsilateral y hemiplejia contralateral; al progresar, el deterioro rostro-caudal lleva a decorticación y menor conciencia." },
        { t: "Hernia transtentorial ascendente del cerebelo por lesión infratentorial, que comprime los colículos inferiores con sordera y parálisis del IV par", why: "Su causa son lesiones infratentoriales o drenaje súbito de LCR, y produce sordera y parálisis del IV par; aquí la lesión es supratentorial." }
      ],
      correct: 2
    }
  ]
}
);
