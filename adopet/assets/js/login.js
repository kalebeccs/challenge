import { inputFocusBorder, showHiddenInput } from "./inputSenha.js"
import { valida } from "./validaLogin.js"

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', event => valida(event.target))
})

inputFocusBorder('input-senha-login')
showHiddenInput('input-senha-login', 'input-icon-login')