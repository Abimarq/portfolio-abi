const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
   // value id="username"
    if(usernameValue === '') {

       errorValodation(username,'Preencha esse campo')
    } 
    else {
        successValidation(username)

    } 
    if(emailValue === '') 
    {
      errorValidation(email, 'O campo não pode estar vazio') 
    }
    else {
   successValidation(email)
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function errorValidation(input) {
    const formControl = input.parentElement;
     formControl.className = 'form-control success'
}