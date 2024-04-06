const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

const user = { message: "" };


function sendMessage(userMessage) {

    const messageElement = document.createElement("div");
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px"

    messageElement.innerHTML = "<span>Estudiante: </span>" +
        "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

// Funcion del ChatBot para responder mensajes

function chatbotResponse(userMessage){

    const chatbotmessage = "";

    if(userMessage == "hi"){
        chatbotmessage = "hello";
    }

    const messageElement = document.createElement("div");

    messageElement.innerHTML = "<span>Chatbot: </span>"+
                                "<span>"+chatbotmessage+"</span>";

    chatContainer.appendChild(messageElement);  
}

// Funcion para Enviar el mensaje "Boton Enviar"

sendBtn.addEventListener("click", function (e) {

    const userMessage = textbox.value;

    if (userMessage == "") {
        alert("Por favor escribe un mensaje");
    } else {

        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText)
    }

});

// Boton de Reinicio

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("reset-chat-btn").addEventListener("click", function () {

        const chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });
});