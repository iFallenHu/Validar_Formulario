const firstName = document.getElementById('firstName');
const LastName = document.getElementById('LastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

function initApp() {
    addEventInElements(firstName);
    addEventInElements(LastName);
    addEventInElements(password);
    addEventInElements(email);

};

function addEventInElements(element) {
    element.addEventListener('blur', function () {
       if(element.type === 'text' || element.type === 'password') {
        validateEmptyFields(element);
       } else {
        isEmailValid(email);
       }
    })
}
initApp();