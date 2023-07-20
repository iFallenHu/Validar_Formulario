const firstName = document.getElementById('firstName');
const LastName = document.getElementById('LastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msgError = 'Enter a valid value for';

function initApp() {
    addEventInElements(firstName, `${msgError} First Name`);
    addEventInElements(LastName, `${msgError} Last Name`);
    addEventInElements(password, `${msgError} Password Name`);
    addEventInElements(email, 'look like this is not an email');

};

function addEventInElements(element, message) {
    element.addEventListener('blur', function () {   
       if(element.type === 'text' || element.type === 'password') {
        validateEmptyFields(element, createObject(element, message));
       } else {
        isEmailValid(element, createObject(element, message));
       }
    })
}

function createObject(input, message) {
    console.log()
    return {
        containerErrors: input.parentNode.children[1],
        message: message
    }
}

initApp();