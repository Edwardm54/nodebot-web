var  sendBtn = document.getElementById("sendBtn");
var  textbox = document.getElementById("textbox");
var  chatContainer = document.getElementById("chatContainer");


var user = {message:""};


var arrayOfPossibleMessage = [
    {message:"hola", response:"¡Saludos estimado estudiante! En que puedo ayudarte?"},
    {message:"cual es la duracion de la carrera ingenieria en sistemas en la ujgh", response:"La carrera dura entre 4 a 5 años"},
    {message:"en cuanto esta la unidad credito?", response:"La unidad credito esta en 15$"},
    {message:"precio de la unidad credito?", response:"Cada U.C esta en 15$"}
]

// Funcion para que el usuario envie un mensaje

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

     if (userMessage.length  > 5 || userMessage == "hola"){
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if(result.length > 0){
            var response = result[0].response;
            chatbotmessage = response;
        
        }else{
            chatbotmessage = "no entendi tu mensaje disculpe"
        }
    }else{
        chatbotmessage = "por favor envie un mensaje diferente"
    }


    var messageElement = document.createElement("div");

    messageElement.innerHTML = "<span>Asistente Virtual FING 🤖: </span>"+
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