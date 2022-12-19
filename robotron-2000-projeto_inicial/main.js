// let controles = document.querySelectorAll('.controle-ajuste');


// for(let i of controles) {

// }

let controle  = document.querySelectorAll("[data-controle]");


controle.forEach((elemento) => {	elemento.addEventListener('click', () => {
		manipulaDados(event.target.dataset.controle , event.target.parentNode);
	});
});

// for(let i of controle) {
//   console.log(i);
// }

// ====================	o jeito dele   ==============
	// braco.value = parseInt(braco.value) + 1;

	// =============== meu jeito ==================

	// braco.value ++;

	function manipulaDados(operacao, controle) {
		const peca = controle.querySelector('[data-contador]');

		if (operacao === '+') {
			peca.value ++;
		} else {
			if(peca.value > 0) {	
				peca.value --;
			}
		}
	}


// let rafa = {
//   nome: "rafa",
//   vitorias: 3,
//   empates: 4,
//   derrotas: 1,
//   pontos: 0
// };

// let paulo = {
//   nome: "paulo",
//   vitorias: 1,
//   empates: 8,
//   derrotas: 3,
//   pontos: 0
// };

// let gui = {
//   nome: "gui",
//   vitorias: 4,
//   empates: 8,
//   derrotas: 9,
//   pontos: 0
// };

// rafa.pontos = calculaPontos(rafa);
// paulo.pontos = calculaPontos(paulo);
// gui.pontos = calculaPontos(gui);

// function calculaPontos(jogador) {
//   let pontos = jogador.vitorias * 3 + jogador.empates;
//   return pontos;
// }
// let jogadores = [rafa, paulo, gui];

// function exibeJogadoresNaTela(jogadores) {
//   var elemento = "";

//   for (let i = 0; i < jogadores.length; i++) {
//     elemento += "<tr><td>" + jogadores[i].nome + "</td>";
//     elemento += "<td>" + jogadores[i].vitorias + "</td>";
//     elemento += "<td>" + jogadores[i].empates + "</td>";
//     elemento += "<td>" + jogadores[i].derrotas + "</td>";
//     elemento += "<td>" + jogadores[i].pontos + "</td>";
//     elemento +=
//       "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
//     elemento +=
//       "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
//     elemento +=
//       "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
//     elemento += "</tr>";
//   }

//   let tabelaJogadores = document.getElementById("tabelaJogadores");
//   tabelaJogadores.innerHTML = elemento;
// }

// exibeJogadoresNaTela(jogadores);

// function adicionarVitoria(i) {
//   var jogador = jogadores[i];
//   jogador.vitorias++;
//   jogador.pontos = calculaPontos(jogador);
//   exibeJogadoresNaTela(jogadores);
// }

// function adicionarEmpate(i) {
//   var jogador = jogadores[i];
//   jogador.empates++;
//   jogador.pontos = calculaPontos(jogador);
//   exibeJogadoresNaTela(jogadores);
// }

// function adicionarDerrota(i) {
//   var jogador = jogadores[i];
//   jogador.derrotas++;
//   exibeJogadoresNaTela(jogadores);
// }
