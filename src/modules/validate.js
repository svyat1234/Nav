const validate = () => {
    const form = document.querySelector('form')
    const inputName = document.querySelector('[name = name]')
    const inputTel = document.querySelector('[name = tel]')
    const inputs = document.querySelectorAll('input')
    const errorName = document.querySelector('.form-error-name')
    const errorTel = document.querySelector('.form-error-tel')
    // const input = document.querySelectorAll('input')

    let name = /[^a-zа-яё\s]/gi
    inputName.oninput = function() {
        this.value = this.value.replace(name, '');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (inputName.value.length === 0) {
            inputName.style.border = "1px solid tomato"
            errorName.textContent = "Заполните поле"
            errorName.style.display = "block"
        } else if (inputName.value.length < 2) {
            inputName.style.border = "1px solid tomato"
            errorName.textContent = "Введите больше одного символа"
            errorName.style.display = "block"
        }
        if(inputTel.value.length === 0) {
            inputTel.style.border = "1px solid tomato"
            errorTel.textContent = "Заполните поле"
            errorTel.style.display = "block"
        } else if (inputTel.value.length < 18) {
            inputTel.style.border = "1px solid tomato"
            errorTel.textContent = "Введите 10 символов"
            errorTel.style.display = "block"
        }
        console.log(inputTel.value.length);
    })
    inputs.forEach(input => {
        input.addEventListener('keydown', () => {
            if (document.location.pathname === "/Navigation/index.html" || document.location.pathname === "/Navigation/" || document.location.pathname === "/index.html") {
                input.style.border = "1px solid #fff"
                errorName.style.display = "none"
                errorTel.style.display = "none"
            } else {
                input.style.border = "1px solid #F1F1F1"
                errorName.style.display = "none"
                errorTel.style.display = "none"
            }
        })
    })
}

export default validate