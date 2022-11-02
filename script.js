var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').Value;

    if(name.length == 0){
        nameError.innerHTML = 'first name required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = 'write first name';
        return false;
    }
    nameError.innerHTML = 'valid'
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').Value;

    if(phone.length == 0){
        phoneError.innerHTML = 'phone number required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone number is 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML ='only digits';
        return false;
    }

    phoneError.innerHTML = 'valid';
    return true; 
}
function validateEmail(){
    var email = document.getElementById('contact-email').Value;
    
    if(email.length == 0){
        emailError.innerHTML = 'email required';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML= 'email Invalid';
        return false;
    }

    emailError.innerHTML = 'valid';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').Value;

    if(password.length == 0){
        passwordError.innerHTML = 'password required';
        return false;
    }
    if(password.length !== 10){
        passwordError.innerHTML = 'password is 10 digits';
        return false;
    }
    if(!password.match(/^[0-9]{10}$/)){
        passwordError.innerHTML ='only digits';
        return false;
    }

    passwordError.innerHTML = 'valid';
    return true; 
}

var password = "12345";

            function passcheck(){
                if(document.getElementById('pass1').value != password){
                    alert('wrong password, Try again');
                    return false;
                }
                if(document.getElementById('pass1').value !== password){
                    alert('Correct Password, click ok to enter webpage');
            }
        }