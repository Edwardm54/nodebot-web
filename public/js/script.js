var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

// Función para remover acentos y normalizar texto
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para enviar el mensaje al chatbot de Wit.ai y obtener la respuesta
async function sendMessageToWitAI(userMessage) {
    try {
        // Remover acentos del mensaje del usuario
        var normalizedUserMessage = removeAccents(userMessage.toLowerCase());

        // Llamada a la API de Wit.ai
        const response = await fetch(`https://api.wit.ai/message?v=20220101&q=${encodeURIComponent(normalizedUserMessage)}`, {
            headers: {
                'Authorization': 'Bearer 7LXQH3VFJYHIUBEE4GFLFGRH7TNTKQOL',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error al enviar mensaje a Wit.ai');
        }

        const data = await response.json();

         // Procesar la respuesta de Wit.ai
         var intent = data.intents[0].name; // Obtener el nombre de la intención
         console.log('Intención detectada:', intent); // Agregar este mensaje de consola para depurar

        // Determinar la respuesta basada en la intención
        var chatbotMessage = getResponseForIntent(intent);

        // Mostrar la respuesta en el chat
        var messageElement = document.createElement("div");
        messageElement.innerHTML = "<span>Asistente Virtual FING 🤖: </span>" +
            "<span>" + chatbotMessage + "</span>";
        messageElement.style.margin = "10px";
        // Añade un poco de espacio en blanco entre cada mensaje
        messageElement.style.marginTop = "20px";
        messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    } catch (error) {
        console.error('Error al enviar mensaje a Wit.ai:', error);
    }
}

// Función para obtener la respuesta del chatbot basada en la intención
function getResponseForIntent(intent) {
    switch (intent) {

        case 'saludos':
            return '¡Saludos estimado estudiante! Soy un asistente virtual diseñado para la facultad de ingenieria de la UJGH! Para iniciar indica: Lista informarme';
        
        case 'lista':
            return 'Nuevos Ingresos - Estudiantes Regulares - Inscricpiones Presenciales - Costo Unidad Credito(U.C) - Inicio de Clases - Pago - Noticias y Eventos - Pdf Sistemas - Pdf Computación - Eventos Especiales desde la Facultad - Consultas - Incidencias - Laboratorios - Contacto Principal - Decanato - Horarios de Comite - Horarios Docentes - Horarios Coordinadores de Eje - Asesorias y Consultas';

        case 'despedidas':
            return 'Hasta luego, ha sido un placer asistirte!';

        case 'agradecimiento':
            return 'Gracias a tí, si tienes alguna otra duda preguntame, estoy aqui para ayudar!';

        case 'redes_sociales':
            return 'Las redes sociales las puedes encontrar abajo del todo!';

        case 'carrera_sistemas':
            return 'La duración de la carrera de ingeniera en sistemas en la UJGH dura 3 años y medio.';

        case 'pdf_sistemas':
            return 'http://ujgh.edu.ve/wp-content/uploads/2020/10/Pensum-Escuela-de-Sistemas.pdf';

        case 'carrera_computacion':
             return 'al igual que la carrera de ingenieria en sistemas, la carrera de ingeneria en computación dura 3 años y medio.';
             
        case 'pdf_computacion':
            return 'http://ujgh.edu.ve/wp-content/uploads/2020/10/Pensum-Escuela-de-Computacion.pdf';

        case 'costo_unidad_credito':
            return 'El costo de la unidad credito actualmente es: 15$ dolares.';

        case 'nuevos_ingresos':
            return 'Actualmente las inscripciones para nuevos ingresos estan abiertas! Inicio de clases del PAR II-2024: Lunes 22 de abril!';

        case 'estudiantes_regulares':
            return 'Las inscripciones son a traves de la OpenWeb tienes en el enlace directo abajo del todo! Recuerda que solo es para estudiantes del 2do trimestre y el 11vo trimestre, del 18 al 21 de abril, desde las 8 AM hasta las 8 PM!';
        
        case 'inscripciones_presenciales':
            return 'Inscripciones presenciales para el 12vo trimestre y reincorporaciones: Sabado 20 de abril Sede UJGH.';

        case 'inicio_clases':
            return 'Inicio del PAR II-2024: Lunes 22 de abril.';

        case 'pago':
            return 'Esa información solicitala puedes pedirla aquí 📲: 0412-6842016';

         case 'noticias_eventos':
            return 'Puedes seguirnos en nuestras redes sociales para manternerte informado sobre nuestros eventos, las tienes abajo del todo!';
        
        case 'nuestra_institucion':
            return 'La Universidad José Gregorio Hernández es un elemento del Sistema Educativo Venezolano, nivel universitario, cuyo propósito, a través de las funciones académicas de la institución';
        
        case 'vision':
             return 'Ser reconocida como una de las mejores universidades de Venezuela por su excelencia académica y administrativa, capacidad para innovar y emprender, su compromiso con el desarrollo sostenible y sustentable y de ciudadanía ambiocéntrica y su infraestructura y tecnología.';
        
        // Servicios de la facultad

        case 'eventos_especiales_desde_la_facultad':
            return 'Nuestra facultad imparte charlas para todos nuestros estudiantes, mantente al tanto de nuestras redes sociales, las puedes encontrar abajo del todo!';

        case 'consultas':
            return 'Si tienes alguna duda que requiera más informacion dirigete al decanato de la facultad.';

        case 'incidencias':
             return 'Estimado estudiante, te recomiendo dirigirte al decanato de nuestra facultad para presentar algún caso de incidencias por parte de algún docente de nuestra institución.';

             case 'informarme':
                return 'Puedes hablar con nuestra decana la profesora Barbara Ordoñez, si no se encuentra alli espera fuera del decanato por favor, sigue las dormativas de la institución, gracias.';

        case 'laboratorios':
            return 'Los laboratorios de computación se encuentran en el hall de la institucion, mano derecha siguiendo por el pasillo.';

         case 'contacto_principal':
            return 'Centro de contacto 📲: 0412-6842016';

        case 'decanato':
            return 'Por la entrada principal cruzas a la derecha, luego en el area del cafetin cruzas a la izquierda y sigue derecho por el pasillo al final estara la entrada a otros salones de clases, allí encontraras el decanato de la faculta de ingenieria!';
                
        case 'horarios_de_comite_y_resultados_de_los_comite_por_sesion':
             return 'Martes de 7:30 AM a 10:00 AM - Jenny Quiñonez - Angel Casanova';   
             
        case 'horarios_docentes':
             return 'Los horarios de nuestros docentes los puedes encontrar en la oficina de Control Docente ya que esa información no la poseo actualmente...';
             
        case 'horarios_coordinadores_de_eje':
             return 'Redes y telecomunicaciones: Owen Henriquez 10:50 AM a 1:10 PM Día Martes (4 horas) Ciencias Naturales: Manuel Fereira Martes de 13:30 PM a 14:50 PM (2 horas) Jueves de 7:30 AM a 8:50 AM(2 horas) Computación y sistemas de información: Luis Reyes Jueves de 7:30 AM a 10:10 AM (4 horas) Algoritmo y procesamiento de datos: Jenny Quiñonez Miércoles de 1:30 PM a 4.20 PM. (4 horas) Electronica y Fisica: Luis Reyes Lunes de 7:30 AM a 10.30 AM (4 horas)';
            
        case 'asesorias_consultas_coordinadores_de_eje':
             return 'Redes y telecomunicaciones: Owen Henriquez 10:50 AM a 1:10 PM Día Martes (4 horas) Ciencias Naturales: Manuel Fereira Martes de 13:30 PM a 14:50 PM (2horas) Jueves de 7:30 AM a 8:50 AM (2 horas) Computación y sistemas de información: Luis Reyes Jueves de 7:30 AM a 10.10 AM (4 horas) Algoritmo y procesamiento de datos: Jenny Quiñonez Miércoles de 1:30 PM a 4.20 PM (4 horas) Electronica y Fisica: Luis Reyes Lunes de 7:30 AM a 10.30 AM (4 horas)';

        // Agrega más casos según las intenciones de tu chatbot en Wit.ai
        default:
            return 'Lo siento, no entendí tu mensaje.';
    }
}

// Función para que el usuario envíe un mensaje
function sendMessage(userMessage) {
    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "left";
    messageElement.style.margin = "10px";
    messageElement.style.marginTop = "20px";
    messageElement.style.color = "#008AFC"

    messageElement.innerHTML = "<span>Estudiante 👨‍💻: </span>" +
        "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

// Event listener para el botón de enviar
sendBtn.addEventListener("click", function (e) {
    var userMessage = textbox.value.trim();
    if (userMessage !== "") {
        sendMessage(userMessage);
        sendMessageToWitAI(userMessage); // Llamar a la función para enviar el mensaje a Wit.ai
        textbox.value = "";
    }
});

// Botón de Reinicio

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reset-chat-btn").addEventListener("click", function () {
        var chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });
});


// Event listener para la tecla "Enter"
textbox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        var userMessage = textbox.value.trim();
        if (userMessage !== "") {
            event.preventDefault();
            sendMessage(userMessage);
            sendMessageToWitAI(userMessage); // Llamar a la función para enviar el mensaje a Wit.ai
            textbox.value = "";
        }
    }
});

// Limpiar el valor del cuadro de texto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reset-chat-btn").addEventListener("click", function () {
        var chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });

    textbox.value = "";
});