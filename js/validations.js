function validateEmptyFields(input) {
    if(!input.value || input.value.length <3) {
        addErrors(input);
    } else {
        removeErrors(input);
    }
}

function isEmailValid(input) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if(!regex.test(input.value)) {
        addErrors(input);
    } else {
        removeErrors(input);
    }
}