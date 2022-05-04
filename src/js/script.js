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

/* Alert customizado */
const alert = document.getElementById('alert');
const alertMsg = document.getElementById('alert-msg');
const alertTitle = document.getElementById('alert-title');

function closeAlert() {
    alert.style.display='none';
}

function showAlert(title, msg, classe) {
    alert.style.display='flex';
    alertTitle.classList.add(classe);
    alertTitle.innerHTML = title;
    alertMsg.innerHTML = msg;
}

/* Validação do form + inputs */
function ValidateForm(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('passwd').value;

    if (email == '') {
        showAlert('Ops!', 'O email deve ser informado');
        return;
    }

    if (password == '') {
        showAlert('Ops!', 'A senha deve ser informada', 'error');
        return;
    }

    const user = users.find(u => u.email === email);

    if (user == undefined) {
        showAlert('Ops!', 'Usuário não encontrado');
        return;
    }

    if (password != 127) {
        showAlert('Ops!', 'Senha inválida, tente novamente', 'error');
        return;
    }

    showAlert('Sucesso!', 'Seja bem vindo ao RePrograma!', 'success');
}

    /*
        1. Referenciar elementos dos campos do formulário pelo ID;
        2. Verificar se a senha e o e-mail estão válidos;
        3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido;

        Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    */