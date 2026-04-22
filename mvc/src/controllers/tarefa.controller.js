// @file: src/controllers/tarefa.controller.js

import * as model from '../models/tarefa.model.js'

// GET /tarefas
export async function listarTarefas(request, reply) {
  const resultado = model.listar(request.query)
  return reply.send(resultado)
}

// POST /tarefas
export async function criarTarefa(request, reply) {
  const { descricao } = request.body

  if (!descricao || descricao.trim() === '') {
    return reply.status(400).send({
      status: 'error',
      message: 'A descrição da tarefa é obrigatória'
    })
  }

  const nova = model.criar(descricao)
  return reply.status(201).send(nova)
}

// GET /tarefas/resumo
export async function obterResumo(request, reply) {
  return reply.send(model.resumo())
}

// GET /tarefas/:id
export async function obterTarefa(request, reply) {
  const id = Number(request.params.id)
  const tarefa = model.buscarPorId(id)

  if (!tarefa) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
  }

  return reply.send(tarefa)
}

// PATCH /tarefas/:id
export async function atualizarTarefa(request, reply) {
  const id = Number(request.params.id)
  const tarefa = model.atualizar(id, request.body)

  if (!tarefa) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
  }

  return reply.send(tarefa)
}

// PATCH /tarefas/:id/concluir
export async function concluirTarefa(request, reply) {
  const id = Number(request.params.id)
  const tarefa = model.alternarConcluido(id)

  if (!tarefa) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
  }

  return reply.send(tarefa)
}

// DELETE /tarefas/:id
export async function removerTarefa(request, reply) {
  const id = Number(request.params.id)
  const removido = model.remover(id)

  if (!removido) {
    return reply.status(404).send({ status: 'error', message: 'Tarefa não encontrada' })
  }

  return reply.status(204).send()
}