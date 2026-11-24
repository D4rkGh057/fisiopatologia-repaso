// Chapter 33: Hypertensive skull (intracranial hypertension). Source: Vinueza, Fisiopatología Humana, book pp. 778-799.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 33,
  weight: 5,
  title: "33. Cráneo hipertensivo",
  easy: `
  <h2>La idea en una frase</h2>
  <p>La <b>hipertensión intracraneal (HIC)</b> es una presión demasiado alta dentro del cráneo: más de <b>20 mmHg durante más de 10 minutos</b>. El cráneo adulto es una caja rígida, así que todo volumen extra empuja y sube la presión.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <ol>
    <li>Dentro del cráneo conviven tres volúmenes: <b>parénquima</b> (tejido cerebral), <b>sangre</b> y <b>LCR</b> (líquido cefalorraquídeo).</li>
    <li>Por la <b>doctrina de Monro-Kellie</b>, si uno crece los otros deben achicarse para que la presión no suba.</li>
    <li>Primero se compensa con menos LCR y menos sangre venosa; esa reserva es limitada.</li>
    <li>El primer sistema que se comprime es el <b>venoso</b>, de paredes delgadas: baja el retorno, hay congestión y más volumen atrapado.</li>
    <li>Sube la PIC, se comprimen los capilares y cae el flujo: llega hipoxia, acidosis y <b>edema</b> (hinchazón del tejido).</li>
    <li>Se pierde la <b>autorregulación</b> (capacidad de mantener el flujo estable): el flujo pasa a depender de la presión arterial.</li>
    <li>Si la presión sigue subiendo, el tejido se desplaza y se <b>hernia</b> (se introduce en compartimentos donde no cabe).</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <p>La <b>cefalea</b> aparece porque la presión estira arterias y nervios; el <b>vómito en proyectil</b> porque se irrita el centro del vómito en el bulbo.</p>
  <p>El <b>papiledema</b> es hinchazón del nervio óptico por transmisión de la presión; la <b>diplopía</b> suele ser por parálisis del VI par.</p>
  <p>La <b>tríada de Cushing</b> (hipertensión, bradicardia y respiración lenta e irregular) avisa que se comprimen los centros del bulbo.</p>
  <p>Cada herniación tiene su firma: uncal (III par y midriasis ipsilateral), subfalcina (pierna contralateral por la cerebral anterior), central (miosis y Cheyne-Stokes), ascendente (sordera y IV par) y amigdalina (apnea y muerte).</p>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Te da presión arterial y PIC y te pide calcular o interpretar la PPC.</li>
    <li>Te pregunta qué sistema se afecta primero o por qué la PIC sube de golpe.</li>
    <li>Te describe pupilas, postura o respiración y pide el tipo de herniación.</li>
    <li>Te pide reconocer la tríada de Cushing o clasificar la PIC por grado.</li>
    <li>Mini ejemplo en su voz: "Un paciente tiene 140/90 y PIC de 22 mmHg sostenida; ¿cuál es su PPC y qué significa?".</li>
  </ul>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> sumar la PIC en vez de restarla, o restarla a la diastólica. La fórmula es PPC = PAM - PIC, con PAM = (PAS + 2 PAD) / 3. También: HIC no es "más de 20 mmHg un rato", sino más de 20 mmHg por más de 10 minutos.</div>

  <h2>Números y cálculos</h2>
  <p><b>PPC = PAM - PIC</b> y <b>PAM = (PAS + 2 PAD) / 3</b>. Ejemplo: 120/80 y PIC 15 → PAM = (120 + 160) / 3 = 93,3; PPC = 93,3 - 15 = 78,3 mmHg (normal 70-100).</p>
  <ul>
    <li>PIC normal: adulto 10-15 mmHg; HIC &gt; 20 mmHg por &gt; 10 min.</li>
    <li>Grados: leve 20-30, moderada 30-40, grave &gt; 40 mmHg.</li>
    <li>PPC normal: 70-100 mmHg.</li>
    <li>1 mmHg ≈ 1,36 cmH2O.</li>
    <li>LCR: 150 mL, se produce 21 mL/h; el parénquima es el 80% de la PIC.</li>
  </ul>
  <div class="note"><b>Alerta del libro:</b> afirma que 10-15 mmHg "equivale a 13,6 cc H2O"; la equivalencia correcta que él mismo da es 1 mmHg ≈ 1,36 cmH2O.</div>
  `,
  summary: `
  <h2>1. Fundamentos</h2>
  <p>La <b>hipertensión intracraneal (HIC)</b> es el aumento prolongado de la presión intracraneal (PIC) <b>&gt; 20 mmHg durante más de 10 minutos</b>. El cráneo del adulto es una cavidad <b>rígida e inextensible</b> (suturas cerradas), de modo que cualquier aumento de masa (edema, tumor, hematoma, trombosis venosa) o de LCR (hidrocefalia comunicante o no comunicante) eleva la presión. En recién nacidos y niños con suturas abiertas el cráneo puede separarse y abombar la fontanela anterior.</p>
  <table>
    <tr><th>Dato del libro</th><th>Valor</th></tr>
    <tr><td>PIC normal</td><td>Recién nacido 1,5-6 mmHg; niños 3-7 mmHg; adultos 10-15 mmHg</td></tr>
    <tr><td>Parénquima</td><td>~1400 g; determina el 80% de la PIC; tejido poco compresible</td></tr>
    <tr><td>LCR</td><td>150 mL circulantes; 10% de la PIC; producción 0,35 mL/min = 21 mL/h (500-750 mL/día); es el principal amortiguador (buffer)</td></tr>
    <tr><td>Flujo sanguíneo cerebral</td><td>15% del gasto cardiaco = 750 mL/min = 50 mL/100 g/min; la PaCO2 es el determinante sistémico más importante del calibre vascular (hipercapnia: sube el flujo; hipocapnia: lo baja)</td></tr>
    <tr><td>Presión de perfusión cerebral (PPC)</td><td>Normal 70-100 mmHg</td></tr>
    <tr><td>Equivalencia</td><td>1 mmHg ≈ 1,36 cmH2O</td></tr>
  </table>

  <h2>2. Doctrina de Monro-Kellie</h2>
  <p>Dentro del cráneo hay tres volúmenes: <b>parénquima, sangre y LCR</b>. Si uno aumenta, los otros deben disminuir para que la PIC no suba. Cuando aumenta el parénquima, el libro describe como compensaciones: ↓ producción de LCR, ↑ resistencia a su reabsorción y ↓ presión venosa del seno longitudinal superior. Agotada esa reserva, la PIC sube de forma exponencial.</p>

  <h2>3. Cálculo: presión de perfusión cerebral</h2>
  <p><b>Fórmulas:</b> PAM = (PAS + 2 x PAD) / 3 &nbsp;&nbsp;|&nbsp;&nbsp; <b>PPC = PAM - PIC</b>. Variables: PAS y PAD (mmHg), PAM presión arterial media, PIC presión intracraneal.</p>
  <p><b>Ejemplo del libro:</b> 120/80 y PIC 15. PAM = (120 + 160) / 3 = 93,3 mmHg. PPC = 93,3 - 15 = 78,3 mmHg: normal (70-100).</p>
  <p><b>Otro ejemplo:</b> 100/60 y PIC 35. PAM = (100 + 120) / 3 = 73,3. PPC = 73,3 - 35 = 38,3 mmHg: muy por debajo de 70, hay hipoperfusión. <b>Interpretación:</b> el flujo depende directamente de la PPC; la PPC cae si baja la PAM o si sube la PIC. Una PAM dentro de 50-150 mmHg puede coexistir con una PPC baja si la PIC es alta.</p>
  <div class="note"><b>Alerta del libro:</b> afirma que la PIC normal de 10-15 mmHg «equivale a 13,6 cc H2O»; la equivalencia correcta que él mismo da después es 1 mmHg ≈ 1,36 cmH2O (13,6-20 cmH2O). Además, la figura 105 trae el título «Sistema Activador Reticular Ascendente», que no corresponde al tema del capítulo.</div>

  <h2>4. Fisiopatología: de la masa a la herniación</h2>
  <ol>
    <li>Aumenta un volumen (edema, masa, LCR, sangre). Se agota la compensación de LCR y sangre.</li>
    <li>Se afecta primero el <b>sistema venoso</b>, porque sus paredes son delgadas y compresibles. Al comprimirse, disminuye el retorno venoso, hay congestión y más volumen sanguíneo atrapado.</li>
    <li>La PIC sube más, se comprimen los capilares, cae el flujo: <b>hipoxia, acidosis láctica, edema citotóxico</b>. Círculo vicioso: más presión, menos retorno venoso, más edema.</li>
    <li>Se <b>pierde la autorregulación cerebrovascular</b>: si baja la presión arterial el flujo cae (isquemia); si sube, entra más sangre y sube la PIC. Es una causa principal de deterioro súbito.</li>
    <li>La presión elevada daña el endotelio, abre las uniones estrechas de la barrera hematoencefálica y activa microglía y astrocitos (IL-1β, TNF-α), con edema vasogénico y más PIC.</li>
    <li>Si no se trata, hay <b>herniación</b>.</li>
  </ol>
  <p>Autorregulación normal: si la presión arterial sube, vasoconstricción; si baja, vasodilatación, para mantener el flujo constante dentro de PAM 50-150 mmHg.</p>

  <h2>5. Clasificación por grado</h2>
  <table>
    <tr><th>Grado</th><th>PIC</th></tr>
    <tr><td>Leve</td><td>20-30 mmHg</td></tr>
    <tr><td>Moderada</td><td>30-40 mmHg</td></tr>
    <tr><td>Grave</td><td>&gt; 40 mmHg</td></tr>
  </table>
  <p>Formas: <b>aguda</b> (trauma, ACV), <b>crónica</b> (neoplasias, trombosis venosa cerebral, fármacos), <b>idiopática</b> (sin causa estructural; cefalea y alteraciones visuales por compresión del nervio óptico) y <b>silenciosa</b> (aumento lento sin cefalea ni vómitos, con déficit cognitivo y cambios conductuales).</p>

  <h2>6. Tipos de edema cerebral</h2>
  <table>
    <tr><th>Tipo</th><th>Mecanismo</th></tr>
    <tr><td>Citotóxico</td><td>Falla de las bombas de energía; es intracelular (isquemia, intoxicación)</td></tr>
    <tr><td>Vasogénico</td><td>↑ permeabilidad de capilares; trasudado/exudado de la sangre al intersticio</td></tr>
    <tr><td>Intersticial</td><td>Dificultad de circulación y reabsorción del LCR (hidrocefalia)</td></tr>
    <tr><td>Hidrostático</td><td>Sustancias osmóticamente activas en sangre (glucosa, sodio, productos de diálisis)</td></tr>
  </table>
  <p>En fases avanzadas se combinan en un <b>edema mixto</b>, de progresión rápida y mala respuesta al tratamiento.</p>

  <h2>7. Manifestaciones con su mecanismo</h2>
  <ul>
    <li><b>Cefalea</b>: tracción o presión sobre arterias y nervios craneales con fibras dolorosas.</li>
    <li><b>Vómito en proyectil</b>: el centro del vómito está en el bulbo; la zona de quimiorreceptores en el área postrema, piso del cuarto ventrículo.</li>
    <li><b>Papiledema</b>: edema del nervio óptico; puede ser bilateral o asimétrico; ecografía ocular muestra aumento de la vaina del nervio óptico.</li>
    <li><b>Diplopía</b>: parálisis del VI par (unilateral o bilateral).</li>
    <li><b>Síncope</b>: menor flujo cerebral. <b>Progresión</b>: anisocoria, hemiparesia, hemiplejia por herniación; alteración de conciencia hasta coma.</li>
    <li><b>Tríada de Cushing</b>: hipertensión arterial (mantiene la perfusión con PAM suficiente), <b>bradicardia</b> (&lt; 60 lpm, compresión del centro vasomotor) y <b>respiración lenta e irregular</b> (&lt; 12 rpm, compresión del centro respiratorio).</li>
  </ul>

  <h2>8. Herniaciones</h2>
  <table>
    <tr><th>Tipo</th><th>Causa/ubicación</th><th>Clínica</th></tr>
    <tr><td>Subfalcina</td><td>Masa en la convexidad frontoparietal; cisura interhemisférica; desvía línea media hacia el lado ipsilateral</td><td>Lesión de la arteria cerebral anterior: hemiplejia contralateral de miembros inferiores</td></tr>
    <tr><td>Transtentorial uncal (descendente)</td><td>Lesiones de fosa media: hematomas epidural o subdural, contusión o tumor temporal</td><td>Parálisis del III par con midriasis ipsilateral y hemiplejia contralateral</td></tr>
    <tr><td>Transtentorial central</td><td>Lesiones masivas bilaterales (frontal, parietal, occipital); descenso de diencéfalo y mesencéfalo</td><td>Alteración de conciencia, miosis bilateral, Cheyne-Stokes, mirada tónica hacia abajo</td></tr>
    <tr><td>Transtentorial ascendente</td><td>Lesiones infratentoriales; drenaje súbito de LCR por derivación ventricular externa</td><td>Compresión del mesencéfalo y colículos inferiores: sordera, parálisis del IV par</td></tr>
    <tr><td>Amigdalina</td><td>Amígdalas cerebelosas por el agujero occipital; comprime el bulbo; TCE</td><td>Paro cardiorrespiratorio y muerte</td></tr>
  </table>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>PPC = PAM - PIC (normal 70-100); PAM = (PAS + 2 PAD) / 3. No se resta la PIC a la diastólica ni se suma.</li>
    <li>HIC: PIC &gt; 20 mmHg por &gt; 10 min. Leve 20-30; moderada 30-40; grave &gt; 40.</li>
    <li>Primer sistema afectado: el venoso. El LCR es el amortiguador principal; el parénquima es el 80%.</li>
    <li>Cushing: HTA + bradicardia + respiración irregular lenta (compresión de centros bulbares); no es taquicardia con hipotensión.</li>
    <li>Uncal: III par ipsilateral + hemiplejia contralateral. Subfalcina: piernas por ACA. Ascendente: sordera y IV par. Amigdalina: apnea y muerte.</li>
    <li>Citotóxico = intracelular por bombas; vasogénico = permeabilidad capilar; intersticial = LCR.</li>
    <li>La hipercapnia aumenta el flujo y el volumen sanguíneo, por lo tanto puede subir la PIC.</li>
  </ul>
  `,
  questions: [
    {
      id: "33-0",
      stem: "Un hombre de 48 años con traumatismo craneoencefálico tiene presión arterial 140/90 mmHg. El monitor registra una PIC de 22 mmHg sostenida durante 15 minutos. ¿Cuál es la interpretación correcta con las fórmulas del capítulo?",
      options: [
        { t: "PAM 106,7 y PPC 128,7 (PAM + PIC); sobreperfusión sin hipertensión intracraneal.", why: "Suma la PIC donde debe restarla, y con 22 mmHg sostenidos por más de 10 minutos ya se cumple el criterio de HIC." },
        { t: "PAM 106,7 y PPC 84,7 (PAM - PIC); HIC leve con perfusión aún normal.", why: "Correcta. PAM = (140 + 180) / 3 = 106,7; PPC = 106,7 - 22 = 84,7 mmHg, dentro de 70-100; una PIC de 20-30 mmHg sostenida es HIC leve." },
        { t: "PAM 106,7 y PPC 68 (diastólica - PIC); HIC con isquemia por PPC baja.", why: "El 68 sale de restar la PIC a la diastólica (90 - 22); la PPC se calcula con la PAM, no con la diastólica." },
        { t: "PAM 115 y PPC 93 (promedio simple - PIC); PIC 22 aún es normal.", why: "La PAM no es el promedio simple de sistólica y diastólica, y una PIC de 22 mmHg supera el límite de 20 mmHg." }
      ],
      correct: 1,
      rule: "Calcula PAM = (PAS + 2 PAD) / 3 y luego PPC = PAM - PIC; nunca sumes la PIC ni uses la diastólica."
    },
    {
      id: "33-1",
      stem: "Un paciente de 55 años con un glioblastoma frontal aumenta progresivamente el volumen del parénquima. Durante semanas la PIC se mantiene casi normal y luego, con un pequeño incremento adicional, sube de forma brusca. ¿Cuál es la explicación?",
      options: [
        { t: "Monro-Kellie: se compensa con menos LCR y sangre venosa; agotada la reserva, la PIC sube de forma exponencial.", why: "Correcta. El cráneo es rígido y la compensación inicial es limitada; una vez agotada, cualquier incremento de volumen eleva mucho la PIC." },
        { t: "El parénquima es muy compresible y absorbe el volumen hasta que la barrera hematoencefálica cede.", why: "El parénquima es poco compresible; la reserva real está en el LCR y en la sangre venosa." },
        { t: "El LCR aumenta su producción para amortiguar el tumor hasta que el sistema ventricular se satura.", why: "La compensación es la contraria: baja la producción de LCR y aumenta la resistencia a su reabsorción." },
        { t: "El cráneo del adulto se expande de forma gradual por las suturas abiertas hasta alcanzar su límite elástico y luego se rompe.", why: "Las suturas del adulto están cerradas: el cráneo es una cavidad rígida e inextensible." }
      ],
      correct: 0,
      rule: "Monro-Kellie primero compensa con LCR y sangre venosa; si el volumen sigue creciendo, la PIC sube de forma exponencial."
    },
    {
      id: "33-2",
      stem: "Una mujer de 30 años presenta un hematoma intraparenquimatoso que eleva la PIC. Una enfermera pregunta qué sistema se compromete primero y por qué se perpetúa el deterioro. ¿Qué respuesta es correcta?",
      options: [
        { t: "El arterial, porque su alta presión lo comprime primero y genera edema vasogénico.", why: "Las arterias no se comprimen primero: tienen pared gruesa y presión alta. Lo que se aplasta es el sistema venoso, de paredes delgadas y compresibles." },
        { t: "El del LCR, porque se bloquea su reabsorción y comprime el parénquima.", why: "El LCR es el amortiguador principal, pero el primer sistema que se comprime es el venoso." },
        { t: "El capilar, porque el edema citotóxico lo dilata y aumenta el volumen sanguíneo.", why: "Los capilares se comprimen y el flujo cae; no se dilatan por edema citotóxico." },
        { t: "El venoso: paredes delgadas, menos retorno, congestión, más PIC, hipoxia y edema.", why: "Correcta. Al comprimirse el sistema venoso baja el retorno, hay congestión y más volumen atrapado; se forma un círculo vicioso de más presión y más edema." }
      ],
      correct: 3,
      rule: "En la HIC el primero en sufrir es el sistema venoso; si te preguntan el amortiguador principal, ese es el LCR."
    },
    {
      id: "33-3",
      stem: "Un hombre de 62 años con HIC por un hematoma subdural sufre un descenso súbito de la presión arterial a 70/40 mmHg tras la sedación. En pocos minutos presenta deterioro neurológico marcado. La resonancia previa no mostraba cambios nuevos. ¿Qué mecanismo lo explica?",
      options: [
        { t: "La autorregulación está conservada: la vasodilatación mantiene el flujo y el deterioro no depende de la presión.", why: "En la HIC con reserva agotada la autorregulación se pierde; asumir que protege es lo que explica el error." },
        { t: "Pérdida de la autorregulación: el flujo depende de la presión arterial y su caída produce isquemia.", why: "Correcta. Cuando la PIC supera la compensación, el cerebro ya no regula el calibre de sus vasos: si baja la presión arterial, el flujo cae y aparece isquemia." },
        { t: "Reflejo de Cushing con hipertensión, bradicardia y respiración irregular que agravan la PIC.", why: "El reflejo de Cushing es hipertensión con bradicardia; este paciente está hipotenso." },
        { t: "Edema intersticial agudo por reabsorción acelerada de LCR tras la sedación.", why: "El edema intersticial se debe a dificultad en la reabsorción de LCR y no explica un deterioro tras una hipotensión súbita." }
      ],
      correct: 1,
      rule: "Con HIC y reserva agotada, la autorregulación se pierde: una caída de la presión arterial se traduce en isquemia."
    },
    {
      id: "33-4",
      stem: "Una unidad de neurocríticos monitoriza a un joven con traumatismo craneal. Durante 20 minutos la PIC se mantiene en 36 mmHg. Según la clasificación del capítulo, ¿cómo se clasifica y qué implica?",
      options: [
        { t: "Leve (20-30 mmHg); es HIC porque la PIC supera 20 mmHg por más de 10 minutos.", why: "El rango leve es de 20 a 30 mmHg; con 36 mmHg el paciente ya está en el grado moderado de la clasificación." },
        { t: "Grave (más de 30 mmHg); es HIC porque la PIC supera 20 mmHg por más de 10 minutos.", why: "Grave es una PIC mayor de 40 mmHg; entre 30 y 40 mmHg corresponde al grado moderado, no al grave." },
        { t: "Moderada (30-40 mmHg); es HIC porque la PIC supera 20 mmHg por más de 10 minutos.", why: "Correcta. 36 mmHg está en el rango moderado de 30-40 y se sostuvo más de 10 minutos, así que cumple la definición de HIC." },
        { t: "Moderada (30-40 mmHg); no es HIC hasta mantenerse más de 60 minutos.", why: "El umbral de hipertensión intracraneal sostenida es PIC mayor de 20 mmHg durante más de 10 minutos; el tiempo y la cifra de la opción no coinciden con ese criterio." }
      ],
      correct: 2,
      rule: "HIC = PIC > 20 mmHg por > 10 min; grados: leve 20-30, moderada 30-40, grave > 40."
    },
    {
      id: "33-5",
      stem: "Una mujer de 45 años con un meningioma tiene en la TAC un edema perilesional extenso. Se explica por apertura de uniones estrechas de la barrera hematoencefálica, salida de proteínas al intersticio y participación de IL-1β y TNF-α. ¿Qué tipo de edema es?",
      options: [
        { t: "Vasogénico: mayor permeabilidad capilar con salida de líquido y proteínas al intersticio.", why: "Correcta. La alteración de los vasos permite el paso de líquido y proteínas de la sangre al tejido: eso define el edema vasogénico." },
        { t: "Citotóxico: falla de las bombas de energía con entrada de Na+ y agua a la célula.", why: "El citotóxico es intracelular y por falla de energía; aquí el líquido sale de los vasos al intersticio." },
        { t: "Intersticial: dificultad en la circulación y reabsorción del LCR hacia el parénquima.", why: "El intersticial se ve en la hidrocefalia por alteración del LCR, no por ruptura de la barrera." },
        { t: "Hidrostático: solutos plasmáticos como glucosa o sodio arrastran agua con barrera íntegra.", why: "El hidrostático corresponde a un gradiente osmótico plasmático con barrera íntegra, no a una barrera dañada con paso de proteínas." }
      ],
      correct: 0,
      rule: "Barrera rota con proteínas en el intersticio = vasogénico; bomba de energía fallida = citotóxico; problema de LCR = intersticial."
    },
    {
      id: "33-6",
      stem: "Una paciente de 58 años presenta un meningioma parasagital en la convexidad frontoparietal derecha. Desarrolla debilidad de la pierna izquierda sin afectación facial ni del brazo, y la TAC muestra desplazamiento de la línea media bajo la hoz. ¿Qué herniación y qué estructura explican el déficit?",
      options: [
        { t: "Transtentorial uncal, con compresión del III par y midriasis ipsilateral.", why: "La uncal produce midriasis ipsilateral y hemiplejia contralateral por lesiones de fosa media, no un déficit aislado de la pierna." },
        { t: "Transtentorial central, con descenso del diencéfalo y miosis bilateral.", why: "La central cursa con alteración de conciencia, miosis bilateral y Cheyne-Stokes." },
        { t: "Amigdalina, con descenso de las amígdalas cerebelosas y paro cardiorrespiratorio.", why: "La amigdalina produce apnea y paro cardiorrespiratorio, no paresia crural aislada." },
        { t: "Subfalcina: la masa desplaza la línea media bajo la hoz y comprime la cerebral anterior.", why: "Correcta. La masa de convexidad desplaza la línea media bajo la hoz y comprime la arteria cerebral anterior, cuyo territorio incluye la pierna." }
      ],
      correct: 3,
      rule: "Pierna contralateral aislada + masa de convexidad = subfalcina por compresión de la cerebral anterior."
    },
    {
      id: "33-7",
      stem: "Un varón de 54 años con hematoma intracerebral grande llega con somnolencia. Presión arterial 195/95 mmHg, frecuencia cardiaca 46 lpm y respiración irregular y lenta de 9 por minuto. ¿Cómo se interpreta este cuadro?",
      options: [
        { t: "Shock neurogénico: hipotensión y bradicardia por pérdida del tono simpático.", why: "El paciente está hipertenso; el shock neurogénico cursa con hipotensión, no con presión de 195/95." },
        { t: "Tríada de Cushing: hipertensión, bradicardia y respiración lenta por compresión de centros bulbares.", why: "Correcta. La hipertensión busca mantener la perfusión, y la bradicardia y la respiración lenta reflejan compresión de los centros vasomotor y respiratorio del bulbo." },
        { t: "Crisis hipertensiva primaria con bradicardia por betabloqueo y depresión respiratoria por opioides.", why: "No hay dato de fármacos; el conjunto de hipertensión, bradicardia y respiración lenta es la tríada de Cushing." },
        { t: "Respuesta simpática por dolor: hipertensión con taquicardia y taquipnea.", why: "La frecuencia cardiaca y la respiratoria están disminuidas; no hay taquicardia ni taquipnea." }
      ],
      correct: 1,
      rule: "HTA + bradicardia + respiración lenta e irregular en HIC = tríada de Cushing; no la confundas con taquicardia e hipotensión."
    },
    {
      id: "33-8",
      stem: "Un niño de 8 años con tumor de fosa posterior tiene hidrocefalia obstructiva y se le coloca un drenaje ventricular externo. Tras un drenaje rápido de LCR presenta deterioro agudo con sordera y diplopía por parálisis del IV par. ¿Qué fenómeno ocurrió?",
      options: [
        { t: "Hernia subfalcina por desplazamiento de la línea media, con paresia crural tras drenar LCR.", why: "La subfalcina afecta la cerebral anterior y da paresia crural; no explica sordera ni parálisis del IV par." },
        { t: "Hernia amigdalina por descenso de las amígdalas cerebelosas, con apnea y paro cardiorrespiratorio.", why: "La amigdalina comprime el bulbo y produce apnea y paro cardiorrespiratorio, no sordera ni IV par." },
        { t: "Hernia transtentorial ascendente: el cerebelo asciende y comprime mesencéfalo y colículos inferiores.", why: "Correcta. En lesiones infratentoriales y tras drenar LCR de forma súbita, el cerebelo asciende por la tienda y comprime mesencéfalo y colículos inferiores." },
        { t: "Hernia transtentorial central por lesiones supratentoriales bilaterales, con miosis y Cheyne-Stokes.", why: "La central es supratentorial y da miosis bilateral y Cheyne-Stokes; este caso nace en la fosa posterior." }
      ],
      correct: 2,
      rule: "Lesión infratentorial + drenaje brusco de LCR + sordera o IV par = herniación ascendente."
    },
    {
      id: "33-9",
      stem: "Una mujer de 62 años con un hematoma subdural crónico es intervenida y en el posoperatorio presenta obstrucción parcial de la vía aérea que eleva la PaCO2 de 40 a 60 mmHg. Con la regla de 3-4% por mmHg, ¿cuál es la predicción?",
      options: [
        { t: "El flujo sube 60-80%; más volumen sanguíneo eleva la PIC por Monro-Kellie.", why: "Correcta. 20 mmHg x 3-4% = 60-80% más flujo; la vasodilatación aumenta el volumen sanguíneo y, por Monro-Kellie, la PIC." },
        { t: "El flujo baja 60-80% por vasoconstricción refleja intensa y la PIC disminuye.", why: "La hipercapnia dilata los vasos y aumenta el flujo; la hipocapnia es la que lo disminuye." },
        { t: "El flujo sube solo 3-4%; el volumen añadido no modifica la PIC.", why: "El 3-4% es el cambio por cada 1 mmHg de PaCO2, no por los 20 mmHg que subió en este paciente." },
        { t: "El flujo no cambia porque la autorregulación neutraliza la PaCO2.", why: "La autorregulación de presión no anula el efecto vasodilatador de la PaCO2." }
      ],
      correct: 0,
      rule: "Subida de PaCO2 = vasodilatación, más volumen sanguíneo y más PIC; multiplica por 3-4% por cada mmHg."
    },
    {
      id: "33-10",
      stem: "Un hombre de 35 años sufre un traumatismo grave y llega hipotenso, con presión arterial 80/50 mmHg. La PIC medida es de 28 mmHg. Un estudiante nota que la PAM está dentro del rango de autorregulación de 50-150 mmHg y concluye que el cerebro está bien perfundido. ¿Cuál es la respuesta correcta?",
      options: [
        { t: "Tiene razón: con PAM de 60 mmHg, dentro de 50-150, la perfusión es adecuada y la PIC no la modifica.", why: "El rango de 50-150 describe la autorregulación del flujo, pero la perfusión depende también de la PIC, y con HIC la autorregulación se pierde." },
        { t: "La PPC es 88 mmHg (PAM + PIC), normal; la PIC elevada compensa la hipotensión.", why: "Suma la PIC donde debe restarla; una PIC elevada reduce la perfusión, no la compensa." },
        { t: "La PPC es 32 mmHg (PAM 60 - PIC 28); la perfusión está muy por debajo de 70 y hay riesgo de isquemia.", why: "Correcta. PAM = (80 + 100) / 3 = 60; PPC = 60 - 28 = 32 mmHg, muy por debajo de 70, con riesgo de isquemia." },
        { t: "La PPC es 22 mmHg (diastólica 50 - PIC 28); hay isquemia grave sin calcular la PAM.", why: "La PPC se calcula con la PAM del paciente (60 mmHg), no con la presión diastólica (50 mmHg)." }
      ],
      correct: 2,
      rule: "Estar dentro de 50-150 no garantiza perfusión: calcula PPC = PAM - PIC y busca al menos 70 mmHg."
    },
    {
      id: "33-11",
      stem: "Una joven de 17 años consulta por cefalea diaria de 2 semanas con vómitos en proyectil matutinos, visión doble al mirar hacia el lado derecho y borrosidad visual transitoria. El fondo de ojo muestra edema bilateral de ambas papilas. ¿Qué par craneal explica la diplopía y qué alteración explica el fondo de ojo?",
      options: [
        { t: "Parálisis del III par con ptosis y midriasis; atrofia óptica por compresión crónica.", why: "La diplopía en HIC se atribuye sobre todo al VI par; el fondo de ojo muestra edema de papila, no atrofia." },
        { t: "Parálisis del IV par por compresión del mesencéfalo; hemorragias retinianas por hipertensión venosa.", why: "El IV par aparece en la herniación ascendente, y el hallazgo descrito es papiledema, no hemorragia retiniana." },
        { t: "Parálisis del VII par por compresión del puente; edema macular por trasudación focal.", why: "El VII par no controla la motilidad ocular; no explica la visión doble." },
        { t: "Parálisis del VI par; papiledema por transmisión de la presión del LCR a la vaina del nervio óptico.", why: "Correcta. La parálisis del VI par produce diplopía y el papiledema resulta de transmitir la presión del LCR a la vaina del nervio óptico." }
      ],
      correct: 3,
      rule: "Diplopía + papiledema en HIC: piensa en VI par para la diplopía y en transmisión de presión por la vaina óptica para el fondo de ojo."
    }
  ]
}
);
