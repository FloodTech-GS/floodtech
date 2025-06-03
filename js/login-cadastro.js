// variaveis dos fomularios
const idIrPCadastro = document.getElementById('idIrPCadastro');
const idIrPLogin = document.getElementById('idIrPLogin');
const idFormLogin = document.getElementById('idFormLogin');
const idFormCad = document.getElementById('idFormCad');

// variaveis dos inputs
const idNome = document.getElementById('idNome');
const idNumTel = document.getElementById('idNumTel');
const idEmail = document.getElementById('idEmail');
const idSenha = document.getElementById('idSenha');
const idEmailCad = document.getElementById('idEmailCad');
const idSenhaCad = document.getElementById('idSenhaCad');

// mudança de formularios
idIrPCadastro.addEventListener('click', () => {
    idFormLogin.style.display = 'none';
    idFormCad.style.display = 'flex';
});

idIrPLogin.addEventListener('click', () => {
    idFormLogin.style.display = 'flex';
    idFormCad.style.display = 'none';
});

let validNome = false;
let validTelefone = false;
let validEmail = false;
let validSenha = false;
let validEmailCad = false;
let validSenhaCad = false;

// Validação de Nome
idNome.addEventListener('keyup', () => {
    if (idNome.value.length < 3){
        idNome.style.outline = "1px solid red";
        idNome.style.border = "1px solid red";
        document.getElementById("erroNome").style.display = "block";
        validNome = false;
    } else {
        idNome.style.outline = "#0E79C1";
        idNome.style.border = "2px solid #0E79C1";
        document.getElementById("erroNome").style.display = "none";
        validNome = true;
    }
});

// Validação de Telefone
idNumTel.addEventListener('keyup', () => {
    if (idNumTel.value.length != 11 || /[A-Za-z]/.test(idNumTel.value)){
        idNumTel.style.outline = "1px solid red";
        idNumTel.style.border = "1px solid red";
        document.getElementById("erroTelefone").style.display = "block";
        validTelefone = false;
    } else {
        idNumTel.style.outline = "#0E79C1";
        idNumTel.style.border = "2px solid #0E79C1";
        document.getElementById("erroTelefone").style.display = "none";
        validTelefone = true;
    }
});

// Validação de Email (Login)
idEmail.addEventListener('keyup', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idEmail.value)){
        idEmail.style.outline = "#0E79C1";
        idEmail.style.border = "2px solid #0E79C1";
        document.getElementById("erroEmail").style.display = "none";
        validEmail = true;
    } else {
        idEmail.style.outline = "1px solid red";
        idEmail.style.border = "1px solid red";
        document.getElementById("erroEmail").style.display = "block";
        validEmail = false;
    }
});

// Validação de Email (Cadastro)
idEmailCad.addEventListener('keyup', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idEmailCad.value)){
        idEmailCad.style.outline = "#0E79C1";
        idEmailCad.style.border = "2px solid #0E79C1";
        document.getElementById("erroEmailCad").style.display = "none";
        validEmailCad = true;
    } else {
        idEmailCad.style.outline = "1px solid red";
        idEmailCad.style.border = "1px solid red";
        document.getElementById("erroEmailCad").style.display = "block";
        validEmailCad = false;
    }
});

// Validação de Senha (Login)
idSenha.addEventListener('keyup', () => {
    if (idSenha.value.length < 6){
        idSenha.style.outline = "1px solid red";
        idSenha.style.border = "1px solid red";
        document.getElementById("erroSenha").style.display = "block";
        validSenha = false;
    } else {
        idSenha.style.outline = "#0E79C1";
        idSenha.style.border = "2px solid #0E79C1";
        document.getElementById("erroSenha").style.display = "none";
        validSenha = true;
    }
});

// Validação de Senha (Cadastro)
idSenhaCad.addEventListener('keyup', () => {
    if (idSenhaCad.value.length < 6){
        idSenhaCad.style.outline = "1px solid red";
        idSenhaCad.style.border = "1px solid red";
        document.getElementById("erroSenhaCad").style.display = "block";
        validSenhaCad = false;
    } else {
        idSenhaCad.style.outline = "#0E79C1";
        idSenhaCad.style.border = "2px solid #0E79C1";
        document.getElementById("erroSenhaCad").style.display = "none";
        validSenhaCad = true;
    }
});

// Botões
const buttonLogin = document.getElementById("buttonLogin");
const buttonCadastro = document.getElementById("buttonCadastro");

// Função de login
function login(){
    if(validEmail && validSenha) {
        window.location.href = "../index.html";
        alert("Login realizado com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente para seguir!");
    }
}

// Função de cadastro
function cadastro(){
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
        nomeCad: idNome.value,
        emailCad: idEmailCad.value,
        telefoneCad: idNumTel.value,
        senhaCad: idSenhaCad.value
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    if(validNome && validEmailCad && validTelefone && validSenhaCad) {
        window.location.href = "../index.html";
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente para seguir!");
    }
}
