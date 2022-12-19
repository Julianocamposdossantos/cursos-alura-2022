import { Tarefa } from './criaTarefa.js'

export const criaData = data => {
  const itens = JSON.parse(localStorage.getItem('itens')) || []
  const dataMoment = moment(data, 'DD/MM/YYYY')
  const dataTopo = document.createElement('li')
  const conteudo = `<p class='content-data'>${dataMoment.format(
    'DD / MM / YYYY'
  )}</p>`

  dataTopo.innerHTML = conteudo

  itens.forEach((elemento, id) => {
    const dia = moment(elemento.dataFormatada, 'DD/MM/YYYY')
    const diff = dataMoment.diff(dia)
    if (diff === 0) {
      dataTopo.appendChild(Tarefa(elemento, id))
    }
  })
  return dataTopo
}
