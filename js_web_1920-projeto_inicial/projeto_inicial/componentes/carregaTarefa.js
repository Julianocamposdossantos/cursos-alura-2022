import { ordenaDatas, removeDatasRepetidadas } from '../service/data.js'
import { criaData } from './criaData.js'

export const carregaTarefa = () => {
  const lista = document.querySelector('[data-list]')
  const itensCadastrados = JSON.parse(localStorage.getItem('itens')) || []

  lista.innerHTML = ''

  const datasUnicas = removeDatasRepetidadas(itensCadastrados)
  ordenaDatas(datasUnicas)

  datasUnicas.forEach(dia => {
    lista.appendChild(criaData(dia))
  })
}
