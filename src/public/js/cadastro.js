window.onload = () => {

    const form = document.getElementsByClassName('form-cadastro')

    const name = document.getElementById('name');
    const tel = document.getElementById('tel');
    const email = document.getElementById('email');
    const password = document.getElementById('cadastrar-password');
    const passwordCheck = document.getElementById('passwordCheck');
    const publicplace = document.getElementById('publicplace');
    const number = document.getElementById('number');
    const complement = document.getElementById('complement');
    const neighborhood = document.getElementById('neighborhood');
    const reference = document.getElementById('reference');
    const zipcode = document.getElementById('zipcode');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        if(password.value !== passwordCheck.value){
            alert('esta diferent')
        }else{
            alert('esta igual')
        }
    })

    name.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.name').innerHTML = '<strong style="color: red;">Campo "Nome" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.name').innerHTML = ''
        }

    });

    tel.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.tel').innerHTML = '<strong style="color: red;">Campo "Número de contato" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.tel').innerHTML = ''
        }

    });

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

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.password').innerHTML = '<strong style="color: red;">Campo "Senha" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.password').innerHTML = ''
        }

    });

    passwordCheck.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.passwordCheck').innerHTML = '<strong style="color: red;">Campo obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.passwordCheck').innerHTML = ''
        }
    });


    publicplace.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.publicplace').innerHTML = '<strong style="color: red;">Campo "Logradouro" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.publicplace').innerHTML = ''
        }
    });

    number.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.number').innerHTML = '<strong style="color: red;">Campo "Número" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.number').innerHTML = ''
        }

    });

    complement.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.complement').innerHTML = '<strong style="color: red;">Campo "Complemento" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.complement').innerHTML = ''
        }

    });

    neighborhood.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.neighborhood').innerHTML = '<strong style="color: red;">Campo "Bairro" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.neighborhood').innerHTML = ''
        }

    });

    reference.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.reference').innerHTML = '<strong style="color: red;">Campo "Referêcia" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.reference').innerHTML = ''
        }

    });

    zipcode.addEventListener('keyup', function (event) {
        const input = event.target;
        const value = event.target.value;

        if(value.length <= 0) {
            input.classList.add('--has-error');
            document.querySelector('div.zipcode').innerHTML = '<strong style="color: red;">Campo "Cep" obrigatório.</strong>'
        } else {
            input.classList.remove('--has-error');
            document.querySelector('div.zipcode').innerHTML = ''
        }

    });

}