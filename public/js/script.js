const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");

const user = {message:""};

sendBtn.addEventListener("click", function (e) {

const userMessage = textbox.value;

    if(userMessage == ""){
        alert("Por favor escribe un mensaje");
    }else{
        
       let userMessageText = userMessage.trim();
       user.message = userMessageText;
       textbox.value = "";
    }

});
