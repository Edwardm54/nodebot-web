var  sendBtn = document.getElementById("sendBtn");
var  textbox = document.getElementById("textbox");
var  chatContainer = document.getElementById("chatContainer");

var user = {message:""};


var arrayOfPossibleMessage = [
    {message:"hola", response:"¡Saludos estimado estudiante! En que puedo ayudarte?"},
    {message:"como estas?", response:"bien y tú?"},
    {message:"cual es tu nombre?", response:"Soy un chatbot de FING!"}
]


function sendMessage(userMessage) {

    var messageElement = document.createElement("div");
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px"

    messageElement.innerHTML = "<span>Estudiante 👨‍💻: </span>" +
        "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

// Funcion del ChatBot para responder mensajes

function chatbotResponse(userMessage){

    var chatbotmessage = "";

    if(userMessage == "hola"){
        chatbotmessage = "¡Saludos estimado estudiante! En que puedo ayudarte?";
    }


    var messageElement = document.createElement("div");

    messageElement.innerHTML = "<span>Chatbot 🤖: </span>"+
                                "<span>"+chatbotmessage+"</span>";

    chatContainer.appendChild(messageElement);  
}

// Funcion para Enviar el mensaje "Boton Enviar"

sendBtn.addEventListener("click", function (e) {

    var userMessage = textbox.value;

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

        var chatContainer = document.getElementById("chatContainer");
        chatContainer.innerHTML = "";
    });
});