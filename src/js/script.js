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
const alertIcon = document.getElementById('alert-icon');

function closeAlert() {
    alert.style.display='none'; 
}

function showAlert(icon, title, msg, classe) {
    alertIcon.classList.add(classe); // Modifica a cor do ícone do alerta
    alertIcon.innerHTML = icon // Modifica o ícone exibido no alerta do Material Icons
    alertTitle.innerHTML = title; // Modifica o conteúdo do título do alerta
    alertMsg.innerHTML = msg; // Modifica o conteúdo da mensagem do alerta
    alert.style.display='flex';
}

/* Escondendo campos de login e mostrando link para logout */
function hideLogin() {
    const login = document.getElementById('cadastro');
    const logout = document.getElementById('logout');

    login.classList.add('hide');
    logout.classList.add('show');
}

/* Validação do form + inputs */
function ValidateForm(event) {

    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwd').value;

    /* Validação do campo email vazio */
    if (email == '') {
        showAlert('error', 'Ops!', 'O email deve ser informado', 'error');
        return;
    }
    /* Validação do campo senha vazio */
    if (password == '') {
        showAlert('error', 'Ops!', 'A senha deve ser informada', 'error');
        return;
    }
    /* Validação do email de cadastro X informado no input */
    const user = users.find(u => u.email === email);

    if (user == undefined) {
        showAlert('error', 'Ops!', 'Usuário não encontrado', 'error');
        return;
    }
    /* Validação da senha informada no input */
    if (password != 127) {
        showAlert('error', 'Ops!', 'Senha inválida, tente novamente', 'error');
        return;
    }
    window.scrollTo(0,0) // Retorna a página do início
    hideLogin(); // Esconde o form de login e adiciona um link para logout na nav
    showAlert('done', 'Sucesso!', 'Seja bem-vindo(a) ao RePrograma!', 'success');
}