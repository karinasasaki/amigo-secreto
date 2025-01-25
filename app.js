let amigos = [];

function adicionarAmigo() {
	let amigo = document.querySelector("input").value;

	if (amigo.trim().length === 0) {
		alert("Por favor, insira um nome.");
	} else {
		amigos.push(amigo);
		limparCampo();
	}

	exibirAmigos();
}

function limparCampo() {
	let campo = document.querySelector("input");
	campo.value = "";
}

function exibirAmigos() {
	let ul = document.getElementById("listaAmigos");
	ul.innerHTML = "";
	amigos.forEach((nome) => {
		ul.innerHTML += `<li>${nome}</li>\n`;
	})
}

function sortearAmigo() {
	if (amigos.length > 0) {
		let numeroSorteado = Math.floor(Math.random() * amigos.length);
		let amigoSorteado = amigos[numeroSorteado];
		let ul = document.getElementById("resultado");
		ul.innerHTML = `<li>${amigoSorteado}</li>\n`;
	}
}