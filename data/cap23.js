// Chapter 23: Chronic kidney disease (ERC). Source: Vinueza, Fisiopatología Humana, book pp. 542-566.
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 23,
  weight: 2, // no marcado en favoritosdoc.jpeg
  title: "23. Insuficiencia renal crónica",
  easy: `
  <h2>La idea en una frase</h2>
  <p>En la enfermedad renal crónica (ERC) se pierden nefronas poco a poco y para siempre. Las nefronas que sobreviven trabajan de más, y ese esfuerzo extra las va destruyendo también.</p>
  <p>La <b>nefrona</b> es la unidad que filtra: un glomérulo que limpia la sangre y un túbulo que devuelve al cuerpo lo que no debe perderse.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <p>La cadena es larga, pero siempre sigue el mismo orden. Primero se pierden nefronas, después el resto compensa, y al final esa compensación cobra la factura.</p>
  <ol>
    <li>La diabetes, la hipertensión o una glomerulopatía destruyen nefronas. Son la causa en 30%, 25% y 20% de los casos.</li>
    <li>Las nefronas que quedan <b>hiperfiltran</b>: cada una filtra más de lo normal para mantener la limpieza de la sangre.</li>
    <li>Ese exceso de flujo y de presión daña el glomérulo y el túbulo. Aparecen inflamación y <b>fibrosis</b>, que es tejido de cicatriz que reemplaza al que funcionaba.</li>
    <li>Con la fibrosis se pierden más nefronas, y las restantes hiperfiltran otra vez. Es un círculo vicioso que ya no necesita la causa inicial para seguir.</li>
    <li>Al principio el riñón no puede concentrar la orina. Cada nefrona debe arrastrar una <b>carga obligatoria de solutos</b>, así que el volumen de orina aumenta.</li>
    <li>En fases avanzadas el riñón retiene sodio y agua: aparece hipertensión y edema. Tampoco elimina ácidos ni potasio.</li>
    <li>Falta <b>eritropoyetina</b>, la hormona renal que ordena producir glóbulos rojos, y la <b>hepcidina</b> alta bloquea el uso del hierro. Resultado: anemia.</li>
    <li>La urea acumulada actúa como neurotoxina: activa los receptores NMDA e inhibe el GABA, un freno del sistema nervioso. Así aparecen la confusión y la asterixis, que es el aleteo de las manos.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <ul>
    <li><b>Poliuria y nicturia</b> (orinar mucho y de noche) son los primeros síntomas. Se deben a que el riñón perdió la capacidad de concentrar.</li>
    <li><b>Hipertensión, edema y sobrecarga</b>: el riñón retiene sodio y agua, y el sistema renina-angiotensina-aldosterona está activado por la isquemia local.</li>
    <li><b>Anemia normocítica, normocrómica e hiporregenerativa</b>: glóbulos rojos de tamaño y color normales, pero pocos y con reticulocitos bajos porque la médula no recibe la orden de producirlos.</li>
    <li><b>Acidosis metabólica</b>: se excreta menos ácido del que se produce, y el bicarbonato cae. Aparece con un filtrado menor de 40 mL/min.</li>
    <li><b>Encefalopatía urémica</b>: letargo, confusión, convulsiones, asterixis y coma por la urea acumulada.</li>
    <li><b>Resistencia a la insulina</b>: se nota cuando el aclaramiento ronda 30 mL/min, por una señalización celular alterada que acompaña a la acidosis.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Un síntoma inicial (nicturia, poliuria) y la pregunta: ¿qué mecanismo lo produce?</li>
    <li>Un paciente cuya causa ya se trató y que sigue perdiendo función: ¿por qué progresa?</li>
    <li>Edad, peso y creatinina para calcular el filtrado: ¿qué estadio es y necesita diálisis?</li>
    <li>Hemoglobina baja con VCM normal y reticulocitos bajos: ¿cuál es el mecanismo de la anemia?</li>
    <li>Dos pacientes parecidos, uno agudo y otro crónico: ¿qué dato separa la IRA de la ERC?</li>
  </ul>
  <p>Ejemplo en su voz: "Paciente de 65 años, diabético e hipertenso, con creatinina de 7,1 mg/dL y hemoglobina de 5 g/dL: ¿qué estadio tiene y por qué está anémico?"</p>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> creer que la ERC empieza con oliguria, cuando empieza con poliuria y nicturia. También creer que la creatinina sube desde el inicio: sube cuando se perdió más de dos tercios de las nefronas, porque las restantes compensan.</div>

  <h2>Números y cálculos</h2>
  <ul>
    <li>ERC: filtrado &lt; 60 mL/min/1,73 m<sup>2</sup> o daño renal durante más de 3 meses.</li>
    <li>Estadios: 1 &gt; 90; 2 = 60-89; 3 = 30-59; 4 = 15-29; 5 &lt; 15 (el libro añade &lt; 10 en diabéticos).</li>
    <li>Albuminuria &gt; 30 mg/24 h o cociente albúmina/creatinina &gt; 30 mg/g.</li>
    <li><b>Cockcroft-Gault:</b> Cl<sub>Cr</sub> = (140 − edad) × peso / (72 × creatinina); × 0,85 si es mujer.</li>
    <li>Ejemplo: 65 años, 62 kg, creatinina 7,1 → (75 × 62) / (72 × 7,1) = 4650 / 511,2 = <b>9,09 mL/min</b>, estadio 5.</li>
    <li>Causas: diabetes 30%, hipertensión 25%, glomerulopatías 20%.</li>
  </ul>
  <div class="note"><b>Alerta del libro:</b> dice que la anemia aparece "al vencer el estadio 3", pero después la sitúa en estadios 2 y 3 y la llama más frecuente en el estadio 4. El caso clínico no precisa el sexo, y el resultado de 9,09 mL/min solo coincide si no se aplica el factor 0,85.</div>
  `,
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
      id: "23-0",
      stem: "Una mujer de 58 años con hipertensión de 12 años refiere que se levanta tres veces por noche a orinar. No tiene edema ni disnea y su filtrado estimado es de 48 mL/min/1,73 m². ¿Qué mecanismo explica su síntoma principal?",
      options: [
        {
          t: "Retención de sodio por hiperaldosteronismo, con hipervolemia e hipertensión.",
          why: "Eliges el mecanismo de las fases avanzadas. La retención de sodio produce hipertensión y edema, no un aumento del volumen urinario nocturno; la paciente no tiene edema ni disnea."
        },
        {
          t: "Pérdida de la capacidad de concentrar y carga obligatoria de solutos.",
          why: "Al perderse nefronas el riñón ya no concentra la orina. Cada nefrona restante debe arrastrar una carga fija de solutos, así que el volumen urinario sube y se reparte en la noche. Es el primer síntoma de la ERC."
        },
        {
          t: "Oliguria por pérdida de más de dos tercios de las nefronas.",
          why: "Inviertes el orden clínico: la oliguria llega en fases avanzadas. Además el filtrado de 48 mL/min es estadio 3 y todavía no explica una caída marcada de la diuresis."
        },
        {
          t: "Acidosis metabólica con diuresis nocturna compensadora.",
          why: "Confundes una consecuencia metabólica con un mecanismo urinario. La acidosis aparece con filtrados menores de 40 mL/min, y este es de 48; tampoco la acidosis produce nicturia."
        }
      ],
      correct: 1,
      rule: "En la ERC temprana se orina mucho y de noche por pérdida de concentración; la oliguria pertenece a las fases tardías."
    },
    {
      id: "23-1",
      stem: "Un hombre de 50 años tuvo una glomerulopatía tratada hace ocho años, ya inactiva, y ahora presenta descenso progresivo del filtrado con fibrosis en la biopsia. ¿Qué mecanismo explica que la pérdida de función continúe?",
      options: [
        {
          t: "Reactivación inmunitaria de la glomerulopatía de base, con nuevos depósitos.",
          why: "Buscas la causa en el pasado. La glomerulopatía está inactiva y la progresión de la ERC no depende de ella: sigue avanzando por el daño de las nefronas que quedaron."
        },
        {
          t: "Disminución del flujo capilar y de la presión hidráulica glomerular.",
          why: "Inviertes la hemodinámica: en las nefronas restantes aumentan el flujo capilar glomerular y el gradiente de presión hidráulica. Esa sobrecarga, no una caída, es la que fibrosis y esclerosis producen."
        },
        {
          t: "Hipertrofia tubular con mejoría funcional y sin cambio de presión.",
          why: "Describes una adaptación beneficiosa que no existe en este contexto. La hipertrofia compensadora viene con fibrosis tubulointersticial, atrofia tubular y pérdida de capilares peritubulares."
        },
        {
          t: "Hiperfiltración de las nefronas restantes, con fibrosis tubulointersticial.",
          why: "Las nefronas que sobreviven filtran más para compensar, y ese exceso de presión y flujo activa inflamación, complemento y fibrosis. La fibrosis destruye más nefronas, y el ciclo continúa sin la causa inicial."
        }
      ],
      correct: 3,
      rule: "Aunque la causa inicial se haya curado, la ERC progresa por hiperfiltración de las nefronas restantes."
    },
    {
      id: "23-2",
      stem: "Dos hombres de 55 años tienen ERC con filtrado de 50 mL/min/1,73 m². El paciente A tiene albúmina/creatinina urinaria de 15 mg/g y el paciente B, de 420 mg/g. A los tres años, B ha perdido mucho más filtrado. ¿Qué mecanismo explica la diferencia?",
      options: [
        {
          t: "Reabsorción tubular de albúmina que induce quimiocinas, citocinas y complemento.",
          why: "La albúmina que se filtra y el túbulo reabsorbe activa mediadores inflamatorios y complemento, y eso termina en fibrosis. Por eso la albuminuria predice la caída del filtrado en diabéticos y en no diabéticos."
        },
        {
          t: "Aumento de la presión oncótica plasmática por la albuminuria.",
          why: "Confundes orina con plasma: la albuminuria refleja pérdida de albúmina, no aumento. Además la presión oncótica no explica por sí sola la fibrosis que la biopsia mostraría."
        },
        {
          t: "Obstrucción tubular por proteína de Tamm-Horsfall, con oliguria aguda y anuria.",
          why: "Trasladas un mecanismo de la necrosis tubular aguda a una enfermedad de años. Aquí no hay oliguria aguda y el proceso es lento, progresivo y con fibrosis."
        },
        {
          t: "Poliuria osmótica que reduce la hiperfiltración restante.",
          why: "Supones que la poliuria protege al glomérulo, cuando la hiperfiltración sostenida es justamente lo que lo daña. Además la poliuria osmótica no es el mecanismo descrito en la ERC."
        }
      ],
      correct: 0,
      rule: "Cuanta más albúmina aparece en la orina, más rápido cae el filtrado: la albuminuria es factor de progresión, no un dato benigno."
    },
    {
      id: "23-3",
      stem: "Un hombre de 63 años con ERC estadio 4 consulta por astenia. Su hemoglobina es de 8,4 g/dL, VCM de 88 fL, reticulocitos bajos y ferritina normal. ¿Qué mecanismo explica mejor la anemia?",
      options: [
        {
          t: "Pérdida digestiva crónica de hierro, con ferritina baja y microcitosis.",
          why: "Esperarías microcitosis e hipocromía, y sobre todo ferritina baja. Aquí el VCM es normal y la ferritina también, así que el hierro almacenado no es el problema."
        },
        {
          t: "Hemólisis autoinmune, con reticulocitosis compensadora.",
          why: "La hemólisis destruye hematíes, pero la médula responde con reticulocitos altos. En este paciente están bajos: la médula no está produciendo, no está perdiendo."
        },
        {
          t: "Déficit de eritropoyetina, con hepcidina elevada por inflamación.",
          why: "El riñón enfermo produce poca eritropoyetina, la hormona que estimula la médula, y eso da anemia normocítica con reticulocitos bajos. La hepcidina alta por inflamación agrava el cuadro al bloquear el hierro."
        },
        {
          t: "Mielodisplasia, con macrocitosis y displasia medular.",
          why: "La mielodisplasia suele dar macrocitosis. Con VCM de 88 fL y un riñón en estadio 4, la explicación más simple es el déficit de eritropoyetina."
        }
      ],
      correct: 2,
      rule: "Anemia con VCM normal, reticulocitos bajos y ferritina normal en la ERC: falta eritropoyetina, no hierro."
    },
    {
      id: "23-4",
      stem: "Un hombre de 60 años, de 72 kg, con enfermedad renal crónica, tiene creatinina sérica de 4,5 mg/dL. Aplicando la fórmula de Cockcroft-Gault, ¿cuál es su aclaramiento y su estadio?",
      options: [
        {
          t: "8,9 mL/min, estadio 5",
          why: "Es la mitad del valor real: duplicaste el denominador. Con 17,8 mL/min sigue en estadio 4, no en el 5, y eso cambia la indicación de diálisis."
        },
        {
          t: "17,8 mL/min, estadio 4",
          why: "(140 − 60) × 72 = 5760; 72 × 4,5 = 324; 5760 / 324 = 17,78 mL/min. Es varón, así que no se multiplica por 0,85, y 17,8 cae en el rango 15-29, que es el estadio 4."
        },
        {
          t: "35,6 mL/min, estadio 3",
          why: "Usaste 2,25 en el denominador en lugar de la creatinina real de 4,5. Al dividir más veces el filtrado parece el doble de lo que es y el estadio sube falsamente a 3."
        },
        {
          t: "15,1 mL/min, estadio 4",
          why: "Es 17,78 multiplicado por 0,85, el factor de la mujer. Aplicarlo a un varón subestima el filtrado, aunque en este caso el estadio no cambie."
        }
      ],
      correct: 1,
      rule: "Multiplica edad y peso, divide una sola vez entre 72 por la creatinina y solo aplica 0,85 si el paciente es mujer."
    },
    {
      id: "23-5",
      stem: "Una mujer de 68 años, de 50 kg, diabética tipo 2, tiene creatinina sérica de 6,0 mg/dL. ¿Cuál es su aclaramiento de creatinina y su estadio?",
      options: [
        {
          t: "8,3 mL/min, estadio 5",
          why: "Es el resultado sin el factor 0,85. Al ser mujer debes multiplicar: su menor masa muscular produce menos creatinina para el mismo filtrado, y sin la corrección el riñón parece mejor de lo que está."
        },
        {
          t: "9,8 mL/min, estadio 5",
          why: "Dividiste entre 0,85 en lugar de multiplicar. El factor reduce el valor final; invertirlo infla el filtrado y puede hacerte perder el umbral de diálisis."
        },
        {
          t: "16,7 mL/min, estadio 4",
          why: "Usaste 3,0 en el denominador y omitiste el factor 0,85. Con creatinina de 6,0 el filtrado tiene que ser mucho menor: en el estadio 4 todavía no habría indicación de diálisis."
        },
        {
          t: "7,1 mL/min, estadio 5",
          why: "(140 − 68) × 50 = 3600; 72 × 6,0 = 432; 3600 / 432 = 8,33; por ser mujer 8,33 × 0,85 = 7,08 mL/min. Está por debajo de 15 y también del umbral de 10 que se aplica en diabéticos: estadio 5."
        }
      ],
      correct: 3,
      rule: "En la mujer el resultado final se multiplica por 0,85; si no lo haces, el filtrado te queda falsamente alto."
    },
    {
      id: "23-6",
      stem: "Una mujer de 62 años con hipertensión de 25 años mal controlada tiene creatinina de 3,1 mg/dL, glucemia normal y cociente albúmina/creatinina de 45 mg/g. ¿Cuál es el diagnóstico más probable?",
      options: [
        {
          t: "Nefroangioesclerosis hipertensiva.",
          why: "Veinticinco años de hipertensión mal controlada producen una nefropatía crónica y progresiva con proteinuria leve, que es lo que muestra el cociente de 45 mg/g. La glucemia normal aleja la causa diabética."
        },
        {
          t: "Glomerulopatía de cambios mínimos.",
          why: "La de cambios mínimos da proteinuria nefrótica, muy superior a 45 mg/g, y no se asocia a hipertensión de larga data. Tampoco es una causa frecuente de ERC progresiva."
        },
        {
          t: "Necrosis tubular aguda por isquemia.",
          why: "Confundes un daño agudo con un proceso de años. La necrosis tubular aguda se instala en horas o días con oliguria, y aquí el cuadro es crónico y sin episodio desencadenante."
        },
        {
          t: "Nefropatía obstructiva por cálculos bilaterales.",
          why: "Los cálculos biliares no obstruyen la vía urinaria. Además no hay datos de obstrucción y esta no explicaría la hipertensión previa de 25 años."
        }
      ],
      correct: 0,
      rule: "Hipertensión de muchos años con proteinuria leve y glucemia normal: nefroangioesclerosis hipertensiva."
    },
    {
      id: "23-7",
      stem: "Un hombre de 56 años en ERC estadio 5 presenta letargo, confusión y asterixis. ¿Qué mecanismo explica el compromiso neurológico?",
      options: [
        {
          t: "Hiponatremia dilucional por exceso de hormona antidiurética en la uremia.",
          why: "Buscas un trastorno del sodio donde la historia habla de urea retenida. La hiponatremia puede dar confusión, pero no produce asterixis y no hay dato de sodio bajo en el caso."
        },
        {
          t: "Neurotoxicidad de la urea, con activación de NMDA e inhibición de GABA.",
          why: "La urea acumulada actúa sobre el sistema nervioso: activa los receptores NMDA e inhibe el GABA, el principal freno inhibitorio. De ahí salen el letargo, la confusión y la asterixis de la encefalopatía urémica."
        },
        {
          t: "Hipoglucemia por pérdida de la gluconeogénesis renal.",
          why: "El riñón hace gluconeogénesis, pero su pérdida no explica la asterixis ni el cuadro urémico. Además la hipoglucemia daría sudoración y temblor, datos que la historia no menciona."
        },
        {
          t: "Hipocalcemia por déficit de calcitriol, con tetania.",
          why: "La hipocalcemia da tetania y espasmos, no asterixis. El signo descrito es el aleteo de manos de la encefalopatía, y el mecanismo que lo produce es la urea."
        }
      ],
      correct: 1,
      rule: "Asterixis en ERC avanzada: piensa en urea como neurotoxina, con NMDA activado y GABA inhibido."
    },
    {
      id: "23-8",
      stem: "Una mujer de 70 años con diabetes tipo 2 y ERC consulta por disnea, edema en miembros inferiores y estertores bibasales. Su presión es de 160/95 mmHg y su hemoglobina de 9 g/dL. ¿Qué mecanismo explica la congestión?",
      options: [
        {
          t: "Pérdida masiva de sodio que reduce la precarga.",
          why: "Inviertes el manejo del sodio: en la ERC se retiene sodio. Una pérdida de sodio reduciría la precarga y mejoraría la disnea, justo lo contrario de lo que muestra la paciente."
        },
        {
          t: "Anemia que reduce el trabajo cardiaco y aumenta la excreción de sodio.",
          why: "La anemia no descansa al corazón: lo obliga a trabajar más para llevar oxígeno y agrava la sobrecarga. Además el riñón enfermo retiene sodio, no lo excreta de más."
        },
        {
          t: "Hipertensión y anemia que sobrecargan el corazón y retienen sodio.",
          why: "El riñón diabético genera hipertensión y anemia, y las dos sobrecargan el corazón. Corazón y riñón retienen sodio a la vez, y eso produce congestión pulmonar, disnea y edema."
        },
        {
          t: "Hiperfiltración con mayor excreción de agua libre.",
          why: "Supones un riñón que aún compensa. En la fase avanzada la diuresis cae y se retienen sodio y agua; además la hiperfiltración no aumenta la excreción de agua libre."
        }
      ],
      correct: 2,
      rule: "Riñón diabético más hipertensión y anemia forma el círculo cardio-renal: ambos órganos retienen sodio y congestionan."
    },
    {
      id: "23-9",
      stem: "Una mujer de 38 años con ERC tiene creatinina de 1,0 mg/dL. La biopsia muestra cicatrización difusa de casi la mitad de los glomérulos. ¿Qué explica que la creatinina esté casi normal?",
      options: [
        {
          t: "Compensación de las nefronas restantes hasta perder dos tercios.",
          why: "Las nefronas que quedan hiperfiltrans y mantienen la limpieza de la sangre, así que la creatinina no sube al principio. Se eleva sobre el basal cuando se perdió más de dos tercios de las nefronas."
        },
        {
          t: "Eliminación de la creatinina casi exclusiva por secreción tubular.",
          why: "La creatinina se elimina sobre todo por filtración, y por eso sirve para estimar el filtrado. Si dependiera de la secreción tubular, no reflejaría la pérdida de glomérulos."
        },
        {
          t: "Mayor producción muscular de creatinina diluida en volumen expandido.",
          why: "Inventas un cambio en la producción que la historia no sugiere. La creatinina depende de la masa muscular, que es estable; lo que cambia aquí es cuántas nefronas la filtran."
        },
        {
          t: "Ascenso de la creatinina desde la pérdida de la mitad de las nefronas.",
          why: "Adelantas el umbral: la creatinina sube cuando se perdió más de dos tercios, no la mitad. Con la mitad de glomérulos cicatrizados todavía puede mantenerse normal."
        }
      ],
      correct: 0,
      rule: "Una creatinina normal no descarta ERC: las nefronas restantes compensan hasta que se pierden más de dos tercios."
    },
    {
      id: "23-10",
      stem: "Un hombre de 65 años, diabético e hipertenso de larga data, consulta por cinco días de oliguria y edema. Tiene creatinina de 7,1 mg/dL, potasio de 6 mEq/L y hemoglobina de 5 g/dL. ¿Qué hallazgo orienta a ERC y no a insuficiencia renal aguda prerrenal?",
      options: [
        {
          t: "La oliguria, que es el primer síntoma de la enfermedad renal crónica.",
          why: "Confundes el orden de los síntomas: la ERC empieza con poliuria y nicturia, y la oliguria aparece tarde. En la IRA, en cambio, la oliguria es el signo inicial."
        },
        {
          t: "La hiperpotasemia, que no aparece en la IRA.",
          why: "La hiperpotasemia es habitual en la IRA por caída del filtrado. No sirve para separar los dos cuadros, y aquí aparece en ambos."
        },
        {
          t: "La creatinina elevada, que no sube en la IRA.",
          why: "La creatinina sube en los dos cuadros: en la IRA de forma brusca y en la ERC de forma lenta. Es un dato compartido, así que no distingue."
        },
        {
          t: "La anemia profunda ya presente a los cinco días.",
          why: "En la IRA la anemia aparece después de una semana, por falta de eritropoyetina. Una hemoglobina de 5 g/dL a los cinco días habla de un déficit crónico, como el de la ERC avanzada."
        }
      ],
      correct: 3,
      rule: "Anemia profunda en los primeros días de un cuadro renal agudo: piensa en ERC de fondo, porque la IRA tarda una semana en anemizar."
    },
    {
      id: "23-11",
      stem: "Un hombre de 34 años tiene creatinina de 3,4 mg/dL tras una deshidratación y un aclaramiento calculado de 32,5 mL/min. Un compañero afirma que, por estar en estadio 3, ya necesita diálisis. ¿Qué respuesta es correcta?",
      options: [
        {
          t: "Sí, la diálisis se indica desde el estadio 3.",
          why: "Adelantas el tratamiento sustitutivo. La diálisis corresponde al estadio 5, con filtrado menor de 15 mL/min; en el estadio 3 se trata la causa y se protege el riñón."
        },
        {
          t: "Sí, toda creatinina mayor de 3 mg/dL obliga a diálisis.",
          why: "Confundes una cifra de creatinina con un estadio. El estadio se define por el filtrado, y este paciente está en 32,5 mL/min, dentro de 30-59."
        },
        {
          t: "No: el estadio 3 es 30-59 y la diálisis corresponde al estadio 5.",
          why: "Con 32,5 mL/min el paciente está en estadio 3, y la diálisis se reserva para el estadio 5. Además, para llamarlo ERC haría falta que el daño persista más de tres meses."
        },
        {
          t: "No: el estadio 3 corresponde a un filtrado entre 60 y 89 mL/minuto.",
          why: "Desplazas la tabla un escalón. El estadio 2 es 60-89 y el 3 es 30-59; con 32,5 mL/min estaría en estadio 2 solo si la tabla estuviera corrida."
        }
      ],
      correct: 2,
      rule: "El estadio se define por el filtrado, no por la creatinina: 30-59 es estadio 3 y la diálisis es del estadio 5."
    }
  ]
}
);
