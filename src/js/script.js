const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

function ValidateForm(event) {
    
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('passwd').value
    const msg = document.getElementById('msg');


    function validateEmail() {
        if(email.target != ' ') {
            msg.innerHTML = ' ';
        } else {
            msg.innerHTML ='O campo email deve ser preenchido!'
        }
    }
    validateEmail()
        
    /*function validaLogin() {
        const user = users.find(u => u.email === email);
        
        if (user != undefined && user.email == email) {  
            if (password == 127) {
                console.log('Sucesso!');
                window.alert('Seja bem vindo!');
            } else {
                window.alert('Senha inválida! Tente novamente');
            }
        } else {
           // window.alert('Usuário não encontrado!');
        }
    }
    validaLogin();
    /*
        1. Referenciar elementos dos campos do formulário pelo ID;
        2. Verificar se a senha e o e-mail estão válidos;
        3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido;

        Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    */
}