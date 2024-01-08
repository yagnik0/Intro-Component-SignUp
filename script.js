'use strict';

const form = document.querySelector('.form-fill');
const FirstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email-id');
const password = document.querySelector('#password');
const inputs = document.querySelectorAll('input');
const error = document.querySelectorAll('.error');
const errorPara = document.querySelectorAll('.error-para');



form.addEventListener('submit',(e) => {
    e.preventDefault();

    if (FirstName.value === '') {
        seterror (0)
    } else {
        clearerror (0)
    }


    if (lastName.value === '' ) {
        seterror (1)
    } else {
        clearerror (1)
    }
    
    if (email.value === '' ) {
        seterror(2);
    } else {
        checkEmail()
    }

    if (password.value === '') {
        seterror (3)
    } else {
        clearerror (3)
    }
})

function seterror(i) {
    error[i].classList.remove('hidden')
    errorPara[i].classList.remove('hidden')
    inputs[i].style.border = "3px solid red"
}

function clearerror(i) {
    error[i].classList.add('hidden')
    errorPara[i].classList.add('hidden')
    inputs[i].style.border = "1px solid grey"
}

function checkEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) {
        errorPara[2].innerHTML = "Looks like this is not an email";
        seterror(2)
    } else {
        errorPara[2].innerHTML = "Email address cannot be empty"
        clearerror(2)
    }
}



