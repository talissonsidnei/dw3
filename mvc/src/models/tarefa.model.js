// @file: src/models/tarefa.model.js

let tarefas = [
  { id: 1, descricao: "Fazer compras", concluido: false },
  { id: 2, descricao: "Lavar o carro", concluido: false },
  { id: 3, descricao: "Estudar Fastify", concluido: true }
]

// LISTAR (com filtros)
export function listar({ busca, concluido }) {
  let resultado = tarefas

  if (busca) {
    resultado = resultado.filter(t =>
      t.descricao.toLowerCase().includes(busca.toLowerCase())
    )
  }

  if (concluido !== undefined) {
    const concluidoBool = concluido === 'true'
    resultado = resultado.filter(t => t.concluido === concluidoBool)
  }

  return resultado
}

// CRIAR
export function criar(descricao) {
  const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1
  const novaTarefa = { id: novoId, descricao, concluido: false }

  tarefas.push(novaTarefa)
  return novaTarefa
}

// RESUMO
export function resumo() {
  const total = tarefas.length
  const concluidas = tarefas.filter(t => t.concluido).length

  return {
    total,
    concluidas,
    pendentes: total - concluidas
  }
}

// BUSCAR POR ID
export function buscarPorId(id) {
  return tarefas.find(t => t.id === id)
}

// ATUALIZAR
export function atualizar(id, dados) {
  const index = tarefas.findIndex(t => t.id === id)
  if (index === -1) return null

  tarefas[index] = { ...tarefas[index], ...dados, id }
  return tarefas[index]
}

// ALTERNAR CONCLUSÃO
export function alternarConcluido(id) {
  const tarefa = tarefas.find(t => t.id === id)
  if (!tarefa) return null

  tarefa.concluido = !tarefa.concluido
  return tarefa
}

// REMOVER
export function remover(id) {
  const index = tarefas.findIndex(t => t.id === id)
  if (index === -1) return false

  tarefas.splice(index, 1)
  return true
}