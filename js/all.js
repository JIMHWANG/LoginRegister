function Login() {
    var LoginAccountPassord = {};
    LoginAccountPassord.email = accountStr.value;
    LoginAccountPassord.password = passowordStr.value;

    var Loginxhr = new XMLHttpRequest();
    Loginxhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    Loginxhr.setRequestHeader('Content-type', 'application/json');
    var LoginAccountPassordStr = JSON.stringify(LoginAccountPassord);
    Loginxhr.send(LoginAccountPassordStr);

    Loginxhr.onload = function () {
        ShowResult(JSON.parse(Loginxhr.responseText));
    }

}

function Register() {
    var RegisterAccountPassord = {};
    RegisterAccountPassord.email = accountStr.value;
    RegisterAccountPassord.password = passowordStr.value;

    var Registerxhr = new XMLHttpRequest();
    Registerxhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
    Registerxhr.setRequestHeader('Content-type', 'application/json');
    var RegisterAccountPassordStr = JSON.stringify(RegisterAccountPassord);
    Registerxhr.send(RegisterAccountPassordStr);

    Registerxhr.onload = function () {
        ShowResult(JSON.parse(Registerxhr.responseText));
    }

}

function ShowResult(feedback) {
    if (feedback.success == "true") {
        alert(feedback.message);
    } else {
        alert(feedback.message);
    }
}

var LoginBtn = document.querySelector('.login');
var RegisterBtn = document.querySelector('.register');
var accountStr = document.querySelector('.account');
var passowordStr = document.querySelector('.password');

LoginBtn.addEventListener('click', Login, false);
RegisterBtn.addEventListener('click', Register, false);