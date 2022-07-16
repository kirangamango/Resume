// const userName = querySelector('.input-name').value;
// const userPhnNo = querySelector('.input-phnno').value;
// const userEmail = querySelector('.input-email').value;
const warningText = document.querySelector('.warning-text');
const btn = document.querySelector('.btn');
console.log(warningText);

const isUpperCase = (string) => /^[A-Z]*$/.test(string);

const isNumerical = (string) => /^[0-9]*$/.test(string);

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

const validateName = function(userName) {
    if(userName.length >=8) {
        if(isUpperCase(userName)) {
            if(isNumerical(userName)) {
                if(containsSpecialChars(userName)) {
                    warningText.style.display = 'none';
                }
                else {
                    warningText.style.display = 'block';
                    warningText.innerHTML = 'The password must contain atleast one special character';
                }
            }
            else {
                warningText.style.display = 'block';
                warningText.innerHTML = 'The password must contain atleast one numerical character';
            }
        }
        else {
            warningText.style.display = 'block';
            warningText.innerHTML = 'The password must contain atleast one capital letter';
        }
    }
    else {
        warningText.style.display = 'block';
        warningText.innerHTML = 'The password length must greater than 8';
    }
};

const validatePhnNo = (phnNo) => {
    if(!(phnNo.match(/^[0-9]*$/) && phnNo.length === 10)) {
        warningText.style.display = 'block';
        warningText.innerHTML = 'The phoone no must have only 10 digit number'
    }
    else {
        warningText.style.display = 'none';
    }
};

const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    if(!regEx.test(email)) {
        warningText.style.display = 'block';
        warningText.innerHTML = 'The email must be in correct format'
    }
    else {
        warningText.style.display = 'none';
    }
};

btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    validateName(document.querySelector('.input-name').value);
    validatePhnNo(document.querySelector('.input-phnno').value);
    validatePhnNo(document.querySelector('.input-email').value);

    console.log(warningText.innerHTML);

    if(warningText.innerHTML === '') {
        // btn.href = 'welcome.html';
    }
})