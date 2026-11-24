// Chapter 22: Acute kidney injury (IRA). Source: Vinueza, Fisiopatología Humana, book pp. 523-541.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 22,
  weight: 5,
  title: "22. Insuficiencia renal aguda",
  easy: `
  <h2>La idea en una frase</h2>
  <p>La insuficiencia renal aguda (IRA) es la caída brusca de la función del riñón. Antes de tratarla hay que decidir una sola cosa: el problema está <b>antes</b> del riñón, <b>dentro</b> del riñón o <b>después</b>, en la salida de la orina.</p>
  <p>El <b>filtrado glomerular</b> (FG) es la cantidad de líquido que el riñón limpia por minuto: unos 125 mL por minuto en una persona sana.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <p>Toda la fisiopatología se reduce a tres puertas: la sangre que entra, el tejido que filtra y la orina que sale. Si falla una, el FG cae.</p>
  <ol>
    <li><b>Prerrenal (70% de los casos):</b> llega poca sangre por hemorragia, diarrea, quemaduras o shock. El tejido está sano, solo le falta flujo, así que el FG baja.</li>
    <li>Un riñón sano reacciona conservando sodio y agua. Por eso la orina queda con muy poco sodio (menos de 10 mEq/L) y muy concentrada (más de 500 mOsm/kg).</li>
    <li>Los <b>AINES</b> son antiinflamatorios como el ibuprofeno. Bloquean las <b>prostaglandinas</b>, sustancias que mantienen abierta la arteriola de entrada del glomérulo.</li>
    <li>Sin prostaglandinas, la arteriola de entrada (aferente) se cierra y la de salida (eferente) se dilata. Cae el flujo plasmático renal y con él el filtrado.</li>
    <li><b>Intrínseca (13%):</b> el daño está en el propio tejido. La forma más frecuente es la <b>necrosis tubular aguda</b> (NTA), que es la muerte de las células del túbulo por isquemia prolongada o toxinas.</li>
    <li>En la NTA las células muertas se desprenden, se pegan a la proteína de <b>Tamm-Horsfall</b> y tapan el túbulo. La orina no pasa aunque la presión ya se haya corregido.</li>
    <li><b>Postrenal (17%):</b> algo obstruye la salida, como una próstata grande, un cálculo o un tumor. Si dura semanas, el parénquima se daña y el cuadro se vuelve intrínseco.</li>
    <li>Sin filtrado se acumulan urea y creatinina, sube el potasio, no se elimina H<sup>+</sup> (acidosis) y falta <b>eritropoyetina</b>, la hormona que ordena fabricar glóbulos rojos.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <ul>
    <li><b>Oliguria</b> (menos de 500 mL al día) o anuria: el filtro produce poca orina. Es el primer signo de la IRA, no de la enfermedad crónica.</li>
    <li><b>Retención nitrogenada:</b> la urea sube de 0,5 a 1,5 mg/dL por día. La urea alta irrita la pleura y el pericardio y afecta al cerebro (encefalopatía urémica).</li>
    <li><b>Acidosis metabólica:</b> el riñón no fabrica amoniaco ni secreta H<sup>+</sup>, así que el ácido se queda en la sangre.</li>
    <li><b>Hiperpotasemia</b> (más de 5,5 mEq/L): debilidad muscular y arritmias, con ondas T picudas en el electrocardiograma.</li>
    <li><b>Anemia</b> normocítica: aparece después de una semana de IRA, por falta de eritropoyetina.</li>
    <li><b>Signos de hipovolemia</b> en la forma prerrenal: mucosas secas y caída de la presión al ponerse de pie.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Un caso con un fármaco o una caída de volumen, y la pregunta: ¿qué mecanismo bajó el filtrado?</li>
    <li>Dos datos de orina (sodio y osmolaridad) y la pregunta: ¿qué tipo de IRA es?</li>
    <li>Un paciente que sigue orinando poco aunque la presión ya se corrigió: ¿por qué la oliguria persiste?</li>
    <li>Edad, peso y creatinina para calcular el aclaramiento: ¿qué estadio le corresponde?</li>
    <li>Una complicación (potasio, pH, hemoglobina) y el mecanismo que la produce.</li>
  </ul>
  <p>Ejemplo en su voz: "Mujer de 66 años con IRA oligúrica de diez días, hemoglobina 9 g/dL, pH 7,25 y potasio 5,9: ¿por qué está acidótica y anémica?"</p>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> creer que los AINES "dan más prostaglandinas" cuando las inhiben; confundir prerrenal (revierte en menos de 24 horas al reponer volumen) con NTA (la reparación tarda semanas); y olvidar el factor 0,85 en las mujeres al calcular el aclaramiento.</div>

  <h2>Números y cálculos</h2>
  <ul>
    <li>Prerrenal: sodio urinario &lt; 10 mEq/L y osmolaridad urinaria &gt; 500 mOsm/kg.</li>
    <li>Oliguria: &lt; 500 mL/día. Diuresis mínima: 0,5 mL/kg/h.</li>
    <li>Hiperpotasemia: &gt; 5,5 mEq/L.</li>
    <li><b>Cockcroft-Gault:</b> Cl<sub>Cr</sub> = (140 − edad) × peso / (72 × creatinina); en la mujer se multiplica por 0,85.</li>
    <li>Ejemplo: hombre de 58 años, 80 kg, creatinina 2,0 → (82 × 80) / 144 = <b>45,6 mL/min</b>, estadio 3.</li>
    <li>Estadios por FG: 1 &gt; 90; 2 60-89; 3 30-59; 4 15-29; 5 &lt; 15.</li>
    <li>KDIGO: creatinina &gt; 0,3 mg/dL en 48 h o &gt; 1,5 veces el basal.</li>
  </ul>
  <div class="note"><b>Alerta del libro:</b> el caso clínico de 35 años y 70 kg da 37,80 mL/min y el texto lo llama "estadio II", pero por su propia tabla (30-59) corresponde al estadio 3. Las cifras de creatinina de la "Tabla 70" tampoco concuerdan con AKIN ni con RIFLE.</div>
  `,
  summary: `
  <h2>1. Qué falla</h2>
  <p>La insuficiencia renal aguda (IRA) es la caída <b>brusca</b> de la función renal: baja el filtrado glomerular (FG), se retienen productos nitrogenados (urea, creatinina), hay oliguria o anuria y se desordenan el agua, los electrolitos y el equilibrio ácido-base. El riñón recibe cerca del <b>20% del gasto cardiaco</b> (unos 1000 mL/min de 5000 mL/min) y filtra 125 mL/min (180 L/día); casi todo se reabsorbe y se excretan unos 1440 mL de orina al día. Por eso depende tanto de la perfusión.</p>
  <p>Según el libro, la IRA se reparte así: <b>70% prerrenal, 13% intrarrenal, 17% postrenal</b>.</p>

  <h2>2. Tres causas: la clave es dónde está el problema</h2>
  <table>
    <tr><th></th><th>Prerrenal</th><th>Intrínseca (renal)</th><th>Postrenal</th></tr>
    <tr><td>Qué ocurre</td><td>Hipoperfusión por menor volumen circulante efectivo; el parénquima está sano</td><td>Daño directo glomerular, vascular, tubular o intersticial</td><td>Obstrucción uretral, vesical o ureteral</td></tr>
    <tr><td>Ejemplos</td><td>Hemorragia, deshidratación, shock, insuficiencia cardiaca, sepsis, AINES, síndrome hepatorrenal</td><td>Necrosis tubular aguda (NTA, la más frecuente), glomerulonefritis, vasculitis, nefritis intersticial (p. ej. por penicilina)</td><td>Cálculos, hipertrofia prostática, carcinoma de vejiga, fimosis, tumores, ligadura accidental del uréter</td></tr>
    <tr><td>Pronóstico</td><td>Sin necrosis: la retención nitrogenada revierte antes de 24 h tras restituir la perfusión</td><td>Daño estructural; evoluciona en fases</td><td>Si la obstrucción persiste mucho tiempo, pasa a IRA intrínseca</td></tr>
    <tr><td>Orina</td><td>Na excretado &lt; 10 mEq/L y osmolaridad urinaria &gt; 500 mOsm/kg H<sub>2</sub>O (el riñón conserva sodio y agua)</td><td>El libro no da cifras urinarias específicas para esta forma</td><td>Oliguria o anuria según el grado de obstrucción</td></tr>
  </table>

  <h2>3. Fisiopatología, de la causa al efecto</h2>
  <h3>Prerrenal</h3>
  <p>Cae el volumen circulante efectivo (hemorragia, tercer espacio, quemaduras, síndrome nefrótico) o el volumen sistólico (infarto, el más frecuente; insuficiencia cardiaca, arritmias, embolia pulmonar, taponamiento) o la resistencia vascular (sepsis, anafilaxia). La mácula densa detecta la caída del flujo, libera renina y la angiotensina II contrae la arteriola eferente, lo que sostiene la presión hidrostática del capilar glomerular y el FG. Los <b>AINES</b> inhiben las prostaglandinas: <b>vasoconstricción aferente, vasodilatación eferente</b> y menor flujo plasmático renal. Resultado: hipoperfusión, caída del FG e hiperazoemia.</p>
  <h3>Intrínseca: la NTA isquémica, en cuatro fases</h3>
  <ol>
    <li><b>Vasoconstricción:</b> el flujo cae cerca de 50% y suben las resistencias. El endotelio lesionado libera endotelina-1, angiotensina II, tromboxano A<sub>2</sub>, prostaglandina H<sub>2</sub>, leucotrienos y adenosina, con baja respuesta vasodilatadora (acetilcolina, bradicinina, óxido nítrico).</li>
    <li><b>Iniciación y extensión:</b> daño endotelial, adhesión leucocitaria, activación de coagulación y complemento (C5b-9, C5a), edema intersticial. En el segmento <b>S3 del túbulo proximal</b> las células sufren lesión subletal y apoptosis; las células desprendidas se unen a la proteína de <b>Tamm-Horsfall</b> y <b>obstruyen</b> el túbulo, con aumento de la presión intratubular y menos orina.</li>
    <li><b>Mantenimiento:</b> desdiferenciación, migración, apoptosis y proliferación celular.</li>
    <li><b>Reparación:</b> reparación del ADN y regeneración del epitelio; el riñón puede recuperarse.</li>
  </ol>
  <h3>Postrenal</h3>
  <p>Obstrucción a cualquier nivel (uretral: estenosis, valva posterior; cuello vesical: hipertrofia prostática; ureteral bilateral: cálculos, coágulos, tumores, fibrosis, ascitis, embarazo, cáncer de cuello uterino).</p>

  <h2>4. Manifestaciones y su mecanismo</h2>
  <ul>
    <li><b>Oliguria</b> (&lt; 500 mL/día) o anuria: depende de cuánto cae el FG.</li>
    <li><b>Retención nitrogenada:</b> urea y creatinina suben 0,5-1,5 mg/dL por día; la urea puede causar pleuritis, pericarditis y encefalopatía urémica (obnubilación, temblor, coma).</li>
    <li><b>Acidosis metabólica:</b> el riñón no sintetiza amoniaco ni secreta H<sup>+</sup>; baja la acidez titulable.</li>
    <li><b>Hiperpotasemia</b> (&gt; 5,5 mEq/L): debilidad, arritmia, paro; en el caso clínico del libro hay ondas T picudas.</li>
    <li>Hipermagnesemia, hipocalcemia, hiperfosfatemia (menor excreción de fósforo), coagulopatía.</li>
    <li><b>Anemia</b> por déficit de eritropoyetina, después de una semana de IRA.</li>
    <li>Prerrenal: mucosas secas, hipotensión ortostática (caída de PAS ≥ 20 o PAD ≥ 10 mmHg).</li>
  </ul>

  <h2>5. Laboratorio y criterios diagnósticos</h2>
  <p>Creatinina normal según el libro: hombres 0,7-1,3 mg/dL; mujeres 0,6-1,1 mg/dL. Se piden sangre y orina, ecografía abdominal y, a veces, biopsia renal.</p>
  <table>
    <tr><th>Sistema</th><th>Creatinina</th><th>Diuresis</th></tr>
    <tr><td><b>AKIN 1</b></td><td>≥ 0,3 mg/dL o 150-200% del basal</td><td>&lt; 0,5 mL/kg/h por 6 h</td></tr>
    <tr><td><b>AKIN 2</b></td><td>&gt; 200-300%</td><td>&lt; 0,5 mL/kg/h por 12 h</td></tr>
    <tr><td><b>AKIN 3</b></td><td>&gt; 300%, o ≥ 4 mg/dL con alza aguda ≥ 0,5</td><td>&lt; 0,5 mL/kg/h por 24 h o anuria 12 h</td></tr>
    <tr><td><b>RIFLE</b></td><td>R (riesgo): 1,5 veces o FG ↓ &gt; 25%; I (daño): 2 veces o ↓ &gt; 50%; F (fallo): 3 veces o ↓ &gt; 75%; L (pérdida): IRA persistente &gt; 1 mes; E (fin): diálisis &gt; 3 meses</td><td>R: 6 h; I: 12 h; F: 24 h o anuria 12 h (siempre &lt; 0,5 mL/kg/h)</td></tr>
  </table>
  <p><b>KDIGO:</b> IRA si se cumple uno o más: creatinina &gt; 0,3 mg/dL en 48 h; creatinina &gt; 1,5 veces el basal (en 7 días); diuresis ≤ 0,5 mL/kg/h. El criterio de diuresis es discutido (una persona sana con poca ingesta de líquidos puede cumplirlo) y no debe reemplazar la evaluación clínica.</p>

  <h2>6. Cálculo: aclaramiento de creatinina (fórmula de Cockcroft-Gault)</h2>
  <p><b>Fórmula del libro:</b> Cl<sub>Cr</sub> = [(140 − edad) × peso (kg)] / [72 × creatinina sérica (mg/dL)]; si es <b>mujer, se multiplica por 0,85</b>. El resultado se toma como filtrado glomerular (mL/min).</p>
  <p><b>Ejemplo (hombre de 34 años, 75 kg, creatinina 3,4 mg/dL):</b></p>
  <ol>
    <li>140 − 34 = 106</li>
    <li>106 × 75 = 7950</li>
    <li>72 × 3,4 = 244,8</li>
    <li>7950 / 244,8 = <b>32,5 mL/min</b> → estadio 3 (30-59).</li>
  </ol>
  <p><b>Estadios por FG (mL/min/1,73 m<sup>2</sup>):</b> 1: &gt; 90; 2: 60-89; 3: 30-59; 4: 15-29; 5: &lt; 15. El libro indica diálisis en el estadio 5 (por eso concluye que este paciente no la necesita).</p>
  <p><b>Interpretación:</b> mientras menor sea la creatinina, mayor el aclaramiento; si la creatinina se duplica, el aclaramiento cae a la mitad. En el libro: filtrado de 125 mL/min es lo normal.</p>
  <p><b>Diuresis horaria mínima:</b> 0,5 mL/kg/h. Un adulto de 70 kg que orina 180 mL en 6 h produce 180 / (70 × 6) = 0,43 mL/kg/h, por debajo del umbral.</p>

  <div class="note"><b>Alertas del libro:</b> (1) En la fórmula del ejemplo de mujer (p. 532) se escribe 140−23 y 0,9 aunque los datos son 25 años y 0,7 mg/dL; el resultado 116,36 corresponde a los datos correctos. (2) El caso clínico (35 años, 70 kg, creatinina 2,7 mg/dL) da FG 37,80 mL/min y dice "estadio III", pero el análisis lo llama "estadio II"; por la tabla del libro corresponde al estadio 3. (3) Los valores de creatinina de la "Tabla 70" son inconsistentes con AKIN/RIFLE. (4) Dice que la hipermagnesemia se debe a "retención de amilasa", lo que no tiene sentido. (5) La creatinina de la mujer aparece como "mg/l". (6) El libro no presenta fracción excretada de sodio, relación urea/creatinina ni brecha aniónica: solo Na urinario &lt; 10 mEq/L y osmolaridad &gt; 500 en la forma prerrenal.</div>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>Prerrenal = parénquima sano, hipoperfusión, revierte en &lt; 24 h con perfusión; Na urinario &lt; 10 y osmolaridad &gt; 500. Es la más frecuente (70%).</li>
    <li>Intrínseca: la NTA es la más frecuente; causa más común de NTA, hipoperfusión renal prolongada. Obstrucción tubular por células + Tamm-Horsfall.</li>
    <li>Postrenal: obstrucción; si se prolonga, se vuelve intrínseca.</li>
    <li>AINES: vasoconstricción aferente y vasodilatación eferente. Angiotensina II: constricción eferente.</li>
    <li>Cockcroft-Gault: (140 − edad) × kg / (72 × Cr); × 0,85 en mujeres. Error frecuente: olvidar el 0,85 o usar edad y peso en el orden equivocado.</li>
    <li>Hiperpotasemia &gt; 5,5, acidosis metabólica y encefalopatía urémica son las complicaciones que más se evalúan; la anemia aparece después de una semana.</li>
    <li>AKIN/RIFLE/KDIGO: se combinan creatinina y diuresis; usan 0,3 mg/dL, 1,5 veces y 0,5 mL/kg/h.</li>
  </ul>
  `,
  questions: [
    {
      id: "22-0",
      stem: "Un hombre de 68 años con insuficiencia cardiaca y diarrea de cuatro días toma ibuprofeno 600 mg cada 8 horas. Ingresa con presión arterial de 92/58 mmHg, diuresis de 300 mL en 24 horas y creatinina de 2,4 mg/dL (basal 1,0). ¿Qué mecanismo hemodinámico explica la caída del filtrado glomerular?",
      options: [
        {
          t: "Vasodilatación de la arteriola aferente por exceso de prostaglandinas renales.",
          why: "Asumes que el AINE aporta prostaglandinas, y hace lo contrario: inhibe su síntesis. Sin esa vasodilatación, la arteriola de entrada se cierra en un riñón que ya recibe poco flujo por la diarrea y la falla cardiaca."
        },
        {
          t: "Vasoconstricción de la arteriola eferente por activación directa de angiotensina II plasmática.",
          why: "Confundes la compensación con la causa. La angiotensina II contrae la eferente y así sostiene la presión del capilar glomerular; si ese fuera el mecanismo, el filtrado no caería tanto en un riñón hipoperfundido. Aquí el fármaco actuó sobre la aferente."
        },
        {
          t: "Vasoconstricción aferente y vasodilatación eferente por inhibición de la síntesis de prostaglandinas.",
          why: "El AINE bloquea la COX y desaparece la prostaglandina que mantenía abierta la aferente; la entrada se cierra y la salida se dilata. Cae el flujo plasmático renal y el filtrado sobre un riñón ya hipoperfundido."
        },
        {
          t: "Necrosis del túbulo proximal en el segmento S3 con obstrucción por Tamm-Horsfall.",
          why: "Saltas a la lesión estructural sin datos que la sostengan: el túbulo S3 se necrosa cuando la hipoperfusión se mantiene horas o días. Con un efecto puramente hemodinámico la creatinina revierte al suspender el fármaco y reponer volumen."
        }
      ],
      correct: 2,
      rule: "Si la historia trae un AINE y un riñón hipoperfundido, el mecanismo es aferente: inhibición de prostaglandinas, no lesión tubular."
    },
    {
      id: "22-1",
      stem: "Una mujer de 40 años presenta vómitos incoercibles durante tres días, taquicardia e hipotensión ortostática. La creatinina es de 2,1 mg/dL y la orina tiene sodio de 6 mEq/L con osmolaridad de 640 mOsm/kg. ¿Cuál es el diagnóstico más probable?",
      options: [
        {
          t: "Insuficiencia renal aguda prerrenal por hipoperfusión.",
          why: "La clave es la orina: sodio urinario menor de 10 mEq/L y osmolaridad mayor de 500 mOsm/kg significan que un túbulo sano reabsorbe sodio y agua. Con la clínica de pérdida de volumen, el problema está antes del riñón."
        },
        {
          t: "Necrosis tubular aguda establecida por isquemia prolongada.",
          why: "Supones que tres días de vómitos ya necrosaron el túbulo. Si el túbulo estuviera lesionado no podría conservar sodio ni concentrar la orina a 640 mOsm/kg; ese es justamente el dato que descarta la NTA."
        },
        {
          t: "Insuficiencia renal aguda postrenal por obstrucción ureteral bilateral.",
          why: "No hay ningún dato de obstrucción: ni cólico, ni globo vesical, ni anuria. Además la obstrucción no explica una orina tan concentrada y con sodio tan bajo en las primeras horas."
        },
        {
          t: "Nefritis intersticial aguda por fármacos nefrotóxicos.",
          why: "Inventas un fármaco que la historia no menciona. La nefritis intersticial es intrínseca y suele acompañarse de fiebre, eosinofilia y alteraciones urinarias; aquí todo apunta a hipovolemia."
        }
      ],
      correct: 0,
      rule: "Con sodio urinario bajo y orina concentrada, el parénquima conserva su función: busca la causa antes del riñón."
    },
    {
      id: "22-2",
      stem: "Un hombre de 58 años, de 80 kg, ingresa por deshidratación grave con creatinina sérica de 2,0 mg/dL. Aplicando la fórmula de Cockcroft-Gault, ¿cuál es su aclaramiento de creatinina y su estadio?",
      options: [
        {
          t: "38,7 mL/min, estadio 3",
          why: "Es 45,56 multiplicado por 0,85. Ese factor corrige la masa muscular menor de la mujer; aplicarlo a un varón subestima el filtrado y desplaza el estadio."
        },
        {
          t: "22,8 mL/min, estadio 4",
          why: "Llegaste a este número dividiendo dos veces entre la creatinina. La fórmula lleva el 72 y la creatinina en el denominador una sola vez; repetirla reduce el filtrado a la mitad."
        },
        {
          t: "91,1 mL/min, estadio 1",
          why: "Aquí dividiste 82 × 80 solo entre 72 y olvidaste la creatinina en el denominador. Con creatinina de 2,0 el filtrado no puede ser normal: eso describiría a un riñón sano."
        },
        {
          t: "45,6 mL/min, estadio 3",
          why: "(140 − 58) = 82; 82 × 80 = 6560; 72 × 2,0 = 144; 6560 / 144 = 45,56 mL/min. Al ser varón no se aplica el 0,85, y 45,56 cae en el rango 30-59, que es el estadio 3."
        }
      ],
      correct: 3,
      rule: "Primero resta la edad, luego multiplica por el peso, y solo al final divide entre 72 por la creatinina; el 0,85 es exclusivo de mujeres."
    },
    {
      id: "22-3",
      stem: "Una mujer de 70 años, de 55 kg, cursa con insuficiencia renal aguda tras un episodio de hipotensión. Su creatinina sérica es de 1,6 mg/dL. ¿Cuál es su aclaramiento de creatinina y su estadio?",
      options: [
        {
          t: "33,4 mL/min, estadio 3",
          why: "Es el resultado sin aplicar el factor 0,85. Al ser mujer debes multiplicar, porque su menor masa muscular produce menos creatinina para el mismo filtrado."
        },
        {
          t: "28,4 mL/min, estadio 4",
          why: "(140 − 70) × 55 = 3850; 72 × 1,6 = 115,2; 3850 / 115,2 = 33,42; por ser mujer 33,42 × 0,85 = 28,41 mL/min. Ese valor entra en 15-29, que es el estadio 4."
        },
        {
          t: "39,3 mL/min, estadio 3",
          why: "Dividiste entre 0,85 en lugar de multiplicar. El factor reduce el resultado final, porque corrige una producción de creatinina menor; invertirlo infla el filtrado."
        },
        {
          t: "45,5 mL/min, estadio 3",
          why: "Es 3850 / 72 × 0,85: dejaste fuera la creatinina sérica. Con creatinina de 1,6 el filtrado tiene que ser menor que en una persona con creatinina de 1,0."
        }
      ],
      correct: 1,
      rule: "En la mujer el último paso es multiplicar por 0,85; si el número te queda igual al de un varón con los mismos datos, revisaste mal."
    },
    {
      id: "22-4",
      stem: "Un hombre de 52 años con shock séptico e hipotensión prolongada sigue oligúrico a las 48 horas, aunque la presión arterial ya se normalizó. La biopsia muestra células tubulares desprendidas en el segmento S3. ¿Qué mecanismo explica que persista la oliguria?",
      options: [
        {
          t: "Hipovolemia efectiva persistente con activación del eje renina-angiotensina.",
          why: "Te quedas en la fase prerrenal. La perfusión ya se restituyó: una causa puramente hemodinámica revierte en menos de 24 horas, y este paciente sigue oligúrico al doble de tiempo con lesión demostrada."
        },
        {
          t: "Obstrucción ureteral bilateral por coágulos o cálculos.",
          why: "Cambias de compartimiento sin evidencia: no hay anuria, globo vesical ni imagen que sugiera obstrucción de la vía excretora. El hallazgo de la biopsia es tubular, dentro del parénquima."
        },
        {
          t: "Obstrucción tubular por células desprendidas y proteína de Tamm-Horsfall.",
          why: "Las células necróticas del túbulo se desprenden, se adhieren a la proteína de Tamm-Horsfall y forman cilindros. Esa obstrucción eleva la presión intratubular y frena la salida de orina aunque haya presión arterial normal."
        },
        {
          t: "Déficit de angiotensina II con dilatación de la arteriola eferente.",
          why: "Inviertes el sistema: en la NTA la angiotensina II está elevada. Un déficit de angiotensina II dilataría la eferente y bajaría el filtrado, pero no explica la biopsia ni la presión ya normalizada."
        }
      ],
      correct: 2,
      rule: "Si la oliguria sigue después de corregir la presión, piensa dentro del túbulo: cilindros de células y Tamm-Horsfall, no hipovolemia."
    },
    {
      id: "22-5",
      stem: "Un modelo experimental de isquemia renal muestra, en la fase de vasoconstricción, una caída del flujo cercana al 50% y aumento de las resistencias vasculares. ¿Qué desequilibrio de mediadores del endotelio lesionado explica ese hallazgo?",
      options: [
        {
          t: "Aumento de endotelina-1 y tromboxano A2 con baja respuesta vasodilatadora.",
          why: "El endotelio dañado libera sobre todo vasoconstrictores y pierde la respuesta a acetilcolina, bradicinina y óxido nítrico. Predominar la constricción y faltar la relajación explica a la vez la caída del flujo y el alza de resistencias."
        },
        {
          t: "Aumento de óxido nítrico y bradicinina, con mayor respuesta a la acetilcolina vascular.",
          why: "Describes el perfil contrario al de la isquemia. Si el óxido nítrico y la bradicinina aumentaran, el vaso se dilataría y el flujo subiría, no caería al 50%."
        },
        {
          t: "Disminución de endotelina-1 y adenosina, con aumento de la prostaciclina.",
          why: "Inviertes los mediadores. La endotelina-1 y la adenosina aumentan en esta fase, y la prostaciclina no alcanza para contrarrestar la vasoconstricción."
        },
        {
          t: "Aumento del péptido natriurético auricular, con vasodilatación de la eferente.",
          why: "Introduces un mediador que pertenece a la regulación del volumen, no a esta fase. Además su efecto sería vasodilatador y reduciría las resistencias, lo contrario del dato del modelo."
        }
      ],
      correct: 0,
      rule: "En la fase vasoconstrictora de la NTA predominan endotelina-1, angiotensina II y tromboxano A2, y la respuesta vasodilatadora está apagada."
    },
    {
      id: "22-6",
      stem: "Un hombre de 74 años con hipertrofia prostática presenta anuria de 18 horas y creatinina de 3,8 mg/dL; tras colocar la sonda vesical salen 1200 mL. Si la obstrucción hubiera persistido durante semanas, ¿qué evolución esperarías?",
      options: [
        {
          t: "Resolución espontánea por autorregulación del flujo renal y de la presión de perfusión.",
          why: "Confías la salida a la autorregulación, que solo ajusta el tono vascular. No puede vencer un obstáculo mecánico en la vía urinaria: sin desobstruir, la orina sigue retenida."
        },
        {
          t: "Transformación en insuficiencia renal intrínseca por daño del parénquima.",
          why: "La presión retrógrada sostenida durante semanas lesiona el parénquima y el cuadro deja de ser puramente obstructivo. El riñón pierde capacidad de recuperarse aunque se libere la vía."
        },
        {
          t: "Poliuria permanente por pérdida de la capacidad de concentrar.",
          why: "Confundes con la enfermedad crónica. La obstrucción produce oliguria o anuria; la poliuria por pérdida de concentración es el primer síntoma de la lesión crónica de las nefronas, no de la obstrucción aguda."
        },
        {
          t: "Glomerulonefritis proliferativa con proteinuria nefrótica.",
          why: "Buscas un daño inmunitario donde solo hay mecánica. La obstrucción no inflama los glomérulos de esa forma; el daño que produce es tubulointersticial por presión."
        }
      ],
      correct: 1,
      rule: "Una obstrucción sostenida deja de ser postrenal: si el parénquima se daña, el cuadro se vuelve intrínseco e irreversible."
    },
    {
      id: "22-7",
      stem: "Una mujer de 30 años con gastroenteritis aguda tiene creatinina de 1,9 mg/dL (basal 0,7) y no recibió nefrotóxicos. Tras rehidratación enérgica, a las 20 horas la creatinina es de 0,8 mg/dL. ¿Qué mecanismo explica esta recuperación tan rápida?",
      options: [
        {
          t: "Regeneración del epitelio tubular después de una necrosis tubular aguda.",
          why: "La regeneración existe, pero tarda semanas: requiere reparación del ADN, migración y proliferación celular. No puede explicar una creatinina que vuelve a la basal en 20 horas."
        },
        {
          t: "Alivio espontáneo de una obstrucción intermitente.",
          why: "Supones un obstáculo que nadie buscó. No hay cólico, globo vesical ni anuria, y la recuperación coincidió exactamente con la reposición de volumen, no con el paso del tiempo."
        },
        {
          t: "Resolución de una glomerulonefritis aguda al reponer volumen.",
          why: "La glomerulonefritis es un daño intrínseco e inmunitario: no revierte con suero en horas. Además faltan hematuria, hipertensión y proteinuria, que la historia no menciona."
        },
        {
          t: "Hipoperfusión sin necrosis, con reversión al restituir la perfusión.",
          why: "Sin necrosis no hay tejido que reparar: al volver el flujo, el FG se recupera y la retención nitrogenada cede antes de 24 horas. Es el comportamiento que define la forma prerrenal."
        }
      ],
      correct: 3,
      rule: "Si la creatinina cae en menos de 24 horas al reponer volumen, era prerrenal; la NTA tarda semanas en recuperarse."
    },
    {
      id: "22-8",
      stem: "Una mujer de 66 años con insuficiencia renal aguda oligúrica de 10 días presenta hemoglobina de 9 g/dL (antes normal), pH de 7,25 con bicarbonato bajo y potasio de 5,9 mEq/L. ¿Qué mecanismos explican la acidosis y la anemia?",
      options: [
        {
          t: "Falta de amoniaco y de secreción de H+, junto con déficit de eritropoyetina.",
          why: "El riñón lesionado no fabrica amoniaco ni secreta hidrogeniones, así que el ácido se acumula y el bicarbonato baja. La anemia aparece después de una semana porque falta la eritropoyetina que estimula la médula ósea."
        },
        {
          t: "Pérdida de bicarbonato en heces, junto con hemólisis inmunitaria y reticulocitosis.",
          why: "Buscas la causa fuera del riñón. No hay diarrea en la historia y la hemólisis daría reticulocitosis; aquí la anemia es hiporregenerativa por falta de eritropoyetina, y la acidosis es renal."
        },
        {
          t: "Mayor síntesis de amoniaco y exceso de eritropoyetina.",
          why: "Inviertes los dos mecanismos. En la IRA el amoniaco está disminuido y la eritropoyetina también; con exceso de ambas el pH subiría y la hemoglobina no caería."
        },
        {
          t: "Exceso de excreción de H+ y déficit de hierro en la dieta.",
          why: "Si se excretara más H+ tendríamos alcalosis, no un pH de 7,25. La anemia de la IRA no depende del hierro de la dieta sino de la falta de eritropoyetina."
        }
      ],
      correct: 0,
      rule: "Acidosis en la IRA: menos amoniaco y menos secreción de H+. Anemia que aparece tras una semana: falta eritropoyetina."
    },
    {
      id: "22-9",
      stem: "Un hombre de 45 años con creatinina basal de 1,0 mg/dL desarrolla rabdomiólisis. En 48 horas la creatinina llega a 3,2 mg/dL y la diuresis se mantiene en 0,3 mL/kg/h durante 24 horas. ¿Qué estadio AKIN presenta?",
      options: [
        {
          t: "AKIN 1, porque la creatinina subió solo 2,2 mg/dL sobre la basal",
          why: "Miras el ascenso absoluto y no el relativo. El estadio 1 acepta hasta 200% del basal, y este paciente está en 320%; además la oliguria ya lleva 24 horas y no 6."
        },
        {
          t: "AKIN 2, porque el porcentaje no supera 300%",
          why: "Calculas mal el porcentaje: 3,2 / 1,0 = 3,2, es decir 320%. El estadio 2 llega hasta 300% y su criterio de diuresis es de 12 horas, no de 24."
        },
        {
          t: "AKIN 3, porque supera 300% y la oliguria dura 24 h",
          why: "3,2 dividido para 1,0 da 320%, que pasa el umbral de 300% del estadio 3. A eso se suma una diuresis menor de 0,5 mL/kg/h durante 24 horas, que es el otro criterio del mismo estadio."
        },
        {
          t: "Ningún estadio, porque falta un segundo control",
          why: "Exiges un requisito que los criterios no piden: basta una creatinina con su basal conocido o el criterio de diuresis. Aquí se cumplen los dos a la vez."
        }
      ],
      correct: 2,
      rule: "Para estadificar divide la creatinina actual entre la basal; 320% es estadio 3, y la oliguria de 24 horas lo confirma."
    },
    {
      id: "22-10",
      stem: "Un paciente de 70 kg orina 180 mL durante 6 horas tras una cirugía mayor; la creatinina todavía no se ha modificado. Al aplicar el criterio de diuresis, ¿qué conclusión es correcta?",
      options: [
        {
          t: "0,86 mL/kg/h, normal para todos los sistemas de clasificación",
          why: "Dividiste entre 3 horas en lugar de 6. El cálculo correcto usa todo el período: 180 / (70 × 6) = 0,43 mL/kg/h, que está por debajo del umbral de 0,5."
        },
        {
          t: "2,57 mL/kg/h, poliuria que descarta la oliguria",
          why: "Dividiste 180 entre 70 y olvidaste el tiempo. Sin las horas el resultado no es una tasa; la diuresis se mide siempre por kilogramo y por hora."
        },
        {
          t: "Ninguno, porque primero debe subir la creatinina",
          why: "Crees que los criterios son consecutivos. Son alternativos: se cumple AKIN o RIFLE con la creatinina o con la diuresis, y el de diuresis puede aparecer antes."
        },
        {
          t: "0,43 mL/kg/h, menor de 0,5, cumple AKIN 1 y RIFLE R",
          why: "180 / (70 × 6) = 0,43 mL/kg/h, por debajo de 0,5 durante 6 horas. Eso ya llena el criterio de diuresis del estadio 1 de AKIN y de la R de RIFLE, aunque la creatinina no haya cambiado."
        }
      ],
      correct: 3,
      rule: "La diuresis siempre se calcula como mL divididos entre peso y horas; si el resultado es menor de 0,5, el criterio se cumple."
    },
    {
      id: "22-11",
      stem: "Un hombre de 70 años, de 60 kg, con enfermedad renal crónica (creatinina basal 2,9 mg/dL, potasio 4,9 mEq/L) presenta tras tres días de vómitos creatinina de 6,8 mg/dL y potasio de 6,3 mEq/L. ¿Qué mecanismo explica el aumento brusco del potasio?",
      options: [
        {
          t: "Retención de potasio, porque el 90% se elimina por las heces",
          why: "Inviertes la vía de eliminación: el riñón elimina el 90% del potasio y solo el 10% va por las heces. Si el riñón falla, la vía principal se cierra y el potasio sube."
        },
        {
          t: "Caída del filtrado de 20 a 9 mL/min, por debajo del rango que mantiene el potasio",
          why: "Su aclaramiento basal era 70 × 60 / (72 × 2,9) = 20,1 mL/min y ahora es 4200 / (72 × 6,8) = 8,6 mL/min. El potasio se sostiene hasta un filtrado de 10 a 15 mL/min; por debajo, la regulación ya no alcanza."
        },
        {
          t: "Hipercalcemia por exceso de calcitriol, que saca potasio de la célula",
          why: "En la IRA el calcio suele estar bajo, no alto, y el calcitriol no mueve el potasio al extracellular. La hiperpotasemia depende de la excreción renal insuficiente."
        },
        {
          t: "Hiperfiltración de las nefronas remanentes, con mayor excreción de potasio por orina",
          why: "El filtrado cayó, no subió: la creatinina se duplicó con creces. La hiperfiltración compensadora describe a un riñón que aún mantiene la función, no a uno en falla aguda."
        }
      ],
      correct: 1,
      rule: "El potasio se mantiene hasta un filtrado de 10-15 mL/min; si calculas un filtrado menor y el potasio sube, el mecanismo es renal, no dietético."
    }
  ]
}
);
