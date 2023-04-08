const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

formContato.addEventListener('submit', (event) => {
	event.preventDefault();
	const nome = document.getElementById('nome').value;
	const telefone = document.getElementById('telefone').value;

	adicionarContato(nome, telefone);
	formContato.reset();
});

function adicionarContato(nome, telefone) {
	const linhaContato = document.createElement('tr');
	linhaContato.innerHTML = `
		<td>${nome}</td>
		<td>${telefone}</td>
	`;
	tabelaContatos.appendChild(linhaContato);
}
