import { hendleNovoItem } from './componentes/criaTarefa.js'

import { carregaTarefa } from './componentes/carregaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', hendleNovoItem)

carregaTarefa()
