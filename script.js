const dropDown = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
const buttonBack = document.querySelector('#button_back')
let arrowDown = document.querySelector('#arrow_down')
const containerAccordion = document.querySelector('#accordion')
const goBack = document.querySelector('#goBack')
const createAccount = document.querySelector('#create__account')

const codeChangePassword = document.querySelectorAll('[tabindex]')

const phoneInput = document.querySelector('.phone__input')
const passwordInput = document.querySelector('.password__input')

// contents
let sectionPassword = document.querySelector('#section__password');
let sectionNumber = document.querySelector('#section__number')
let sectionChangePassword = document.querySelector('#section__changePassword')
let sectionChangePasswordAccess = document.querySelector('#changePasswordAccess')
let sectionNumberReg = document.querySelector('#section__number_reg')
let sectionVerificationNumber = document.querySelector('#sectionVerificationNumber')
let registrationPasswordAccess = document.querySelector('#registrationPasswordAccess')

// buttons
let logIn = document.querySelector('#logIn');
let confirm = document.querySelector('#confirm')
const forgotPassword = document.querySelector('#forgot__password')
const goBackChange = document.querySelector('#goBackChange');
const changePasswordButton = document.querySelector('#changePasswordButton')
const goBackFromChangeAccess = document.querySelector('#goBackFromChangeAccess')
const goBackFromReg = document.querySelector('#goBackFromReg')
const RegButton = document.querySelector('#RegButton')
const goBackFromVerification = document.querySelector('#goBackFromVerification')
const numberIsVerificated = document.querySelector('#numberIsVerificated')
const goBackFromRegistrationPasswordAccess  = document.querySelector('#goBackFromRegistrationPasswordAccess')

dropDown.addEventListener('click', () => {
    social.classList.toggle('animate')
    arrowDown.classList.toggle('arrow__animate')
})

buttonBack.addEventListener('click', () => {
    window.history.back()
})

codeChangePassword.forEach((element) => {
    element.addEventListener('input', () => {
        if (element.value.length != 0) {
            element.nextElementSibling.focus();
        }
    })
})

codeChangePassword.forEach((element) => {
    element.addEventListener('input', () => {
        if (element.value.length == 0) {
            element.previousElementSibling.focus();
        }
    })
})

logIn.addEventListener('click', (event) => {
    event.preventDefault();
    sectionNumber.classList.add('display__none')
    sectionPassword.classList.remove('display__none')
    sectionChangePassword.classList.add('display__none')
})

goBack.addEventListener('click', (event) => {
    event.preventDefault();
    sectionNumber.classList.remove('display__none')
    sectionPassword.classList.add('display__none')
    sectionChangePassword.classList.add('display__none')
})

forgotPassword.addEventListener('click', () => {
    sectionPassword.classList.add('display__none')
    sectionNumber.classList.add('display__none')
    sectionChangePassword.classList.remove('display__none')
})

goBackChange.addEventListener('click', () => {
    sectionPassword.classList.remove('display__none')
    sectionChangePassword.classList.add('display__none')
})

changePasswordButton.addEventListener('click', (event) => {
    event.preventDefault();
    sectionChangePassword.classList.add('display__none')
    sectionChangePasswordAccess.classList.remove('display__none')
})

goBackFromChangeAccess.addEventListener('click', () => {
    sectionChangePassword.classList.remove('display__none')
    sectionChangePasswordAccess.classList.add('display__none')
})

createAccount.addEventListener('click', (event) => {
    event.preventDefault();
    sectionNumber.classList.add('display__none')
    sectionNumberReg.classList.remove('display__none')
})

goBackFromReg.addEventListener('click', () => {
    sectionNumber.classList.remove('display__none')
    sectionNumberReg.classList.add('display__none')
})

RegButton.addEventListener('click', (event) => {
    event.preventDefault();
    sectionNumberReg.classList.add('display__none')
    sectionVerificationNumber.classList.remove('display__none')
})

goBackFromVerification.addEventListener('click', (event) => {
    sectionNumberReg.classList.remove('display__none')
    sectionVerificationNumber.classList.add('display__none')
})

numberIsVerificated.addEventListener('click', () => {
    sectionVerificationNumber.classList.add('display__none')
    registrationPasswordAccess.classList.remove('display__none')
})

goBackFromRegistrationPasswordAccess.addEventListener('click', () => {
    registrationPasswordAccess.classList.add('display__none')
    sectionVerificationNumber.classList.remove('display__none')
})
