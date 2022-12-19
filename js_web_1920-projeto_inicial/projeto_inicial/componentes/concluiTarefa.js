const concluirTarefa = (atualiza, id) => {
    const itens = JSON.parse(localStorage.getItem('itens'))
    itens[id].concluida = !itens[id].concluida

    localStorage.setItem('itens', JSON.stringify(itens))

    atualiza()
}


const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}

export default BotaoConclui

