function validateEmptyFields(input, elements) {
    if(!input.value || input.value.length <3) {
        addErrors(input, elements);
        
    } else {
        removeErrors(input, elements);
    }
}

function isEmailValid(input, elements) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if(!regex.test(input.value)) {
        addErrors(input, elements);
    } else {
        removeErrors(input, elements);
    }
}