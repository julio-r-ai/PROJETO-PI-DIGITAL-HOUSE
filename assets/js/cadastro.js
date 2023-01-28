window.addEventListener('load', ()=>{

    let reservationForm = document.querySelector('form.form-cadastro');

    reservationForm.addEventListener('submit', (event)=>{
        

        let avisoCamposPreenchido = document.getElementById('avisoCamposPreenchido');

        /* Campo nome */

        let nomeAviso = document.getElementById('nomeAviso');
        let nomeInput = document.getElementById('name');

        if(nomeInput.value.length == 0){
            event.preventDefault();

            avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
            nomeAviso.innerHTML = '*Nome completo';
            nomeAviso.style.color = 'red';
        }

        /* Campo contato */

        let telAviso = document.getElementById('telAviso');
        let telInput= document.getElementById('telefone');

        if(telInput.value.length == 0){
            event.preventDefault();

            avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
            telAviso.innerHTML = '*Numero de contato';
            telAviso.style.color = 'red';
        }

        /* Campo email */

        let emailAviso = document.getElementById('emailAviso');
        let emailInput= document.getElementById('email');

        if(emailInput.value.length == 0){
            event.preventDefault();

            avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
            emailAviso.innerHTML = '*Email';
            emailAviso.style.color = 'red';
        }

         /* Campo CPF */

         let cpfAviso = document.getElementById('cpfAviso');
         let cpfInput= document.getElementById('cpf');
 
         if(cpfInput.value.length == 0){
             event.preventDefault();
 
             avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
             cpfAviso.innerHTML = '*CPF';
             cpfAviso.style.color = 'red';
         }
        
        /* Campo senha */

        let senhaAviso = document.getElementById('senhaAviso');
        let senhaInput= document.getElementById('password');

        if(senhaInput.value.length == 0){
            event.preventDefault();

            avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
            senhaAviso.innerHTML = '*Senha';
            senhaAviso.style.color = 'red';
        }

        /* Campo CPF */

        let conferirAviso = document.getElementById('conferirAviso');
        let conferirInput= document.getElementById('conferir-password');

        if(conferirInput.value.length == 0){
            event.preventDefault();

            avisoCamposPreenchido.innerHTML = '<p>' + 'Preencha todos os campos' + '</p>';
            conferirAviso.innerHTML = '*Digite novamente sua senha';
            conferirAviso.style.color = 'red';
        }

        
        
       

    })

});