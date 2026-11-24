// Chapter 36: Cerebrovascular events (stroke). Source: Vinueza, Fisiopatología Humana (book pp. 835-860).
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push(
{
  id: 36,
  weight: 5,
  title: "36. Evento vascular cerebral",
  easy: `
  <h2>La idea en una frase</h2>
  <p>El <b>evento vascular cerebral</b> (EVC) es la pérdida brusca de función del cerebro. Ocurre porque deja de llegarle sangre (<b>isquémico</b>, el 60 % de los casos). O porque un vaso se rompe y el sangrado queda dentro (<b>hemorrágico</b>, el 40 %).</p>
  <p>El <b>flujo sanguíneo cerebral</b> es la sangre que recibe cada 100 g de tejido por minuto. Lo normal es 50 mL. El cerebro no guarda reserva de oxígeno, así que depende de ese flujo en cada segundo.</p>

  <h2>Por qué pasa (paso a paso)</h2>
  <ol>
    <li><b>Se tapa la arteria:</b> un coágulo se forma sobre una placa de grasa (<b>ateroma</b>). Otras veces un <b>émbolo</b> viaja desde el corazón y se enclava en un vaso del cerebro. Aguas abajo, el flujo cae.</li>
    <li><b>Aparece la penumbra:</b> si el flujo baja a 25 mL/100 g/min, el tejido queda mal perfundido pero vivo. Esa zona se llama <b>penumbra</b> y se puede salvar si vuelve la sangre a tiempo.</li>
    <li><b>Llega el punto sin retorno:</b> con 10 a 12 mL/100 g/min la neurona muere, y muere aunque después se reperfunda. Ese tejido ya es <b>núcleo infartado</b> (necrosis).</li>
    <li><b>La célula se rompe:</b> sin oxígeno falla la bomba de la membrana. Entra sodio, luego calcio, sale potasio y la neurona se llena de agua (<b>edema</b>). También se libera <b>glutamato</b>, un mensajero que excita a las vecinas hasta agotarlas.</li>
    <li><b>Llega el segundo golpe:</b> el tejido quema glucosa sin oxígeno y produce <b>lactato</b>. La célula se acidifica, la mitocondria falla y la inflamación rompe la <b>barrera hematoencefálica</b>, la cerca que protege al cerebro. Por eso la penumbra puede terminar en necrosis.</li>
    <li><b>O se rompe el vaso:</b> la sangre ocupa espacio, comprime el tejido (<b>efecto de masa</b>) y sube la presión dentro del cráneo. Después la hemoglobina se degrada y libera hierro y radicales que inflaman y producen más edema.</li>
    <li><b>Si cae la presión de perfusión:</b> el flujo depende de la diferencia entre la presión arterial media (PAM) y la presión intracraneal (PIC). Si la PIC sube, el flujo baja.</li>
  </ol>

  <h2>Qué se ve en la clínica y por qué</h2>
  <ul>
    <li><b>Cerebral media (ACM):</b> debilidad contralateral de cara y brazo más que de la pierna. Si es el hemisferio del lenguaje hay <b>afasia</b> (no puede hablar o no comprende); si es el otro lado, <b>negligencia</b> (ignora su hemicuerpo). Sus ramas profundas riegan ganglios basales y cápsula interna.</li>
    <li><b>Cerebral anterior (ACA):</b> la pierna se afecta más que el brazo, hay incontinencia urinaria y falta de iniciativa (mutismo acinético), porque riega la cara medial del frontal.</li>
    <li><b>Cerebral posterior (ACP):</b> pierde medio campo visual en los dos ojos (<b>hemianopsia homónima</b>) y falla la memoria reciente, porque riega el occipital y el hipocampo.</li>
    <li><b>Vertebrobasilar:</b> vértigo, diplopía (visión doble), disfagia (dificultad para tragar), ataxia y signos en los dos lados, porque riega tronco y cerebelo.</li>
    <li><b>Isquémico:</b> el déficit aparece de golpe y es máximo desde el inicio. <b>Hemorrágico:</b> cefalea intensa, vómitos, rigidez de nuca y deterioro de la conciencia por la presión.</li>
    <li><b>AIT (ataque isquémico transitorio):</b> el déficit dura menos de 24 horas y revierte por completo. Si pasa de 24 horas o deja secuela, ya es infarto.</li>
  </ul>

  <h2>Cómo te lo va a preguntar el doctor</h2>
  <ul>
    <li>Un caso con fibrilación auricular y prótesis valvulares: ¿cuál es el mecanismo del trombo?</li>
    <li>Dos datos de perfusión, CBF y CBV, con un mismatch: ¿qué representa esa zona?</li>
    <li>Una cifra de flujo en mL/100 g/min: ¿penumbra o necrosis irreversible?</li>
    <li>PAM y PIC: calcule la presión de perfusión cerebral y qué pasa si el hematoma crece.</li>
    <li>Un déficit concreto: ¿qué arteria está ocluida y por qué ese signo?</li>
  </ul>
  <p>Ejemplo en su voz: "Paciente femenina de 78 años con fibrilación auricular y prótesis mitral y aórtica, con afasia y hemiparesia derecha por oclusión de la cerebral media izquierda: desde la tríada de Virchow, ¿cuál es el mecanismo del trombo cardíaco?"</p>

  <h2>Trampa típica</h2>
  <div class="trap"><b>Trampa típica:</b> creer que todo lo que está por debajo de 50 mL ya está muerto, cuando la penumbra está viva. Otra: sumar PAM y PIC en vez de restarlas. Y una más: llamar "transitorio" a un déficit de 36 horas solo porque mejoró.</div>

  <h2>Números y cálculos</h2>
  <ul>
    <li>Flujo normal: <b>50 mL/100 g/min</b>. Penumbra: <b>25</b>. Daño irreversible: <b>10-12</b>.</li>
    <li>Autorregulación: PAM entre <b>50 y 150 mmHg</b>. Por debajo de 50, evento isquémico; por encima de 150, hemorrágico.</li>
    <li>Encéfalo: 1400 g, 750 mL/min, 15 % del gasto cardíaco y cerca del 20 % del oxígeno.</li>
    <li><b>Presión de perfusión:</b> PPC = PAM − PIC. Si llega a cero, el paciente muere.</li>
    <li>AIT: déficit de menos de 24 horas y totalmente reversible.</li>
  </ul>
  <p><b>Ejemplo:</b> PAM 105 mmHg y PIC 40 mmHg → 105 − 40 = <b>65 mmHg</b>. Si el hematoma crece y la PIC sube a 70 mmHg → 105 − 70 = <b>35 mmHg</b>. El flujo cae sin que la presión arterial cambie.</p>
  <div class="note"><b>Alerta del libro:</b> llama "infartos lacunares" al infarto hemodinámico o de frontera, que son entidades distintas. Da la ventana de tratamiento como 3 h, 4 h y 4,5 h. Además presenta el rango 0-42 como si fuera de la escala de Cincinnati, cuando ese es el NIHSS: Cincinnati solo valora tres signos.</div>
  `,
  summary: `
  <h2>1. Fundamentos</h2>
  <p>El evento vascular cerebral (EVC) es la alteración aguda del flujo sanguíneo cerebral, por interrupción o disminución del flujo (<b>isquémico, ~60 %</b>) o por hemorragia (<b>hemorrágico, ~40 %</b>). Hay un desequilibrio entre el aporte y la demanda de oxígeno, y el déficit neurológico depende de la arteria afectada. Se busca tratamiento rápido: el libro habla de "menos de 4 horas y media" ("tiempo es cerebro") y del código ICTUS con la escala de Cincinnati.</p>
  <p>Factores de riesgo: no modificables (edad &gt; 55 años, raza afrodescendiente, hispana o nativa americana) y modificables (hipertensión, diabetes, hiperlipidemia, tabaquismo, alcohol, obesidad, <b>fibrilación auricular</b> como la afectación cardíaca más importante, anticonceptivos con dosis altas de estrógenos).</p>

  <h2>2. Irrigación y flujo normal</h2>
  <ul>
    <li><b>Carótida interna</b> → oftálmica, coroidea anterior, <b>cerebral anterior (ACA)</b> y <b>cerebral media (ACM)</b>. <b>Vertebrales</b> (ramas de la subclavia) → <b>basilar</b> → cerebelosas y <b>cerebral posterior (ACP)</b>. Comunicantes anterior y posterior cierran el polígono de Willis.</li>
    <li>La ACM es el sitio principal de <b>émbolos de origen cardíaco</b>. Sus 5-17 ramas <b>lenticuloestriadas</b> irrigan ganglios basales, cápsula interna y núcleo caudado; sus ramas corticales, la mayor parte de frontal y parietal y lateral de temporal y occipital (incluidas las áreas del lenguaje).</li>
  </ul>
  <table>
    <tr><th>Arteria</th><th>Territorio</th><th>Clínica típica (Tabla 105)</th></tr>
    <tr><td>ACM</td><td>Convexidad frontal, temporal, parietal</td><td>Hemiparesia contralateral (cara y brazo &gt; pierna), afasia de Broca o Wernicke, <b>negligencia</b> si el hemisferio es no dominante</td></tr>
    <tr><td>ACA</td><td>Frontal medial y polo frontal</td><td>Hemiparesia contralateral con mayor afección de la <b>pierna</b>, incontinencia urinaria, mutismo acinético</td></tr>
    <tr><td>ACP</td><td>Occipital, tálamo, mesencéfalo</td><td>Hemianopsia homónima contralateral, ceguera cortical, alteraciones de memoria (hipocampo)</td></tr>
    <tr><td>Vertebrobasilar</td><td>Cerebelo y tronco</td><td>Síntomas bilaterales, ataxia, vértigo, disfagia, diplopía, parálisis de pares craneales</td></tr>
  </table>
  <p><b>Cifras del libro:</b> encéfalo ~1400 g (2 % del peso corporal), flujo 750 mL/min = <b>50 mL/100 g/min</b>, 15 % del gasto cardíaco y ~20 % del oxígeno. Sustancia gris: más flujo y consumo. Sin vasos linfáticos; venas sin válvulas que drenan a senos de la duramadre.</p>

  <h2>3. Autorregulación y presión de perfusión</h2>
  <p>Con una PAM entre <b>50 y 150 mmHg</b> el flujo se mantiene constante porque las arteriolas se dilatan o contraen. <b>PPC = PAM − PIC.</b> Si la PPC es cero, el paciente muere. El libro afirma que con PAM &lt; 50 mmHg se produce un evento isquémico y con PAM &gt; 150, uno hemorrágico.</p>
  <div class="note"><b>Ejemplo:</b> PAM 105 mmHg y PIC 40 mmHg → PPC = 105 − 40 = 65 mmHg. Si el hematoma crece y la PIC sube a 70 mmHg con la misma PAM → PPC = 35 mmHg. El flujo cae aunque la presión arterial no haya cambiado.</div>

  <h2>4. Fisiopatología isquémica: de la oclusión a la necrosis</h2>
  <ol>
    <li><b>Oclusión</b> (trombótica o embólica) → el flujo cae. Si se instala despacio hay tiempo para colaterales; la hipotensión, la hipoxia y la hipercapnia las perjudican.</li>
    <li>Flujo ≈ <b>25 mL/100 g/min → zona de penumbra</b>: tejido en riesgo, <b>recuperable</b> si se reperfunde pronto.</li>
    <li>Flujo ≈ <b>10-12 mL/100 g/min → daño neuronal irreversible</b>, sin importar la duración.</li>
    <li>Fallo energético: el tejido es aerobio obligado → membrana lesionada → <b>entra Na⁺</b>, luego <b>Ca²⁺</b>, sale K⁺ → <b>edema celular</b>; se libera <b>glutamato</b>, hay radicales libres y se activan rutas de necrosis o apoptosis.</li>
    <li><b>Segundo golpe:</b> glucólisis anaerobia → <b>lactato</b> → acidosis intracelular, disfunción mitocondrial, inflamación y ruptura de la barrera. Por eso la penumbra puede acabar en necrosis si no se reperfunde.</li>
  </ol>

  <h2>5. Tipos</h2>
  <table>
    <tr><th>Tipo</th><th>Mecanismo y rasgos</th></tr>
    <tr><td>Trombótico (el más común)</td><td>Trombo sobre placa de ateroesclerosis; ocurre de noche o en la mañana y suele ser precedido por <b>AIT</b>.</td></tr>
    <tr><td>Embólico</td><td>Émbolo casi siempre cardíaco: fibrilación auricular y arritmias que producen <b>estasis y turbulencia</b>. Más raro: aire.</td></tr>
    <tr><td>AIT</td><td>Déficit que <b>no pasa de 24 h</b>, totalmente reversible (amaurosis fugaz, afasia, debilidad).</td></tr>
    <tr><td>Infarto cerebral</td><td>Necrosis; déficit &gt; 24 h.</td></tr>
    <tr><td>Hemorrágico</td><td>Ruptura de seno venoso → hematoma <b>subdural</b> (trauma); vasos que inundan el <b>subaracnoideo</b> (aneurisma, MAV); vasos rectos profundos → <b>intraparenquimatoso</b> (hipertensión). Daño por masa y por hemoglobina (hierro y radicales libres: neuroinflamación y edema).</td></tr>
  </table>

  <h2>6. Escalas</h2>
  <p><b>Cincinnati:</b> asimetría facial, caída del brazo y habla anormal. <b>NIHSS</b> (0 a 42): 1a conciencia (0-3), 1b preguntas (0-2), 1c órdenes (0-2), 2 mirada (0-2), 3 campo visual (0-3), 4 cara (0-3), 5 brazos (0-4 cada lado), 6 piernas (0-4 cada lado), 7 ataxia (0-2), 8 sensibilidad (0-2), 9 lenguaje (0-3), 10 disartria (0-2), 11 extinción (0-2). Brazos: 10 s; piernas a 30°: 5 s. El libro cita NIHSS &lt; 4 o &gt; 25 como criterio de exclusión de fibrinólisis.</p>
  <p><b>Caso del libro:</b> varón de 59 años, diabético, hipertenso, fumador; hemiplejia y parálisis facial derechas y disartria; NIHSS 7; RM con infarto de 1,7 cm en sustancia blanca periventricular y ganglios basales izquierdos.</p>

  <div class="note"><b>Alertas del libro:</b> (1) Dice que Cincinnati "se puntúa de 0 a 42" con riesgo bajo &lt; 4, moderado 4-5 y alto &gt; 5: ese rango es el del NIHSS; Cincinnati evalúa solo tres signos. (2) Llama "infartos lacunares" al infarto hemodinámico o de frontera; son entidades distintas. (3) La ventana de tratamiento aparece como 3 h, 4 h y 4,5 h. (4) La regla PAM &lt; 50 isquémico / &gt; 150 hemorrágico es una simplificación del libro. (5) Con 1400 g y 50 mL/100 g/min el flujo sería ~700 mL/min, no 750. (6) Los títulos de las Tablas 105-107 están repetidos. (7) La numeración del NIHSS está incompleta y mezcla un criterio de exclusión en el ítem 11. (8) "Criterio de 24 h" para AIT: <b>Evidencia externa:</b> hoy se define por ausencia de infarto en imagen.</div>

  <h2>Puntos de alto rendimiento</h2>
  <ul>
    <li>Penumbra ≈ 25; irreversible 10-12 mL/100 g/min. Normal 50.</li>
    <li>PPC = PAM − PIC (nunca suma ni producto).</li>
    <li>ACA = pierna; ACM = cara-brazo, lenguaje, negligencia; ACP = visión y memoria; vertebrobasilar = tronco y cerebelo.</li>
    <li>Trombótico: ateroma, noche, AIT previos. Embólico: FA, inicio súbito, ACM.</li>
    <li>Hemorragia: sangre irrita meninges y eleva PIC; LCR xantocrómico.</li>
    <li>NIHSS: sumar ítems; un NIHSS menor de 4 o mayor de 25 se cita para excluir fibrinólisis.</li>
  </ul>
  `,
  questions: [
    {
      id: "36-0",
      stem: "Una mujer de 74 años con fibrilación auricular llega a las 3 horas de una hemiparesia derecha y afasia. La tomografía de perfusión muestra una caída del flujo sanguíneo cerebral (CBF) mayor que la del volumen sanguíneo cerebral (CBV), con un mismatch de 65 mL. ¿Qué representa el área de discordancia entre el CBF y el CBV?",
      options: [
        {
          t: "Tejido ya necrosado que no responde a la reperfusión, porque el CBV conservado indica que el vaso sigue permeable.",
          why: "Asumes que la discordancia marca tejido muerto. El volumen sanguíneo se conserva porque las arteriolas se dilatan para sostener el flujo dentro del vaso, y eso solo hace un tejido vivo; el núcleo infartado pierde flujo y volumen."
        },
        {
          t: "Tejido hipoperfundido pero aún viable, que puede recuperarse si se restablece el flujo en poco tiempo.",
          why: "El CBF bajo es la hipoperfusión y el CBV conservado es la vasodilatación autorreguladora: esa zona sigue viva y solo depende del tiempo. Los 65 mL de discordancia son el tejido que la reperfusión puede rescatar."
        },
        {
          t: "Zona de edema citotóxico por entrada de sodio y calcio, que evoluciona a necrosis aunque se reperfunda.",
          why: "Confundes edema con penumbra. El edema por entrada de sodio y calcio aparece cuando el flujo llegó a 10-12 mL y el daño ya es irreversible; un área que conserva volumen sanguíneo todavía no está en ese punto."
        },
        {
          t: "Área de flujo normal que no está en riesgo y que solo refleja la vasodilatación de las colaterales sanas.",
          why: "Supones que el área con flujo distinto está sana. Aquí el CBF está disminuido, y una zona con flujo normal no aparece como discordancia: la vasodilatación de las colaterales se expresa como CBV conservado dentro del área hipoperfundida."
        }
      ],
      correct: 1,
      rule: "CBF bajo con CBV conservado es tejido vivo en riesgo: el CBV avisa si el tejido ya se perdió."
    },
    {
      id: "36-1",
      stem: "Paciente femenina de 78 años con fibrilación auricular persistente y reemplazo valvular mitral y aórtico, que presenta de forma súbita afasia y hemiparesia derecha por oclusión del territorio de la arteria cerebral media izquierda. Desde la tríada de Virchow aplicada al territorio neurovascular, ¿cuál es el mecanismo principal del trombo de origen cardíaco?",
      options: [
        {
          t: "Lesión endotelial directa en el segmento M1 de la cerebral media por hipertensión crónica severa.",
          why: "Te quedas en el vaso cerebral: la placa y la hipertensión explican un trombo local, pero la paciente tiene dos prótesis y una aurícula que no contrae. El trombo se formó antes, en el corazón, y desde allí viajó."
        },
        {
          t: "Turbulencia sanguínea en la aurícula derecha, con embolización superficial a través de las prótesis.",
          why: "Cambias de cámara: la aurícula derecha envía sangre al pulmón, no al cerebro, y la turbulencia sola no basta sin una superficie trombogénica. La sangre que alcanza la cerebral media izquierda sale de la aurícula izquierda."
        },
        {
          t: "Estasis sanguínea en la aurícula izquierda dilatada y trombogenicidad superficial de las prótesis mecánicas.",
          why: "La fibrilación auricular elimina la contracción ordenada y deja estasis en la aurícula izquierda, mientras las prótesis añaden una superficie trombogénica. Estasis más superficie trombogénica son dos vértices de Virchow actuando en el mismo trombo."
        },
        {
          t: "Activación de la cascada de coagulación por hipoxia tisular difusa en la zona de penumbra isquémica.",
          why: "Inviertes la causa y el efecto: la hipoxia de la penumbra aparece después de la oclusión. El émbolo que tapó la cerebral media ya existía en el corazón, y la penumbra es su consecuencia."
        }
      ],
      correct: 2,
      rule: "Con fibrilación auricular y prótesis, el émbolo nace en la aurícula izquierda: estasis más superficie trombogénica."
    },
    {
      id: "36-2",
      stem: "Un hombre de 61 años con aterosclerosis carotídea derecha presenta un episodio de debilidad del brazo izquierdo. La angiotomografía muestra oclusión de la carótida interna derecha y el hemisferio derecho sigue perfundido por sangre que llega desde la circulación posterior. ¿Qué anastomosis del polígono de Willis explica esa compensación?",
      options: [
        {
          t: "La arteria comunicante anterior, que une las dos cerebrales anteriores y lleva sangre del lado izquierdo al derecho.",
          why: "Eliges la comunicante anterior, que une las dos cerebrales anteriores: sirve para compensar entre ambos territorios anteriores, no para recibir sangre de la circulación posterior. El aporte descrito viene del sistema vertebrobasilar."
        },
        {
          t: "La arteria comunicante posterior, que une la carótida interna con la cerebral posterior del mismo lado.",
          why: "La comunicante posterior conecta la carótida interna con la cerebral posterior; si la carótida se ocluye, la sangre de la circulación posterior entra por ahí y alcanza el territorio carotídeo que quedó sin flujo directo."
        },
        {
          t: "La arteria coroidea anterior, que irriga el uncus y el tracto óptico y conecta ambos territorios entre sí.",
          why: "Confundes una rama de la carótida con una anastomosis. La coroidea anterior nace de la carótida interna y riega el uncus, el tracto óptico y parte de la cápsula interna; no la comunica con la cerebral posterior."
        },
        {
          t: "La arteria oftálmica, rama de la carótida interna que irriga el globo ocular y no forma parte del polígono.",
          why: "Piensas en la rama que va al ojo. La oftálmica sale de la carótida interna y da flujo al globo ocular; está fuera del polígono de Willis y no es la puerta por donde entra la sangre de la circulación posterior."
        }
      ],
      correct: 1,
      rule: "Si el rescate viene de la circulación posterior, la puerta es la comunicante posterior; la anterior une las dos cerebrales anteriores."
    },
    {
      id: "36-3",
      stem: "Una mujer de 55 años con hemorragia intraparenquimatosa tiene una presión arterial media de 105 mmHg y una presión intracraneal de 40 mmHg. Seis horas después el hematoma crece, la presión intracraneal llega a 70 mmHg y la presión arterial media no cambia. ¿Cuál es la presión de perfusión cerebral inicial y final?",
      options: [
        {
          t: "145 mmHg y después 175 mmHg, porque el hematoma más grande aumenta el tono de los vasos.",
          why: "Sumas las dos presiones. La perfusión no puede aumentar cuando la caja craneal está más tensa: es la presión arterial media menos la intracraneal, y al subir la intracraneal el resultado baja."
        },
        {
          t: "65 mmHg y después 35 mmHg, porque la perfusión cae aunque la presión arterial no cambie.",
          why: "105 − 40 = 65 mmHg y 105 − 70 = 35 mmHg: el flujo depende de una diferencia, así que un hematoma que crece reduce la perfusión con la misma presión arterial. Con perfusión de cero el paciente muere."
        },
        {
          t: "−65 mmHg y después −35 mmHg, porque la perfusión se invierte pero el flujo se mantiene igual.",
          why: "Restas al revés, la intracraneal menos la arterial. Mientras la presión arterial media supere a la intracraneal el resultado es positivo, y aquí la supera en los dos momentos."
        },
        {
          t: "35 mmHg y después 65 mmHg, porque la perfusión mejora cuando el hematoma comprime las arteriolas.",
          why: "Inviertes el orden de los cálculos: los 35 mmHg aparecen al final, cuando la presión intracraneal sube a 70. Empezar con 35 supondría que el hematoma pequeño ya comprimía más que el grande."
        }
      ],
      correct: 1,
      rule: "PPC = PAM − PIC, y baja cuando la PIC sube: si la resta se hace al revés, cambia el signo."
    },
    {
      id: "36-4",
      stem: "Un hombre de 69 años con oclusión de la arteria cerebral media tiene 25 mL/100 g/min en la zona A y 11 mL/100 g/min en la zona B. Se consigue reperfundir a los 90 minutos. ¿Qué espera de cada zona y qué amenaza a la zona A si la reperfusión se retrasa?",
      options: [
        {
          t: "A ya es necrosis y B es penumbra; la amenaza para B es la entrada de sodio y calcio con edema.",
          why: "Inviertes las cifras: la penumbra está en 25 y la necrosis en 10-12. Con 11 mL el daño es irreversible aunque reperfundas a los 90 minutos, así que B ya está perdida."
        },
        {
          t: "Las dos son penumbra; la amenaza es una hemorragia por presión arterial mayor de 150 mmHg.",
          why: "Supones que toda hipoperfusión es recuperable. El umbral de 10-12 mL define daño irreversible sin importar el tiempo, y el riesgo hemorrágico aparece con presiones altas, no con la reperfusión de esta zona."
        },
        {
          t: "A es penumbra y B es necrosis; en A el lactato y la acidosis convierten el tejido vivo en necrosis.",
          why: "Con 25 mL el tejido está en penumbra y con 10-12 el daño es irreversible, así que A se puede salvar. Si el flujo no vuelve, la glucólisis anaerobia acumula lactato, acidifica la célula y ese segundo golpe la convierte en necrosis."
        },
        {
          t: "Las dos son irreversibles; la reperfusión solo agrega radicales libres y no rescata nada de tejido.",
          why: "Confundes estar por debajo de lo normal con estar muerto. Lo normal es 50 mL, pero el umbral de irreversibilidad es 10-12: la zona A está por encima y se recupera con reperfusión temprana."
        }
      ],
      correct: 2,
      rule: "25 es penumbra, 10-12 es necrosis y 50 es lo normal: con la cifra de flujo ya sabes qué tejido salvas."
    },
    {
      id: "36-5",
      stem: "Un hombre de 55 años sufre un shock hemorrágico por trauma abdominal y su presión arterial media cae a 40 mmHg durante 40 minutos. No hay traumatismo craneal ni déficit neurológico previo. ¿Qué ocurre en su circulación cerebral?",
      options: [
        {
          t: "El flujo se mantiene constante, porque la autorregulación funciona desde 40 hasta 150 mmHg.",
          why: "Estiras el límite inferior de la autorregulación hasta 40. El rango que sostiene el flujo es 50 a 150 mmHg de presión arterial media; por debajo de 50 la vasodilatación arteriolar ya no compensa."
        },
        {
          t: "Las arteriolas se contraen para subir la resistencia y sostener el flujo hasta 30 mmHg.",
          why: "Inviertes la respuesta: ante una caída de presión las arteriolas se dilatan para bajar la resistencia, no se contraen. Contraerlas reduciría todavía más el flujo de un cerebro que ya recibe poca sangre."
        },
        {
          t: "La presión tan baja rompe los vasos cerebrales y produce una hemorragia subaracnoidea.",
          why: "Atribuyes la hemorragia a la hipotensión. Los eventos hemorrágicos se relacionan con presiones muy altas, por encima de 150 mmHg; con 40 mmHg el riesgo es isquémico y no hemorrágico."
        },
        {
          t: "Sale del rango de 50-150 mmHg: la vasodilatación no alcanza y el flujo cae con riesgo isquémico.",
          why: "Con 40 mmHg se superó el límite inferior de autorregulación: la vasodilatación máxima no alcanza y el flujo cae. El tejido entra en riesgo isquémico aunque ningún trombo tape la arteria."
        }
      ],
      correct: 3,
      rule: "Entre PAM 50 y 150 el flujo se defiende solo; por debajo de 50 el cerebro isquémico no tiene quien lo compense."
    },
    {
      id: "36-6",
      stem: "Un hombre de 59 años, diabético, hipertenso y fumador, desarrolla en dos horas hemiplejia derecha, parálisis facial derecha y disartria, sin afasia, sin déficit visual y sin alteración de la conciencia. La resonancia muestra un infarto de 1,7 cm en la sustancia blanca periventricular y los ganglios basales izquierdos. ¿Qué territorio y qué tipo de síndrome explican el cuadro?",
      options: [
        {
          t: "Ramas lenticuloestriadas de la cerebral media izquierda: síndrome profundo, motor puro y sin signos corticales.",
          why: "Las lenticuloestriadas riegan ganglios basales, cápsula interna y caudado; allí las fibras motoras están juntas, así que hay hemiplejia completa sin afasia ni hemianopsia, que son funciones de la corteza."
        },
        {
          t: "Ramas corticales de la cerebral media izquierda: síndrome cortical, con afasia y déficit visual.",
          why: "Esperas síntomas corticales de la cerebral media. La corteza aporta afasia y déficit visual; el paciente no los tiene y la lesión de la imagen es profunda, en ganglios basales y sustancia blanca periventricular."
        },
        {
          t: "La cerebral anterior izquierda: síndrome cortical con predominio crural e incontinencia urinaria.",
          why: "Buscas el predominio crural de la cerebral anterior. Esa arteria riega el frontal medial y da debilidad de la pierna con incontinencia; aquí cara y brazo están tan afectados como la pierna y la lesión es profunda."
        },
        {
          t: "La cerebral posterior izquierda: síndrome talámico con hemianopsia homónima y amnesia.",
          why: "Colocas la lesión en el territorio posterior. La cerebral posterior da hemianopsia homónima y trastornos de memoria, y el enunciado descarta ambos; además el infarto descrito está en ganglios basales."
        }
      ],
      correct: 0,
      rule: "Déficit motor puro con imagen profunda: ramas lenticuloestriadas. Afasia o hemianopsia delatan corteza."
    },
    {
      id: "36-7",
      stem: "Un hombre de 71 años despierta sin ver la mitad derecha del campo visual de ambos ojos y olvida hechos recientes. Su fuerza, su sensibilidad y su lenguaje son normales. ¿Qué territorio está comprometido y por qué la pérdida visual es de medio campo y no de un ojo?",
      options: [
        {
          t: "La cerebral media izquierda: sus ramas lenticuloestriadas producen hemianopsia y amnesia sin déficit motor.",
          why: "Supones que las ramas profundas de la cerebral media dan visión. Esas ramas producen déficit motor por cápsula interna; la vía visual y el hipocampo reciben sangre de la cerebral posterior."
        },
        {
          t: "La oftálmica derecha: su oclusión produce pérdida visual de un solo ojo y alteraciones de la memoria.",
          why: "Buscas la pérdida de un ojo. La oftálmica irriga el globo ocular y su oclusión da amaurosis de ese ojo; aquí falta la mitad del campo en los dos ojos, que corresponde a una lesión por detrás del quiasma."
        },
        {
          t: "La cerebral anterior izquierda: el frontal medial produce hemianopsia homónima y amnesia por hipoperfusión.",
          why: "Te vas al frontal medial. La cerebral anterior da debilidad de la pierna, incontinencia o mutismo acinético; no explica la pérdida de un hemicampo ni la amnesia reciente."
        },
        {
          t: "La cerebral posterior izquierda: la corteza occipital y el hipocampo dan hemianopsia homónima y amnesia.",
          why: "La cerebral posterior riega el occipital y el hipocampo: la lesión occipital quita el hemicampo contralateral en los dos ojos y la del hipocampo altera la memoria reciente, sin tocar la fuerza."
        }
      ],
      correct: 3,
      rule: "Hemianopsia homónima con amnesia y fuerza normal es territorio posterior: el ojo está bien, falta corteza."
    },
    {
      id: "36-8",
      stem: "Un hombre de 63 años, fumador e hipertenso, presenta vértigo intenso, vómitos, diplopía, disfagia y marcha atáxica. El examen muestra déficits en ambos lados del cuerpo y paresia de pares craneales. Su lenguaje y su fuerza cortical son normales. ¿Qué circulación explica el cuadro y por qué los signos son bilaterales?",
      options: [
        {
          t: "La carótida por la cerebral media: da déficit contralateral, afasia o negligencia, nunca pares craneales.",
          why: "Piensas en el territorio carotídeo. La cerebral media da hemiparesia contralateral, afasia o negligencia, y no compromete pares craneales; el vértigo y la disfagia apuntan al tronco."
        },
        {
          t: "La vertebrobasilar: cerebelo y tronco concentran núcleos de pares craneales y vías largas de ambos lados.",
          why: "El tronco alberga los núcleos de los pares craneales y por él pasan vías largas de los dos lados, y el cerebelo explica la ataxia; por eso una lesión vertebrobasilar da signos bilaterales y de pares craneales."
        },
        {
          t: "La cerebral anterior: el frontal medial explica el vértigo y la diplopía por afectar núcleos del tronco.",
          why: "Ubicas el tronco en el territorio anterior. La cerebral anterior riega el frontal medial y da debilidad crural, incontinencia o mutismo acinético; no llega a los núcleos vestibulares."
        },
        {
          t: "La cerebral posterior: el tálamo y el mesencéfalo explican la ataxia y la disfagia por sus núcleos.",
          why: "Crees que la posterior se limita a tálamo y occipital. La cerebral posterior participa del polígono, pero el cuadro combina ataxia, disfagia y pares craneales, que son de tronco y cerebelo."
        }
      ],
      correct: 1,
      rule: "Vértigo, disfagia, diplopía y signos en los dos lados con lenguaje normal: vertebrobasilar, no carótida."
    },
    {
      id: "36-9",
      stem: "Una mujer de 38 años, sin fiebre, presenta cefalea de inicio explosivo, vómitos y rigidez de nuca, con Kernig positivo. La tomografía inicial no es concluyente. La punción lumbar muestra líquido cefalorraquídeo sanguinolento con sobrenadante amarillento, presión de apertura alta y glucosa normal. ¿Cuál es el diagnóstico más probable y por qué hay signos meníngeos sin infección?",
      options: [
        {
          t: "Meningitis bacteriana: los neutrófilos irritan las meninges y elevan la presión intracraneal.",
          why: "Esperas el patrón bacteriano. En esa meningitis el líquido es turbio, con neutrófilos y glucosa consumida; aquí hay sangre, glucosa normal y la paciente no tiene fiebre."
        },
        {
          t: "Meningitis viral: los linfocitos irritan las meninges y producen rigidez de nuca con glucosa normal.",
          why: "Te guía la glucosa normal. La viral tiene líquido claro con linfocitos, sin sangre ni sobrenadante amarillo, y no explica una cefalea que llega a su máxima intensidad en segundos."
        },
        {
          t: "Hemorragia subaracnoidea por ruptura de aneurisma: la sangre irrita las meninges y eleva la presión.",
          why: "La ruptura de un aneurisma vierte sangre al espacio subaracnoideo: la sangre irrita las meninges y produce rigidez de nuca y Kernig, y su ocupación eleva la presión intracraneal; el sobrenadante amarillo es hemoglobina degradada."
        },
        {
          t: "Reacción meníngea por la punción lumbar previa: irritación aséptica con alteración leve del líquido.",
          why: "Piensas en una irritación por el procedimiento. Ese cuadro aparece después de la punción y da alteraciones leves; aquí la cefalea explosiva precedió a la punción y el líquido tiene sangre y xantocromía."
        }
      ],
      correct: 2,
      rule: "Cefalea máxima en segundos con líquido sanguinolento y xantocromía es sangre meníngea, no inflamación."
    },
    {
      id: "36-10",
      stem: "Un hombre de 66 años con hemorragia intraparenquimatosa por crisis hipertensiva queda estable, sin nuevo sangrado en la tomografía de control. Cinco días después empeora, con más edema alrededor del hematoma y mayor déficit. ¿Qué mecanismo explica este deterioro tardío?",
      options: [
        {
          t: "La degradación de la hemoglobina libera hierro y radicales que activan neuroinflamación y edema.",
          why: "El hematoma no es solo masa: la hemoglobina se degrada, libera hierro libre y radicales oxidativos que activan la neuroinflamación y aumentan el edema, y por eso el paciente empeora aunque el sangrado esté detenido."
        },
        {
          t: "La reabsorción del coágulo reduce la presión y el tejido se expande otra vez por falta de compresión.",
          why: "Supones que el problema es la falta de compresión. El efecto de masa daña al inicio, pero el deterioro tardío con más edema tiene causa bioquímica; cuando el coágulo se reabsorbe el edema debería ceder, no crecer."
        },
        {
          t: "El hematoma comprime los vasos rectos y produce una nueva hemorragia subaracnoidea masiva.",
          why: "Buscas un nuevo sangrado. La tomografía de control no lo muestra, y la hemorragia subaracnoidea se produce por lesión de vasos que vierten al espacio subaracnoideo, no por compresión de los vasos rectos."
        },
        {
          t: "La hipoxia de la penumbra isquémica acumula lactato y acidifica el parénquima sano vecino.",
          why: "Aplicas el mecanismo de la isquemia a un evento hemorrágico. El lactato y la acidosis explican cómo la penumbra se vuelve necrosis cuando falta flujo; aquí hay sangre en el parénquima y el edema crece a su alrededor."
        }
      ],
      correct: 0,
      rule: "En hemorragia el daño sigue después de que el sangrado se detiene: hierro, radicales y neuroinflamación."
    },
    {
      id: "36-11",
      stem: "Un hombre de 58 años con estenosis carotídea ateromatosa parcial tuvo amaurosis fugaz del ojo derecho y debilidad de la mano izquierda. El déficit duró 36 horas, con mejoría parcial y una secuela leve en la mano. La imagen no muestra lesión en la zona limítrofe entre territorios. ¿Cómo se clasifica el episodio?",
      options: [
        {
          t: "Ataque isquémico transitorio: la amaurosis fugaz es típica de la estenosis carotídea y la secuela no cambia el nombre.",
          why: "Te quedas con el síntoma inicial. La amaurosis fugaz puede formar parte de un ataque transitorio, pero lo que clasifica es la duración y la recuperación completa; aquí hubo 36 horas y quedó una secuela."
        },
        {
          t: "Infarto hemodinámico: la estenosis reduce la presión distal y produce un déficit de duración variable.",
          why: "Confundes estenosis con infarto de frontera. El infarto hemodinámico ocurre en la zona limítrofe entre territorios arteriales principales, y la imagen lo descartó de forma expresa."
        },
        {
          t: "Ataque isquémico transitorio: la estenosis parcial produce un déficit transitorio aunque dure 36 horas.",
          why: "Aceptas que lo transitorio puede durar más de un día. El límite son 24 horas: si el déficit las excede y deja secuela, el tejido ya se necrosó y el cuadro es un infarto."
        },
        {
          t: "Infarto cerebral: el déficit pasó de 24 horas y dejó secuela, lo que implica necrosis del tejido.",
          why: "El déficit superó las 24 horas y dejó secuela, y eso significa necrosis. El ataque isquémico transitorio se define por un déficit que no excede ese límite y revierte por completo."
        }
      ],
      correct: 3,
      rule: "24 horas y reversibilidad completa marcan la frontera: si queda secuela, es infarto aunque haya mejorado."
    }
  ]
}
);
