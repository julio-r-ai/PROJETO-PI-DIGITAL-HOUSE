window.addEventListener('load', ()=>{

    let reservationForm = document.querySelector('form.form-cadastro');

    reservationForm.addEventListener('submit', (event)=>{

        let errosMessages = [];

        let fieldName = document.getElementById('name');
        if(fieldName.value == ''){
            errosMessages.push('O campo nome nao foi prenchido')
        };

        let fieldTelefone = document.getElementById('telefone');
        if(fieldTelefone.value == ''){
            errosMessages.push('O campo Telefone nao foi prenchido')
        };

        let fieldEmail = document.getElementById('email');
        if(fieldEmail.value == ''){
            errosMessages.push('O campo email nao foi prenchido')
        };

        let fieldCpf = document.getElementById('cpf');
        if(fieldCpf.value == ''){
            errosMessages.push('O campo CPF nao foi prenchido')
        };

        let fieldPassword = document.getElementById('cadastrar-password');
        if(fieldPassword.value == ''){
            errosMessages.push('O campo Senha nao foi prenchido')
        };

        let fieldConferirPassword = document.getElementById('conferir-password');
        if(fieldConferirPassword.value == ''){
            errosMessages.push('O campo conferir senha nao foi prenchido')
        };

        if(errosMessages.length > 0) {
            event.preventDefault();
        }else{
            alert('Formulario enviado...')
        };

        let ulErrors = document.querySelector('div#error ul');
        for(let i = 0; i < errosMessages.length; i++){

            ulErrors.innerHTML = '<li>' + errosMessages[i] +'</li>'; 

        }

    })

});