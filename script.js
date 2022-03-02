const dropDown = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let arrowDown = document.querySelector('#arrow_down')

const buttonBack = document.querySelector('#button_back')
const buttonsShiftNextContent = document.querySelectorAll('[data-shift-content]')
const buttonsShiftPrevContent = document.querySelectorAll('[data-shift-back]')
const buttonShiftNextReg = document.querySelectorAll('[data-shift-reg]')
const buttonShiftBackReg = document.querySelectorAll('[data-back-reg]')
const buttonConfirm = document.querySelector('[data-error-button]')

const codeChangePassword = document.querySelectorAll('[tabindex]')

const passwordInput = document.querySelectorAll('[data-password]')
const errorPassword = document.querySelector('[data-error="2"]')
const eye = document.querySelectorAll('[data-show-password]')

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

buttonsShiftNextContent.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.currentTarget;
        let previousContent = document.querySelector(`[data-content='${Number(target.dataset.shiftContent)}']`)
        previousContent.classList.add('display__none')
        let content = document.querySelector(`[data-content='${Number(target.dataset.shiftContent) + 1}']`)
        content.classList.remove('display__none')
    })
})

buttonsShiftPrevContent.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        let content = document.querySelector(`[data-content='${Number(target.dataset.shiftBack)}']`)
        content.classList.add('display__none')
        let previuosContent = document.querySelector(`[data-content='${Number(target.dataset.shiftBack - 1)}']`)
        previuosContent.classList.remove('display__none')
    })
})

buttonShiftNextReg.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        let previousContent = document.querySelector(`[data-content-reg='${Number(target.dataset.shiftReg)}']`)
        previousContent.classList.add('display__none')
        let content = document.querySelector(`[data-content-reg='${Number(target.dataset.shiftReg) + 1}']`)
        content.classList.remove('display__none')
    })
})

buttonShiftBackReg.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        let content = document.querySelector(`[data-content-reg='${Number(target.dataset.backReg)}']`)
        content.classList.add('display__none')
        let previuosContent = document.querySelector(`[data-content-reg='${Number(target.dataset.backReg - 1)}']`)
        previuosContent.classList.remove('display__none')
    })
})

// eye

eye.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.currentTarget;
        let inputElement = document.querySelector(`[data-password='${target.dataset.showPassword}']`)
        element.classList.toggle('eye__path')
        if (inputElement.getAttribute('type') == 'password') {
            inputElement.setAttribute('type', 'text')
        }
        else if (inputElement.getAttribute('type') == 'text') {
            inputElement.setAttribute('type', 'password')
        }
    })
})

// error validation
buttonConfirm.addEventListener('click', (event) => {
    let inputValues = document.querySelector('[data-error="1"]').value
    let inputSecondValues = document.querySelector('[data-error="2"]').value
    if (inputValues != inputSecondValues) {
        errorPassword.classList.add('input__err')
    }
    else {
        errorPassword.classList.add('input__acs')
    }
})

