const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

 //verifica se o nome está vazio 
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

//verificar se o email está preenchido e valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;  
    }

//verificar se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

//Verifica se a situação foi selecionada    
    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação");
        return;
    }

//verifica se a mensagem foi preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

// se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

// função que valida o e-mail

function isEmailValid(email){
// Criar um regex para validar o email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    );
    
    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

// função que valida a senha 
function validatePassword(password, minDigits) {
    if(password.lenght >= minDigits) {
        return true;
    }

    return false;
}