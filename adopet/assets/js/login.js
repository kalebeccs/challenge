const inputFocusBorder = (inputSenha) => {
    const input = document.getElementById(inputSenha)

    input.addEventListener('focusin', () => input.parentNode.classList.add('formulario__input--container-focus'))
    input.addEventListener('focusout', () => input.parentNode.classList.remove('formulario__input--container-focus'))
}

const showHiddenInput = (inputSenha, inputIcon) => {
    const input = document.getElementById(inputSenha),
          iconEye = document.getElementById(inputIcon)    
    
    iconEye.addEventListener('click', () => {
        if(input.type === 'password') {
            input.type = 'text'

            iconEye.innerHTML = ''
            iconEye.innerHTML = '<svg class="formulario__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
        } else {
            input.type = 'password'

            iconEye.innerHTML = ''
            iconEye.innerHTML = '<svg class="formulario__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23"y2="23"></line></svg>'
        }
    })
}

inputFocusBorder('input-senha-login')
showHiddenInput('input-senha-login', 'input-icon-login')