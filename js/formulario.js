const login = document.querySelector('#login');
const register = document.querySelector('#register');
const registerLink = document.querySelector('#register-link');
const loginLink=document.querySelector('#login-link');
const forgetPassword = document.querySelector('#forgetPassword');
const passwordLink = document.querySelector('#password-link');
const loginLinkk=document.querySelector('#login-linkk');

registerLink.addEventListener('click', () => mostrarocultarlogreg()) 


loginLink.addEventListener('click', () => mostrarocultarlogreg()) 

passwordLink.addEventListener('click', () => mostrarocultarlogregg()) 
loginLinkk.addEventListener('click', () => mostrarocultarlogregg()) 

const mostrarocultarlogreg=() => {
    login.classList.toggle('hidden')
    register.classList.toggle('hidden')
}

const mostrarocultarlogregg=() => {
    login.classList.toggle('hidden')
    forgetPassword.classList.toggle('hidden')
}