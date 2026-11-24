// Chapter 23: Chronic kidney disease (ERC). Source: Vinueza, Fisiopatología Humana, book pp. 542-566.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 23,
  weight: 4,
  title: "23. Insuficiencia renal crónica",
  summary: `
  <h2>1. Qué falla</h2>
  <p>La enfermedad renal crónica (ERC) es la pérdida <b>progresiva e irreversible</b> de nefronas: daño estructural o funcional, o FG &lt; 60 mL/min/1,73 m<sup>2</sup> durante más de tres meses. Cuando se llega al estadio terminal se requiere diálisis o trasplante. Prevalencia global cercana al 10%; en Ecuador, 11% de los adultos. Las causas más comunes son <b>diabetes mellitus (30%), hipertensión arterial (25%) y glomerulopatías (20%)</b>. Otras: genéticas (agenesia, hipoplasia, síndrome poliquístico, bajo peso al nacer), tubulointersticiales, isquemia, lupus, amiloidosis y también la IRA previa.</p>
  <p>El riñón hace mucho más que filtrar: regula agua, electrolitos y pH, produce <b>eritropoyetina</b>, <b>renina</b> y activa la vitamina D a <b>calcitriol</b>, y hace gluconeogénesis. Cada función perdida produce una manifestación.</p>

  <h2>2. Clasificación por filtrado glomerular</h2>
  <table>
    <tr><th>Estadio</th><th>FG (mL/min/1,73 m<sup>2</sup>)</th></tr>
    <tr><td>1</td><td>&gt; 90</td></tr>
    <tr><td>2</td><td>60-89</td></tr>
    <tr><td>3</td><td>30-59</td></tr>
    <tr><td>4</td><td>15-29</td></tr>
    <tr><td>5</td><td>&lt; 15 (&lt; 10 en diabéticos, según el libro)</td></tr>
  </table>
  <p>Marcadores de daño: albuminuria &gt; 30 mg/24 h o cociente albúmina/creatinina &gt; 30 mg/g (normal &lt; 30), sedimento anormal, alteraciones hidroelectrolíticas. Urea normal según el libro: 12-54 mg/dL.</p>

  <h2>3. Cálculo del FG (misma fórmula del capítulo 22)</h2>
  <p>Cl<sub>Cr</sub> = [(140 − edad) × kg] / (72 × creatinina mg/dL); × 0,85 si es mujer. El caso clínico del libro: 65 años, 62 kg, creatinina 7,1 mg/dL → (75 × 62) / (72 × 7,1) = 4650 / 511,2 = <b>9,09 mL/min</b> → estadio 5.</p>
  <p>Si en estadios tempranos la creatinina aún no sube, es porque las nefronas restantes compensan (ver sección 4); el libro estima que la creatinina se eleva sobre el basal cuando se ha perdido más de <b>dos tercios</b> de las nefronas.</p>

  <h2>4. Cómo progresa: la compensación que daña</h2>
  <ol>
    <li>Se pierden nefronas (cualquier causa). La progresión sigue <b>independiente de la causa inicial</b>.</li>
    <li>Las nefronas restantes <b>hiperfiltran</b>: aumentan el flujo capilar glomerular, el gradiente de presión hidráulica y el FG por nefrona. Así se mantiene la homeostasia durante años, sin síntomas urémicos.</li>
    <li>La hiperfiltración y el estrés glomerular y del túbulo proximal causan inflamación, estrés oxidativo, activación del complemento y <b>fibrosis tubulointersticial</b>; hay glomeruloesclerosis, atrofia tubular y pérdida de capilares peritubulares. Así se pierden más nefronas: círculo vicioso.</li>
    <li>Dos factores modificables aceleran el declive: la <b>hipertensión</b> (más filtrado en las nefronas remanentes) y la <b>albuminuria</b> (la albúmina reabsorbida por el túbulo induce quimiocinas, citocinas y complemento: fibrosis). La albuminuria predice la caída del FG tanto en diabéticos como en no diabéticos.</li>
  </ol>
  <div class="note">Envejecimiento: desde los 40 años se pierde cerca de 10% de las nefronas por década; las cicatrices corticales en ancianos pueden ser normales, pero en jóvenes indican enfermedad.</div>

  <h2>5. Manifestaciones con su mecanismo</h2>
  <table>
    <tr><th>Manifestación</th><th>Mecanismo según el libro</th></tr>
    <tr><td>Poliuria y nicturia (<b>primeros síntomas</b>)</td><td>Se pierde la capacidad de concentrar; cada nefrona restante debe eliminar una carga obligatoria de solutos</td></tr>
    <tr><td>Hipertensión, hipervolemia, edema</td><td>Menor excreción de Na y agua al disminuir la diuresis; angiotensina II y aldosterona altas; la renina aumentada por isquemia local es "el pilar" de la hipertensión renal</td></tr>
    <tr><td>Hiperpotasemia</td><td>Se elimina por riñón el 90% (10% por heces); se mantiene normal con FG hasta 10-15 mL/min por mecanismos de regulación, y falla después</td></tr>
    <tr><td>Acidosis metabólica</td><td>Menor excreción neta de ácidos, balance positivo de H<sup>+</sup>, baja el bicarbonato. El libro la ubica con FG &lt; 40 mL/min/1,73 m<sup>2</sup></td></tr>
    <tr><td>Resistencia a la insulina</td><td>Frecuente con aclaramiento de unos 30 mL/min; alteración de la señalización intracelular asociada a la acidosis</td></tr>
    <tr><td>Encefalopatía urémica (letargo, confusión, convulsiones, asterixis, coma)</td><td>La urea actúa como neurotoxina: activa receptores NMDA e inhibe GABA</td></tr>
    <tr><td>Náuseas, anorexia, vómitos, fetor urémico</td><td>Acumulación de toxinas nitrogenadas</td></tr>
    <tr><td>Dislipidemia</td><td>Más aterogénico; menor retorno del colesterol de tejidos al hígado (menos ABCA1) y alteración de CETP, con HDL de baja función</td></tr>
  </table>

  <h2>6. Anemia de la ERC</h2>
  <p>Es <b>normocítica, normocrómica e hiporregenerativa</b>. Mecanismos: déficit de <b>eritropoyetina</b> (principal), <b>hepcidina</b> elevada por la inflamación (desequilibrio del hierro: eritropoyesis insuficiente incluso con reservas normales), vida media reducida de los hematíes en la uremia, déficit de B12 o folato. Aparece desde estadios 2-3 (Hb baja cuando el FG está cerca de 70 en hombres y 50 mL/min en mujeres), es más común en estadio 4 y está presente hasta en 90% en diálisis. El libro la define con Hb &lt; 14 g/dL en hombres y &lt; 12 g/dL en mujeres.</p>

  <h2>7. Diabetes e hipertensión como causas</h2>
  <ul>
    <li><b>Enfermedad renal diabética:</b> alteración microvascular que afecta al 35% de los DM2; albuminuria y caída del FG. En la DM1 el libro menciona FG aumentado al inicio.</li>
    <li><b>Hipertensión:</b> nefroangioesclerosis, nefropatía crónica y progresiva, <b>levemente proteinúrica</b>; mecanismos: retención de sodio, expansión de volumen, disfunción endotelial y sobreactivación del SRAA que sube la presión intraglomerular.</li>
    <li><b>Círculo vicioso cardio-renal-diabético:</b> riñón diabético → hipertensión y anemia → sobrecarga del corazón → insuficiencia cardiaca; ambos retienen Na (congestión pulmonar, disnea, edema). La insuficiencia cardiaca explica dos tercios de la mortalidad en la DM2.</li>
  </ul>

  <h2>8. IRA frente a ERC</h2>
  <table>
    <tr><th></th><th>IRA</th><th>ERC</th></tr>
    <tr><td>Inicio</td><td>Brusco; horas o días</td><td>Silencioso, meses o años (&gt; 3 meses)</td></tr>
    <tr><td>Reversibilidad</td><td>La prerrenal revierte en &lt; 24 h con perfusión</td><td>Progresiva e irreversible</td></tr>
    <tr><td>Primer síntoma</td><td>Oliguria o anuria</td><td>Poliuria y nicturia</td></tr>
    <tr><td>Anemia</td><td>Tras una semana de IRA</td><td>Frecuente y crónica (EPO baja, hepcidina alta)</td></tr>
    <tr><td>Causas principales</td><td>70% prerrenal</td><td>Diabetes e hipertensión</td></tr>
  </table>

  <div class="note"><b>Alertas del libro:</b> (1) Dice que cerca del 70% de los pacientes está en estadio 5 y a la vez que muchos están en estadio 3: cifras que no concilian. (2) Sitúa la anemia "al vencer el estadio 3", pero luego en estadios 2-3 y "más común en la etapa 4". (3) Dice que hay anemia con Hb &lt; 14 g/dL en hombres y que los pacientes con ERC tienen "5 a 6 g/dL". (4) Acidosis con FG &lt; 40, pero también "en la etapa media". (5) La tabla de estadios añade "&lt; 10 en diabéticos" sin explicación. (6) El caso clínico (65 años, DM2 y metformina) no menciona sexo; el 9,09 solo coincide sin el factor 0,85.</div>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>ERC: FG &lt; 60 mL/min/1,73 m<sup>2</sup> o daño renal por más de 3 meses; irreversible. Estadios: 1 &gt; 90, 2 60-89, 3 30-59, 4 15-29, 5 &lt; 15.</li>
    <li>La hiperfiltración compensa, pero daña: es el mecanismo de progresión independiente de la causa.</li>
    <li>Primer síntoma: poliuria y nicturia (pérdida de concentración), no oliguria.</li>
    <li>La albuminuria predice progresión; la hipertensión y la albuminuria son los factores modificables.</li>
    <li>Anemia: normocítica, normocrómica, hiporregenerativa; EPO baja y hepcidina alta.</li>
    <li>Encefalopatía urémica: urea → receptores NMDA ↑, GABA ↓; asterixis.</li>
    <li>Confusión frecuente: IRA prerrenal (reversible, oliguria) frente a ERC (irreversible, poliuria inicial, anemia crónica).</li>
  </ul>
  `,
  questions: [
    {
      "stem": "Una mujer de 58 años con hipertensión de 12 años consulta por levantarse tres veces cada noche a orinar y por orina clara. No tiene edema ni disnea. Su creatinina es de 1,5 mg/dL y el FG estimado es de 48 mL/min/1,73 m2. ¿Qué alteración explica mejor su síntoma principal?",
      "options": [
        {
          "t": "Retención de sodio por hiperaldosteronismo primario, con expansión de volumen e hipertensión que explican la diuresis nocturna",
          "why": "Incorrecta. La retención de sodio causa hipervolemia e hipertensión, no poliuria con nicturia en fases tempranas."
        },
        {
          "t": "Pérdida de la capacidad de concentración urinaria, con diuresis aumentada para eliminar la carga obligatoria de solutos",
          "why": "Correcta. El libro describe que al avanzar la destrucción de nefronas disminuye la concentración y la poliuria y nicturia son los primeros síntomas."
        },
        {
          "t": "Caída severa de la diuresis por pérdida de más de dos tercios de las nefronas, con oliguria como primer síntoma",
          "why": "Incorrecta. La disminución marcada de la diuresis llega después, en fases avanzadas; el primer síntoma es poliuria y nicturia."
        },
        {
          "t": "Acidosis metabólica por balance positivo de hidrogeniones, con mayor diuresis nocturna compensadora",
          "why": "Incorrecta. La acidosis se asocia con FG < 40 y no produce nicturia; esta paciente tiene FG de 48."
        }
      ],
      "correct": 1
    },
    {
      "stem": "Un hombre de 50 años con glomerulopatía tratada hace 8 años, ya sin actividad de la enfermedad de base, muestra descenso progresivo del FG y fibrosis en la biopsia. ¿Qué mecanismo explica que la progresión continúe aunque la causa inicial haya cesado?",
      "options": [
        {
          "t": "Reducción del flujo capilar y de la presión hidráulica glomerular en las nefronas restantes, con isquemia y fibrosis posteriores",
          "why": "Incorrecta. Ocurre lo contrario: aumentan el flujo capilar y la presión hidráulica."
        },
        {
          "t": "Hipertrofia de las células tubulares con aumento del tamaño renal y mejor función, sin cambios en la presión intraglomerular",
          "why": "Incorrecta. No es lo descrito; la progresión termina en fibrosis y pérdida de capilares peritubulares, con presión intraglomerular aumentada."
        },
        {
          "t": "Reactivación de la enfermedad glomerular de base por depósito inmunitario, que persiste pese al tratamiento previo",
          "why": "Incorrecta. El libro indica que la progresión es independiente de la causa inicial; aquí la enfermedad de base ya no tiene actividad."
        },
        {
          "t": "Hiperfiltración de las nefronas restantes, con estrés glomerular y tubular, inflamación, activación del complemento y fibrosis tubulointersticial",
          "why": "Correcta. El libro señala que la progresión sigue independiente de la causa y se debe al daño compensatorio de las nefronas remanentes."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Dos hombres de 55 años tienen ERC con FG similar de 50 mL/min/1,73 m2. El paciente A tiene albúmina/creatinina urinaria de 15 mg/g y el B de 420 mg/g. A los tres años, B ha perdido mucho más FG. ¿Qué mecanismo vinculado a la albuminuria lo explica?",
      "options": [
        {
          "t": "La reabsorción de albúmina por el epitelio tubular induce quimiocinas, citocinas y complemento, con fibrosis tubulointersticial",
          "why": "Correcta. Es la explicación del libro: la albuminuria es predictor independiente de progresión."
        },
        {
          "t": "La albuminuria eleva la presión oncótica plasmática y sobrecarga el glomérulo con mayor presión de filtración",
          "why": "Incorrecta. La albuminuria disminuye la albúmina plasmática; no eleva la presión oncótica."
        },
        {
          "t": "La albúmina filtrada se une a la proteína de Tamm-Horsfall y obstruye la luz tubular, con oliguria aguda",
          "why": "Incorrecta. Ese es el mecanismo de la NTA isquémica, no el de la albuminuria en la ERC, donde actúa la reabsorción tubular de albúmina."
        },
        {
          "t": "La albuminuria produce poliuria osmótica que reduce la hiperfiltración y protege a las nefronas restantes",
          "why": "Incorrecta. No es un mecanismo descrito y la hiperfiltración contribuye al daño."
        }
      ],
      "correct": 0
    },
    {
      "stem": "Un hombre de 63 años con ERC estadio 4 por nefroangioesclerosis consulta por astenia. Su hemoglobina es de 8,4 g/dL, VCM 88 fL y HCM normal, reticulocitos bajos y ferritina normal. ¿Qué mecanismo explica mejor la anemia?",
      "options": [
        {
          "t": "Déficit nutricional de hierro por sangrado digestivo crónico, con ferritina baja y reticulocitos aumentados",
          "why": "Incorrecta. Habría microcitosis e hipocromía, y las reservas de hierro serían bajas, no normales."
        },
        {
          "t": "Hemólisis autoinmune con reticulocitosis compensadora, hiperbilirrubinemia indirecta y prueba de Coombs positiva",
          "why": "Incorrecta. Los reticulocitos están bajos: es hiporregenerativa."
        },
        {
          "t": "Déficit de eritropoyetina, con hepcidina elevada por inflamación crónica y menor vida media de los eritrocitos",
          "why": "Correcta. Corresponde a la anemia normocítica, normocrómica e hiporregenerativa descrita por el libro."
        },
        {
          "t": "Mielodisplasia con macrocitosis (VCM mayor de 100 fL) y displasia de las series celulares en la médula",
          "why": "Incorrecta. El VCM es normal (88 fL) y no hay dato de otra causa."
        }
      ],
      "correct": 2
    },
    {
      "stem": "Un hombre de 60 años, 72 kg, con ERC, tiene creatinina sérica de 4,5 mg/dL. Usando la fórmula del libro, ¿cuál es su aclaramiento de creatinina y su estadio?",
      "options": [
        {
          "t": "Aproximadamente 8,9 mL/min, estadio 5",
          "why": "Incorrecta. Es la mitad del valor correcto (17,8): equivale a dividir dos veces entre la creatinina o a duplicar el denominador."
        },
        {
          "t": "Aproximadamente 15,1 mL/min, estadio 4",
          "why": "Incorrecta. Es 17,78 × 0,85: se aplica a un hombre el factor para mujeres. El número cae en el mismo estadio pero no es el cálculo correcto."
        },
        {
          "t": "Aproximadamente 35,6 mL/min, estadio 3",
          "why": "Incorrecta. Resulta de usar 2,25 como denominador en lugar de 4,5; el valor correcto está en estadio 4."
        },
        {
          "t": "Aproximadamente 17,8 mL/min, estadio 4",
          "why": "Correcta. (140 − 60) × 72 / (72 × 4,5) = 5760 / 324 = 17,78 mL/min; varón, sin factor 0,85; 15-29 es estadio 4."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Una mujer de 68 años, 50 kg, diabética tipo 2 de 20 años, tiene creatinina sérica de 6,0 mg/dL. ¿Cuál es su aclaramiento de creatinina según el libro y qué estadio corresponde?",
      "options": [
        {
          "t": "Aproximadamente 8,3 mL/min, estadio 5",
          "why": "Incorrecto. Es el valor sin el factor 0,85: al ser mujer debe multiplicarse y el resultado baja a 7,1."
        },
        {
          "t": "Aproximadamente 7,1 mL/min, estadio 5",
          "why": "Correcta. (140 − 68) × 50 / (72 × 6,0) = 3600 / 432 = 8,33; × 0,85 por ser mujer = 7,08 mL/min, menor de 15 (y de 10, el umbral que el libro da para diabéticos): estadio 5."
        },
        {
          "t": "Aproximadamente 9,8 mL/min, estadio 5",
          "why": "Incorrecto. Corresponde a dividir 8,33 entre 0,85 en vez de multiplicar."
        },
        {
          "t": "Aproximadamente 16,7 mL/min, estadio 4",
          "why": "Incorrecto. Resulta de usar 3,0 en lugar de 6,0 como denominador, sin el factor 0,85."
        }
      ],
      "correct": 1
    },
    {
      "stem": "Una mujer de 62 años, con hipertensión de 25 años mal controlada, tiene creatinina de 3,1 mg/dL y proteinuria mínima (cociente albúmina/creatinina de 45 mg/g). Un residente propone nefropatía diabética, pero la glucemia es normal. ¿Qué diagnóstico es más consistente con el libro y qué mecanismo lo sostiene?",
      "options": [
        {
          "t": "Glomerulopatía de cambios mínimos por pérdida de la selectividad de carga, con proteinuria nefrótica y edema",
          "why": "Incorrecta. No es una causa de ERC con proteinuria mínima y la hipertensión de larga data apunta a otro mecanismo."
        },
        {
          "t": "Necrosis tubular aguda por hipoperfusión crónica, con vasoconstricción renal y obstrucción tubular por cilindros",
          "why": "Incorrecta. La NTA es una forma de IRA, no explica un cuadro de años de evolución."
        },
        {
          "t": "Nefroangioesclerosis: la retención de sodio, la disfunción endotelial y la sobreactivación del SRAA aumentan la presión intraglomerular",
          "why": "Correcta. El libro la describe como nefropatía crónica progresiva, levemente proteinúrica, por HTA."
        },
        {
          "t": "Nefropatía obstructiva por cálculos bilaterales, con hidronefrosis crónica y aumento de la presión intratubular",
          "why": "Incorrecta. No hay datos de obstrucción y no explica la hipertensión previa."
        }
      ],
      "correct": 2
    },
    {
      "stem": "Un hombre de 56 años en ERC estadio 5 presenta letargo, confusión y movimientos de aleteo de las manos al extender los brazos (asterixis). ¿Qué mecanismo explica el compromiso neurológico?",
      "options": [
        {
          "t": "Efecto neurotóxico de la urea, con activación de receptores NMDA e inhibición de la vía GABA",
          "why": "Correcta. Es lo que describe el libro para el aumento de urea en la ERC."
        },
        {
          "t": "Hiponatremia dilucional por exceso de ADH, con edema cerebral y menor osmolaridad plasmática",
          "why": "Incorrecta. No es el mecanismo descrito en el capítulo."
        },
        {
          "t": "Hipoglucemia por pérdida de la gluconeogénesis renal, con neuroglucopenia y alteración de la conciencia",
          "why": "Incorrecta. El libro menciona la gluconeogénesis renal, pero no atribuye a esto la asterixis."
        },
        {
          "t": "Hipocalcemia por déficit de calcitriol, con hiperexcitabilidad neuromuscular que causa tetania y convulsiones",
          "why": "Incorrecta. La tetania es otro cuadro; el libro vincula la asterixis con el efecto de la urea."
        }
      ],
      "correct": 0
    },
    {
      "stem": "Una mujer de 70 años con diabetes tipo 2, ERC y antecedente de insuficiencia cardiaca consulta por disnea, edema en miembros inferiores y estertores bibasales. La presión es de 160/95 mmHg y la hemoglobina de 9 g/dL. ¿Qué mecanismo vincula el riñón y el corazón y explica la congestión?",
      "options": [
        {
          "t": "La nefropatía diabética produce pérdida masiva de sodio que disminuye la precarga, y la congestión es de origen cardiaco",
          "why": "Incorrecta. Hay retención de sodio, no pérdida."
        },
        {
          "t": "La anemia reduce la presión arterial y el trabajo cardiaco, mientras la insuficiencia cardiaca aumenta la excreción de sodio",
          "why": "Incorrecta. Según el libro, la hipertensión secundaria y la anemia sobrecargan el corazón, y se retiene sodio."
        },
        {
          "t": "La hiperfiltración eleva la excreción de agua libre, y el edema se explica por hipoalbuminemia secundaria a la proteinuria",
          "why": "Incorrecta. En la ERC avanzada baja la diuresis y se retiene sodio y agua."
        },
        {
          "t": "La nefropatía diabética genera hipertensión y anemia que sobrecargan el corazón, y ambas enfermedades retienen sodio",
          "why": "Correcta. Es el círculo vicioso bidireccional cardio-renal descrito por el libro."
        }
      ],
      "correct": 3
    },
    {
      "stem": "Una mujer de 38 años con ERC conocida desde hace años tiene creatinina de 1,0 mg/dL y por eso se la considera con función conservada. Una biopsia revela cicatrización difusa de aproximadamente la mitad de los glomérulos. ¿Qué explica que la creatinina esté casi normal?",
      "options": [
        {
          "t": "La creatinina se elimina casi del todo por secreción tubular, de modo que el filtrado reducido no la retiene hasta fases tardías",
          "why": "Incorrecta. La creatinina se filtra y se excreta por el túbulo proximal (pero no se elimina casi del todo por secreción), y el libro la usa para calcular el aclaramiento y el filtrado; un filtrado reducido sí la retiene."
        },
        {
          "t": "El riñón enfermo aumenta la producción muscular de creatinina, que se diluye en un volumen extracelular expandido",
          "why": "Incorrecta. No es el mecanismo descrito."
        },
        {
          "t": "Las nefronas restantes aumentan su filtrado individual; la creatinina sube solo tras perder más de dos tercios de ellas",
          "why": "Correcta. Según el libro, hasta ese nivel las nefronas remanentes mantienen las funciones principales."
        },
        {
          "t": "La creatinina sube en cuanto se pierde la mitad de las nefronas, así que 1,0 mg/dL indicaría que la biopsia sobreestima el daño",
          "why": "Incorrecta. El libro sitúa el ascenso tras la pérdida de más de dos tercios de las nefronas; la compensación explica el valor casi normal."
        }
      ],
      "correct": 2
    },
    {
      "stem": "Un hombre de 65 años, diabético de 20 años e hipertenso de 15, consulta por 5 días de oliguria, palidez, edema y disnea. Presenta creatinina de 7,1 mg/dL, urea de 140 mg/dL, K+ de 6 mEq/L, Hb de 5 g/dL y 62 kg. ¿Qué dato apoya mejor ERC en lugar de IRA prerrenal?",
      "options": [
        {
          "t": "Anemia profunda con diabetes e hipertensión de años: indican pérdida crónica de nefronas y déficit de eritropoyetina, no una IRA de 5 días",
          "why": "Correcta. La anemia profunda a los 5 días no se explica por una IRA (en ella aparece tras una semana) y es compatible con el déficit crónico de EPO de la ERC; es el caso clínico del libro (FG 9,09 mL/min, estadio 5)."
        },
        {
          "t": "La oliguria de 5 días, porque el primer síntoma de la ERC es la oliguria y la IRA prerrenal cursa con diuresis conservada",
          "why": "Incorrecta. La oliguria es frecuente en la IRA; el primer síntoma de la ERC es poliuria y nicturia."
        },
        {
          "t": "La hiperpotasemia de 6 mEq/L, porque en la IRA la excreción de potasio se conserva y solo falla en la ERC",
          "why": "Incorrecta. La hiperpotasemia es una complicación de la IRA."
        },
        {
          "t": "La urea de 140 mg/dL, cifra que por sí sola distingue una ERC porque en la IRA la urea no pasa de 54 mg/dL",
          "why": "Incorrecta. La urea sube en cualquier forma de IRA o ERC y no distingue; el valor de 12-54 mg/dL es el normal."
        }
      ],
      "correct": 0
    },
    {
      "stem": "Un hombre de 34 años, 75 kg, tiene creatinina de 3,4 mg/dL tras un cuadro de deshidratación. Su aclaramiento calculado es de 32,5 mL/min. Un compañero afirma que, por estar en estadio 3, necesita diálisis ya. ¿Qué respuesta es correcta con base en este capítulo y en el 22?",
      "options": [
        {
          "t": "Sí: el estadio 3, con FG de 30-59 mL/min, es el umbral en que el libro indica iniciar diálisis para prevenir la uremia",
          "why": "Incorrecta. El libro indica el tratamiento sustitutivo (diálisis) en el estadio 5 (FG < 15)."
        },
        {
          "t": "No necesariamente es ERC: exige más de 3 meses, y con 32,5 mL/min está en estadio 3, no en el 5, que es el de diálisis",
          "why": "Correcta. El libro define la ERC por más de tres meses y, en su ejemplo con estos mismos datos, concluye que no necesita hemodiálisis (estadio 3; diálisis en estadio 5)."
        },
        {
          "t": "Sí: una creatinina mayor de 3 mg/dL equivale a estadio 4 (FG de 15-29 mL/min), desde donde el libro indica diálisis",
          "why": "Incorrecta. El umbral se define por el FG, no por una cifra de creatinina; con 32,5 mL/min corresponde al estadio 3 y la diálisis es del estadio 5."
        },
        {
          "t": "No: está en estadio 3, que corresponde a un FG de 60-89 mL/min, y por eso aún no requiere tratamiento sustitutivo",
          "why": "Incorrecta. El estadio 3 es 30-59; 60-89 es el estadio 2."
        }
      ],
      "correct": 1
    }
  ]
}
);
