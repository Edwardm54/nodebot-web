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
    { message: "en cuanto esta la unidad credito?", response: "La unidad crédito está en 15$" },
    { message: "precio de la unidad credito?", response: "Cada U.C está en 15$" }
];

// Función para que el usuario envíe un mensaje
function sendMessage(userMessage) {
    // Remover acentos del mensaje del usuario
    userMessage = removeAccents(userMessage);

    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

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
            // Normaliza el mensaje posible para comparar sin acentos
            var normalizedValMessage = removeAccents(val.message.toLowerCase());
            return normalizedValMessage.includes(normalizedUserMessage);
        });

        if (result.length > 0) {
            var response = result[0].response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "no entendi tu mensaje disculpe";
        }
    } else {
        chatbotmessage = "por favor envie un mensaje diferente";
    }

    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<span>Asistente Virtual FING 🤖: </span>" +
        "<span>" + chatbotmessage + "</span>";

    // Delay del mensaje, CSS + JavaScritp
    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in",opacity:0.3},{opacity:1}],{duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },1000)

    
}

// Función para enviar el mensaje "Botón Enviar"
sendBtn.addEventListener("click", function (e) {
    var userMessage = textbox.value;

    if (userMessage == "") {
        alert("Por favor escribe un mensaje");
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});

// Botón de Reinicio
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("reset-chat-btn").addEventListener("click", function () {
        var chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });
});