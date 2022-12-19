// const form = document.getElementById('novoItem'); 
// const lista = document.getElementById('lista');

// const itens = JSON.parse(localStorage.getItem("itens")) || []


// itens.forEach((element) => {
// 	criaElemento(element);
// });

// form.addEventListener('submit' , (event) => {
// 	event.preventDefault();
// 	// pega os valores dos campos
// 	const nome = event.target.elements['nome'];
// 	const quantidade = event.target.elements['quantidade'];

// 	// perguntar aos itens se o elemento existe
// 	const existe = itens.find(elemento => elemento.nome === nome.value);

// 	const itenAtual = {
// 		'nome': nome.value,
// 		'quantidade': quantidade.value,
// 	}

// 	if (existe) {
// 		itenAtual.id = existe.id;

// 		atualizaElemento(itenAtual);

// 		//Refatoração da condicional if else, atualizando um id para cada item
// 		itens[itens.findIndex(elemento => elemento.id === existe.id)] = itenAtual;

// 		itens.findIndex
// 	}else {
// 		itenAtual.id = itens[itens.length - 1] ? (itens[itens.length -1]).id + 1 : 0;

// 		criaElemento(itenAtual);

// 		itens.push(itenAtual)
// 	}

// 	// salva o elemento no localStorage
// 	localStorage.setItem("itens", JSON.stringify(itens));

// 	// deixa os campos vazios a cada submit
// 	nome.value = "";
// 	quantidade.value = "";
// });

// function criaElemento(item) {

// 	// cria a li
// 	const novoItem = document.createElement('li');

// 	// adiciona a classe item no li
// 	novoItem.classList.add('item');

// 	const numeroItem = document.createElement('strong');

// 	// envolve o número(quantidade) no estrong
// 	numeroItem.innerHTML = item.quantidade;

// 	// coloca um id='' no data
// 	numeroItem.dataset.id = item.id;	

// 	// coloca o estrong com a  quantidade como filho da li appendChild()
// 	novoItem.appendChild(numeroItem);

// 	// coloca o nome do input junto
// 	novoItem.innerHTML += item.nome;

// 	// coloca a li(novoItem) dentro da ul
// 	lista.appendChild(novoItem);


// 	novoItem.appendChild(botaoDeleta(item.id));


// 	// <=============MEU BOTAO DELETA =================>//

// 	// 	let p = document.createElement('p');
// 	// 	let x = document.textContent = 'X';

// 	// 	p.innerHTML = x;

// 	// 	novoItem.appendChild(p);

// 	// 	p.classList.add('style')


// 	// 	p.addEventListener('click', () => {

// 	// 		novoItem.remove('novoItem');
// 	// 	});
// }

// function atualizaElemento(item) {
// 	document.querySelector("[data-id ='" + item.id + "']").innerHTML = item.quantidade; 
// }

// function botaoDeleta(id) {
// 	const elementoBotao = document.createElement('button');
// 	elementoBotao.innerText = 'X';

// 	elementoBotao.addEventListener('click', function ()  {

// 		deletaElemento(this.parentNode,id);

// 	});

// 	return elementoBotao
// }

// function deletaElemento(tag, id) {

// 	// remover um item do array depois escrever no localStorage


// 	tag.remove();

// 	itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

// 	localStorage.setItem("itens", JSON.stringify(itens));
// }





const form = document.getElementById('novoItem');

const lista = document.getElementById('lista');

const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
	criaElemento(elemento);

});


form.addEventListener('submit' , (event) => {
	event.preventDefault();

	const nome = event.target.elements['nome'];
	const quantidade = event.target.elements['quantidade'];
	const existe = itens.find( elemento => elemento.nome === nome.value )

	const itenAtual = {
		'nome': nome.value,
		'quantidade': quantidade.value
	}

	if (existe) { 
		itenAtual.id = existe.id;

		atualizaElemento(itenAtual)

		itens[itens.findIndex(elemento => elemento.id === existe.id)] = itenAtual;

	}else {
		itenAtual.id = itens[itens.length -1] ? (itens[itens.length -1]	).id + 1 : 0;

		criaElemento(itenAtual);

		itens.push(itenAtual);
	}

	nome.value = ""
	quantidade.value = ""


	localStorage.setItem('itens',JSON.stringify(itens));

});

function criaElemento(item) {

	let li = document.createElement('li');
	li.classList.add('item')

	let strong = document.createElement('strong');

	strong.dataset.id = item.id;

	let numero = item.quantidade;

	strong.innerHTML = numero;

	li.appendChild(strong);

	li.innerHTML += item.nome;

	lista.appendChild(li);

	li.appendChild(botaoDeleta(item.id));
}

function atualizaElemento(item) {
	document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;		
}


function botaoDeleta(id) {
	const elementoBotao = document.createElement('button');

	elementoBotao.innerText = 'X';

	elementoBotao.addEventListener('click', function() {
		deletaElemento(this, id);

	});
	
	return elementoBotao
}

function deletaElemento(tag, id) {
	tag.parentNode.remove();

	itens.splice(itens.findIndex(elemento => elemento.id === id),1)

	localStorage.setItem('itens',JSON.stringify(itens));
}




