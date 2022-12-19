import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const hendleNovoItem = evento => {
  evento.preventDefault()

  const itens = JSON.parse(localStorage.getItem('itens')) || []

  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  const calendario = document.querySelector('[data-form-date]')

  const data = moment(calendario.value)

  const horario = data.format('HH:mm')

  const dataFormatada = data.format('DD/MM/YYYY')

  const concluida = false

  const dados = {
    valor,
    dataFormatada,
    concluida,
    horario
  }

  const itensAtualizados = [...itens, dados]

  localStorage.setItem('itens', JSON.stringify(itensAtualizados))

  input.value = ' '
  carregaTarefa(data)
}

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement('li')
  const conteudo = `<p class="content">${horario} * ${valor}</p>`

  if (concluida) {
    tarefa.classList.add('done')
  }
  tarefa.classList.add('task')

  tarefa.innerHTML = conteudo

  tarefa.appendChild(BotaoConclui(carregaTarefa, id))
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

  return tarefa
}
