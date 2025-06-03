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
