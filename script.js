const dropDown = document.querySelector('.container__accordion')
let social = document.querySelector('#container_social')
let arrowDown = document.querySelector('#arrow_down')

const buttonBack = document.querySelector('#button_back')
const buttonsShiftNextContent = document.querySelectorAll('[data-shift-content]')
const buttonsShiftPrevContent = document.querySelectorAll('[data-shift-back]')
const buttonShiftNextReg = document.querySelectorAll('[data-shift-reg]')
const buttonShiftBackReg = document.querySelectorAll('[data-back-reg]')

const codeChangePassword = document.querySelectorAll('[tabindex]')

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