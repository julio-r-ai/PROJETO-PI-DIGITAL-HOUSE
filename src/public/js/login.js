window.onload = () => {

    const email = document.getElementById('email-login');
    const password = document.getElementById('password-login');

    email.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.email').innerHTML = '<strong style="color: red;">Campo "E-mail" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.email').innerHTML = ''
        }

    });

    password.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 5) {
            input.classList.add('--has-error');
            document.querySelector('div.password1').innerHTML = '<strong style="color: red;">*Campo "Senha" obrigatório.</strong>'
            document.querySelector('div.password2').innerHTML = '<strong style="color: red;">*É preciso ter no minimo 6 caractere.</strong>'
        }else{
            input.classList.remove('--has-error');
            document.querySelector('div.password1').innerHTML = ''
            document.querySelector('div.password2').innerHTML = ''
        }

    });

}