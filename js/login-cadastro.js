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
const idEmailLogin = document.getElementById('idEmailLogin');
const idSenhaLogin = document.getElementById('idSenhaLogin');

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
let validEmailLogin = false;
let validSenhaLogin = false;

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
idEmailLogin.addEventListener('keyup', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(idEmailLogin.value)){
        idEmailLogin.style.outline = "#0E79C1";
        idEmailLogin.style.border = "2px solid #0E79C1";
        document.getElementById("erroEmailLogin").style.display = "none";
        validEmailLogin = true;
    } else {
        idEmailLogin.style.outline = "1px solid red";
        idEmailLogin.style.border = "1px solid red";
        document.getElementById("erroEmailLogin").style.display = "block";
        validEmailLogin = false;
    }
});

// Validação de Email (Cadastro)
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

// Validação de Senha (Login)
idSenhaLogin.addEventListener('keyup', () => {
    if (idSenhaLogin.value.length < 6){
        idSenhaLogin.style.outline = "1px solid red";
        idSenhaLogin.style.border = "1px solid red";
        document.getElementById("erroSenhaLogin").style.display = "block";
        validSenhaLogin = false;
    } else {
        idSenhaLogin.style.outline = "#0E79C1";
        idSenhaLogin.style.border = "2px solid #0E79C1";
        document.getElementById("erroSenhaLogin").style.display = "none";
        validSenhaLogin = true;
    }
});

// Validação de Senha (Cadastro)
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

// Botões
const buttonLogin = document.getElementById("btn-Login");
const buttonCadastro = document.getElementById("btn-cad");

// Função de login
function login(){
    if(validEmailLogin && validSenhaLogin) {
        window.location.href = "../index.html";
        alert("Login realizado com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente para seguir!");
    }
}

// Função de cadastro
function cadastrar(){
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
        nomeCad: idNome.value,
        emailCad: idEmail.value,
        telefoneCad: idNumTel.value,
        senhaCad: idSenha.value
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    if(validNome && validEmail && validTelefone && validSenha) {
        window.location.href = "../index.html";
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Preencha todos os campos corretamente para seguir!");
    }
}
