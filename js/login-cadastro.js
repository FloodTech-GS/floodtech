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
