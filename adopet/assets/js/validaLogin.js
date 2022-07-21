const mensagensDeErro = {
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 8 e 20 caracteres, deve conter pelo menos uma letra maiuscula, uma letra minuscula e um numero.'
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
]

export function valida(input) {
    if(input.validity.valid) {
        clearErrorMessage(input)
    } else {
        showErrorMessage(input)
    }
}

function clearErrorMessage(input) {
    if(input.type === 'email') {
        input.parentElement.classList.remove('formulario__field--invalido')
        input.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.parentElement.parentElement.classList.remove('formulario__field--invalido')
        input.parentElement.parentElement.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = ''
    }
}

function showErrorMessage(input) {
    if(input.type === 'email') {
        input.parentElement.classList.add('formulario__field--invalido');
        input.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = errorMessage(input);
    } else {
        input.parentElement.parentElement.parentElement.classList.add('formulario__field--invalido');
        input.parentElement.parentElement.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = errorMessage(input);
    }
}

function errorMessage(input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[input.type][erro];
        }
    });

    return mensagem;
};