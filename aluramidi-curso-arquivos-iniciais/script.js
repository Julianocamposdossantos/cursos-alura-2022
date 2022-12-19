function tocaSom(idElementoAudio) {
	const elemento = document.querySelector(idElementoAudio);

// decartado pois o else faz o seu papel

	// if(elemento === null) {
	// }

	if(elemento != null && elemento.localName === 'audio') {
		elemento.play();
	}else {
		console.error('Uncaught TypeError: (input) is indefined inixpect token');	
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

	const tecla = listaDeTeclas[contador];



	const instrumento = tecla.classList[1];

    // console.log(instrumento)

    const idAudio = `#som_${instrumento}`   

    tecla.onclick = function () {   
    	tocaSom(idAudio);  
    }

    tecla.onkeydown = function (event) {
    	if(event.code === 'Space' || event.code === 'Enter') {
    		tecla.classList.add('ativa');	
    	}
    }	


    tecla.onkeyup = function () {
    	tecla.classList.remove('ativa');
    }
}
