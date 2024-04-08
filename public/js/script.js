var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

// Función para remover acentos y normalizar texto

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

var user = { message: "" };

var arrayOfPossibleMessage = [
    { message: "hola", response: "¡Saludos estimado estudiante! ¿En qué puedo ayudarte?" },
    { message: "cual es la duracion de la carrera ingenieria en sistemas en la ujgh", response: "La carrera dura entre 4 a 5 años" },
    { message: "en cuanto esta la unidad credito?", response: "La U.C cuenta con un valor de: 15$ dolares"},
    // Región de los Pensum
    {message: "sistemas", response:"http://ujgh.edu.ve/wp-content/uploads/2020/10/Pensum-Escuela-de-Sistemas.pdf"},
    {message: "computacion", response:"http://ujgh.edu.ve/wp-content/uploads/2020/10/Pensum-Escuela-de-Computacion.pdf"}
];

// Función para que el usuario envíe un mensaje
function sendMessage(userMessage) {

    // Remover acentos del mensaje del usuario
    userMessage = removeAccents(userMessage);

    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "20px";

    messageElement.innerHTML = "<span>Estudiante 👨‍💻: </span>" +
        "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

// Función del ChatBot para responder mensajes

function chatbotResponse(userMessage) {
    var chatbotmessage = "";

    // Normaliza el mensaje del usuario para que esté en minúsculas y sin acentos
    var normalizedUserMessage = removeAccents(userMessage.toLowerCase());

    if (userMessage.length > 5 || normalizedUserMessage == "hola") {
        var result = arrayOfPossibleMessage.filter(function (val) {

            var normalizedValMessage = removeAccents(val.message.toLowerCase());
            return normalizedValMessage.includes(normalizedUserMessage);
        });

        if (result.length > 0) {
            var response = result[0].response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "no entendí el mensaje, disculpa.";
        }
    } else {
        chatbotmessage = "por favor envía un mensaje diferente.";
    }

    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<span>Asistente Virtual FING 🤖: </span>" +
        "<span>" + chatbotmessage + "</span>";

    // Delay del mensaje, CSS + JavaScript

    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.3},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)
}

// Función para enviar el mensaje "Botón Enviar"

sendBtn.addEventListener("click", function (e) {
    sendMessageAndResponse();
});

// Función para enviar el mensaje y obtener respuesta del chatbot

function sendMessageAndResponse() {
    var userMessage = textbox.value.trim();

    if (userMessage == "") {
        alert("Por favor escribe un mensaje");
    } else {
        sendMessage(userMessage);
        chatbotResponse(userMessage);
        textbox.value = ""; 
    }
}

// Botón de Reinicio

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reset-chat-btn").addEventListener("click", function () {
        var chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });
});

// Agregar evento de escucha al presionar la tecla "Enter" en el cuadro de texto

textbox.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        
        event.preventDefault();

        sendMessageAndResponse();
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