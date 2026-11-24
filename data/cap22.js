// Chapter 22: Acute kidney injury (IRA). Source: Vinueza, Fisiopatología Humana, book pp. 523-541.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 22,
  weight: 5,
  title: "22. Insuficiencia renal aguda",
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
      "stem": "Un hombre de 68 años con insuficiencia cardiaca y cuadro de diarrea de 4 días toma ibuprofeno 600 mg cada 8 horas por dolor lumbar. Acude con mucosas secas, presión arterial 92/58 mmHg, diuresis de 300 mL en 24 h y creatinina de 2,4 mg/dL (basal 1,0). ¿Qué efecto del fármaco sobre la hemodinamia glomerular contribuye de forma directa a la caída del filtrado?",
      "options": [
        {
          "t": "Vasodilatación de la arteriola aferente por exceso de prostaglandinas, con hiperfiltración y mayor presión hidráulica glomerular",
          "why": "Incorrecto. Los AINES inhiben la síntesis de prostaglandinas, por lo que no hay exceso de ellas ni vasodilatación aferente."
        },
        {
          "t": "Vasoconstricción de la arteriola eferente por activación directa de la angiotensina II, que eleva la presión del capilar y el filtrado",
          "why": "Incorrecto. El efecto de los AINES no pasa por activar la angiotensina II, y la constricción eferente tiende a sostener el filtrado, no a reducirlo."
        },
        {
          "t": "Vasoconstricción de la arteriola aferente con vasodilatación de la eferente, por inhibición de prostaglandinas y menor flujo plasmático renal",
          "why": "Correcta. Es el mecanismo descrito por el libro: sin prostaglandinas cae el flujo plasmático renal y el filtrado, sobre un riñón ya hipoperfundido por la deshidratación."
        },
        {
          "t": "Lesión tubular directa del segmento S3 por el fármaco, con obstrucción por células desprendidas y proteína de Tamm-Horsfall",
          "why": "Incorrecto. El libro atribuye el efecto de los AINES a la hemodinamia renal (forma prerrenal), no a necrosis tubular directa."
        }
      ],
      "correct": 2
    },
    {
      "stem": "Una mujer de 40 años tiene vómitos incoercibles durante 3 días. Ingresa con taquicardia, hipotensión ortostática y creatinina de 2,1 mg/dL. La orina muestra sodio de 6 mEq/L y osmolaridad de 640 mOsm/kg de H2O. ¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "t": "IRA prerrenal: riñón sano que conserva sodio y agua ante la hipoperfusión por la pérdida de volumen",
          "why": "Correcta. Según el libro, la forma prerrenal se caracteriza por sodio urinario < 10 mEq/L y osmolaridad urinaria > 500 mOsm/kg."
        },
        {
          "t": "Necrosis tubular aguda establecida, con túbulo lesionado que no logra concentrar la orina ni retener sodio tras la hipovolemia",
          "why": "Incorrecta. El patrón de sodio 6 mEq/L y osmolaridad 640 indica túbulos funcionantes; en la NTA el túbulo lesionado no conserva sodio ni concentra."
        },
        {
          "t": "IRA postrenal por obstrucción ureteral bilateral, con oliguria y orina concentrada por retención de solutos",
          "why": "Incorrecta. Nada orienta a obstrucción; la clínica de hipovolemia (vómitos, taquicardia, hipotensión ortostática) apunta a hipoperfusión."
        },
        {
          "t": "Nefritis intersticial por fármacos, con daño inflamatorio del intersticio y pérdida de la capacidad de concentrar",
          "why": "Incorrecta. No hay fármaco en la historia, y el daño intersticial es intrínseco; no explica una orina tan concentrada tras vómitos."
        }
      ],
      "correct": 0
    },
    {
      "stem": "Un hombre de 58 años, 80 kg, ingresa por deshidratación grave. Su creatinina sérica es de 2,0 mg/dL. Con la fórmula de aclaramiento de creatinina del libro, ¿cuál es su filtrado estimado y su estadio según la tabla de filtrado glomerular?",
      "options": [
        {
          "t": "Aproximadamente 91,1 mL/min, estadio 1",
          "why": "Incorrecto. Es 6560 / 72: se olvida dividir entre la creatinina sérica."
        },
        {
          "t": "Aproximadamente 22,8 mL/min, estadio 4",
          "why": "Incorrecto. Es 45,56 / 2: se divide dos veces entre la creatinina."
        },
        {
          "t": "Aproximadamente 38,7 mL/min, estadio 3",
          "why": "Incorrecto. Es 45,56 × 0,85: se aplica a un hombre el factor que el libro reserva para mujeres."
        },
        {
          "t": "Aproximadamente 45,6 mL/min, estadio 3",
          "why": "Correcta. (140 − 58) × 80 / (72 × 2,0) = 82 × 80 / 144 = 6560 / 144 = 45,56 mL/min; es un hombre, no se multiplica por 0,85, y 30-59 es estadio 3."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Una mujer de 70 años, 55 kg, con IRA tras un episodio de hipotensión, tiene creatinina sérica de 1,6 mg/dL. ¿Cuál es su aclaramiento de creatinina según la fórmula del libro y qué estadio le corresponde?",
      "options": [
        {
          "t": "Aproximadamente 33,4 mL/min, estadio 3",
          "why": "Incorrecto. Es el resultado sin el factor 0,85; al ser mujer debe aplicarse y el valor baja a estadio 4."
        },
        {
          "t": "Aproximadamente 28,4 mL/min, estadio 4",
          "why": "Correcta. (140 − 70) × 55 / (72 × 1,6) = 3850 / 115,2 = 33,42; × 0,85 por ser mujer = 28,41 mL/min, que cae en 15-29 (estadio 4)."
        },
        {
          "t": "Aproximadamente 39,3 mL/min, estadio 3",
          "why": "Incorrecto. Corresponde a dividir entre 0,85 en lugar de multiplicar."
        },
        {
          "t": "Aproximadamente 45,5 mL/min, estadio 3",
          "why": "Incorrecto. Es 3850 / 72 × 0,85: se olvida dividir entre la creatinina sérica."
        }
      ],
      "correct": 1
    },
    {
      "stem": "Un hombre de 52 años sufre un shock séptico con hipotensión prolongada. Tras restablecer la presión arterial, a las 48 horas continúa oligúrico con creatinina en ascenso. La biopsia muestra células epiteliales tubulares desprendidas en el segmento S3 del túbulo proximal. ¿Qué mecanismo explica mejor que la oliguria persista a pesar de normalizar la perfusión?",
      "options": [
        {
          "t": "Obstrucción tubular por células desprendidas unidas a proteína de Tamm-Horsfall, con aumento de la presión intratubular",
          "why": "Correcta. Es lo descrito en la fase de iniciación y extensión: la obstrucción eleva la presión intratubular y reduce el volumen urinario."
        },
        {
          "t": "Persistencia de la hipovolemia efectiva con activación del eje renina-angiotensina y reabsorción tubular conservada",
          "why": "Incorrecta. Ya se restituyó la perfusión; si la causa fuera solo prerrenal, el cuadro revertiría en menos de 24 h."
        },
        {
          "t": "Obstrucción ureteral bilateral por coágulos o cálculos, con dilatación de la vía excretora y presión retrógrada",
          "why": "Incorrecta. No hay datos de obstrucción de la vía excretora; el hallazgo histológico es tubular."
        },
        {
          "t": "Déficit de angiotensina II, que dilata la arteriola eferente y reduce la reabsorción de sodio en el túbulo proximal",
          "why": "Incorrecta. No es el mecanismo descrito; en la NTA lo central es la lesión y obstrucción tubular, con vasoconstricción por mediadores y angiotensina II aumentada."
        }
      ],
      "correct": 0
    },
    {
      "stem": "En un modelo de isquemia renal, el estudio de la microcirculación en la fase de vasoconstricción muestra caída de alrededor del 50% del flujo y aumento de las resistencias vasculares. ¿Qué desequilibrio de mediadores del endotelio lesionado explica este hallazgo?",
      "options": [
        {
          "t": "Aumento de óxido nítrico y bradicinina con mayor respuesta a la acetilcolina, que dilata la arteriola aferente y baja las resistencias",
          "why": "Incorrecto. Es el perfil contrario: en la NTA la respuesta vasodilatadora está disminuida."
        },
        {
          "t": "Disminución de endotelina-1 y adenosina con aumento de prostaciclina, lo que produce vasodilatación aferente y mayor flujo",
          "why": "Incorrecto. La endotelina y la adenosina están aumentadas en la vasoconstricción, y el flujo cae cerca de 50%."
        },
        {
          "t": "Aumento de endotelina-1, angiotensina II y tromboxano A2, con baja respuesta a acetilcolina, bradicinina y óxido nítrico",
          "why": "Correcta. El libro describe este predominio de vasoconstrictores y baja respuesta vasodilatadora en el endotelio lesionado."
        },
        {
          "t": "Aumento del péptido natriurético auricular con vasodilatación eferente, que reduce la presión capilar y el filtrado",
          "why": "Incorrecto. El péptido natriurético no es el mediador descrito en esta fase; el libro cita endotelina-1, angiotensina II, tromboxano A2, prostaglandina H2, leucotrienos y adenosina."
        }
      ],
      "correct": 2
    },
    {
      "stem": "Un hombre de 74 años con hipertrofia prostática consulta por anuria de 18 horas, distensión suprapúbica y creatinina de 3,8 mg/dL. Se coloca sonda vesical con salida de 1200 mL. Si la obstrucción hubiera persistido por semanas sin tratamiento, ¿qué evolución plantea el libro?",
      "options": [
        {
          "t": "Resolución espontánea por mecanismos de autorregulación, ya que el origen es prerrenal y el parénquima está sano",
          "why": "Incorrecta. La obstrucción de la vía excretora es postrenal, no prerrenal, y no se corrige por autorregulación hemodinámica."
        },
        {
          "t": "Evolución a hipervolemia con poliuria permanente por pérdida de la capacidad de concentrar, sin daño del parénquima",
          "why": "Incorrecta. La obstrucción causa oliguria o anuria, no poliuria; el libro no describe poliuria en la obstrucción."
        },
        {
          "t": "Evolución a glomerulonefritis proliferativa con proteinuria en rango nefrótico y hematuria",
          "why": "Incorrecta. El libro describe la evolución a IRA intrínseca por daño del parénquima, no una glomerulonefritis."
        },
        {
          "t": "Transformación en IRA intrínseca por daño del parénquima si la obstrucción persiste mucho tiempo",
          "why": "Correcta. El libro señala que, si la obstrucción persiste por periodos prolongados, el paciente desarrollará IRA intrínseca."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Una mujer de 30 años presenta gastroenteritis aguda y creatinina de 1,9 mg/dL (basal 0,7). No tiene fármacos nefrotóxicos. Se rehidrata de manera enérgica y a las 20 horas la creatinina es de 0,8 mg/dL. ¿Qué concluye mejor el caso?",
      "options": [
        {
          "t": "Necrosis tubular aguda en fase de reparación, con regeneración epitelial que requiere varias semanas para normalizar la creatinina",
          "why": "Incorrecta. La recuperación en horas no es compatible con necrosis tubular; la fase de reparación es lenta."
        },
        {
          "t": "IRA prerrenal: sin necrosis tisular, la retención nitrogenada revierte antes de 24 h de lograr una perfusión adecuada",
          "why": "Correcta. Es la regla del libro para la forma prerrenal."
        },
        {
          "t": "IRA postrenal por obstrucción intermitente, con alivio espontáneo del obstáculo y diuresis conservada entre episodios",
          "why": "Incorrecta. No hay evidencia de obstrucción y el cuadro responde a volumen."
        },
        {
          "t": "Glomerulonefritis aguda con resolución espontánea, porque el daño inflamatorio glomerular cede al reponer el volumen",
          "why": "Incorrecta. La glomerulonefritis es una causa intrínseca y no revierte con la rehidratación en horas."
        }
      ],
      "correct": 1
    },
    {
      "stem": "Una mujer de 66 años cursa con IRA oligúrica de 10 días de evolución. Presenta hemoglobina de 9 g/dL (previa normal), pH de 7,25 con bicarbonato bajo y potasio de 5,9 mEq/L. ¿Qué par de mecanismos explica la acidosis y la anemia?",
      "options": [
        {
          "t": "Acidosis por pérdida de bicarbonato en heces con compensación respiratoria; anemia por hemólisis inmunitaria",
          "why": "Incorrecta. No son los mecanismos descritos para la IRA: la acidosis es renal, por menor excreción de H+."
        },
        {
          "t": "Acidosis por incapacidad de sintetizar amoniaco y secretar H+; anemia por déficit de eritropoyetina",
          "why": "Correcta. Ambos mecanismos son los que describe el libro, y la anemia aparece después de una semana de IRA."
        },
        {
          "t": "Acidosis por mayor síntesis renal de amoniaco y mayor acidez titulable; anemia por exceso de eritropoyetina",
          "why": "Incorrecta. La síntesis de amoniaco y la acidez titulable están disminuidas, y la eritropoyetina es deficiente."
        },
        {
          "t": "Acidosis por exceso de excreción de H+ con retención de fosfato; anemia por déficit de hierro de la dieta",
          "why": "Incorrecta. En la IRA se retiene H+ por menor excreción, y la anemia se debe a la falta de eritropoyetina, no al hierro de la dieta."
        }
      ],
      "correct": 1
    },
    {
      "stem": "Un hombre de 45 años tiene creatinina basal de 1,0 mg/dL. Tras una rabdomiólisis, la creatinina alcanza 3,2 mg/dL en 48 horas y la diuresis es de 0,3 mL/kg/h durante 24 horas. Según los criterios AKIN descritos en el libro, ¿qué estadio presenta?",
      "options": [
        {
          "t": "Estadio 1: la creatinina subió más de 0,3 mg/dL y la diuresis fue < 0,5 mL/kg/h por 6 h",
          "why": "Incorrecto. El estadio 1 es un aumento ≥ 0,3 mg/dL o 150-200%; aquí supera 300% y la diuresis baja dura 24 h."
        },
        {
          "t": "Estadio 2: la creatinina llegó a 2-3 veces el basal y la diuresis fue < 0,5 mL/kg/h por 12 h",
          "why": "Incorrecto. El estadio 2 es de más de 200 hasta 300%; aquí 3,2 / 1,0 = 320% está por encima de ese rango y la oliguria dura 24 h."
        },
        {
          "t": "Sin criterios AKIN: la creatinina no llegó a 4 mg/dL y una diuresis de 0,3 mL/kg/h por 24 h no cuenta",
          "why": "Incorrecto. Cumple ampliamente tanto el criterio de creatinina como el de diuresis; 4 mg/dL es solo una de las alternativas del estadio 3."
        },
        {
          "t": "Estadio 3: la creatinina subió a 320% del basal (> 300%) y la diuresis fue < 0,5 mL/kg/h por 24 h",
          "why": "Correcta. 3,2 / 1,0 = 320% (> 300%) y diuresis < 0,5 mL/kg/h por 24 h: ambos criterios del estadio 3."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Un paciente de 70 kg orina 180 mL durante 6 horas tras una cirugía mayor. La creatinina aún no ha cambiado. ¿Qué interpretación es correcta según los criterios del libro?",
      "options": [
        {
          "t": "Diuresis de 0,43 mL/kg/h, menor de 0,5 por 6 h: cumple AKIN 1 y RIFLE R, y el libro pide cautela al usar el criterio de diuresis solo",
          "why": "Correcta. 180 / (70 × 6) = 0,43 mL/kg/h < 0,5 durante 6 h; el libro da 6 h para AKIN 1 y RIFLE R, y señala que el criterio de diuresis (también en KDIGO) es debatido, sin precisar una duración."
        },
        {
          "t": "Diuresis de 0,86 mL/kg/h, mayor de 0,5: no cumple el criterio de diuresis de ningún sistema y se considera normal",
          "why": "Incorrecta. Resulta de dividir entre 3 h en lugar de 6; el valor real es 0,43."
        },
        {
          "t": "Diuresis de 2,57 mL/kg/h, que indica poliuria y descarta oliguria pese a la cirugía mayor",
          "why": "Incorrecta. Es el resultado de dividir 180 entre 70 sin tener en cuenta el tiempo y mezclar unidades."
        },
        {
          "t": "Sin criterio todavía: la creatinina no ha cambiado y AKIN, RIFLE y KDIGO exigen primero que ella suba",
          "why": "Incorrecta. Los criterios de diuresis son independientes de los de creatinina; basta con uno."
        }
      ],
      "correct": 0
    },
    {
      "stem": "Un hombre de 70 años, 60 kg, tiene enfermedad renal crónica con creatinina basal de 2,9 mg/dL y potasio de 4,9 mEq/L. Tras 3 días de vómitos y poca ingesta presenta creatinina de 6,8 mg/dL y potasio de 6,3 mEq/L. ¿Qué explica mejor el cambio brusco del potasio?",
      "options": [
        {
          "t": "El 90% del potasio se elimina por las heces, así que los vómitos y la poca ingesta lo retienen y elevan su concentración plasmática",
          "why": "Incorrecta. Según el libro, el 90% del potasio se elimina por el riñón y solo el 10% por las heces."
        },
        {
          "t": "El filtrado aumentó por hiperfiltración de las nefronas remanentes, lo que arrastra potasio desde el intersticio hacia el plasma",
          "why": "Incorrecta. El filtrado cayó; la hiperfiltración es de las nefronas remanentes, pero no explica la hiperpotasemia aguda."
        },
        {
          "t": "El filtrado pasó de unos 20 a unos 9 mL/min: la regulación del potasio, mantenida con FG de 10-15 mL/min, se agota al caer por debajo",
          "why": "Correcta. Cl basal = 70 × 60 / (72 × 2,9) = 20,1 mL/min; Cl actual = 4200 / (72 × 6,8) = 8,6 mL/min. El libro dice que el potasio se mantiene estable con FG de 10-15 mL/min; con 8,6 queda por debajo de ese rango y la IRA superpuesta supera la reserva."
        },
        {
          "t": "La hiperpotasemia es consecuencia de hipercalcemia por exceso de calcitriol, que desplaza el potasio fuera de la célula",
          "why": "Incorrecta. El libro describe hipocalcemia en la IRA y la hiperpotasemia depende de la menor excreción renal."
        }
      ],
      "correct": 2
    }
  ]
}
);
