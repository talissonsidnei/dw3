// @file: src/routes/tarefa.routes.js

import {
  listarTarefas,
  criarTarefa,
  obterResumo,
  obterTarefa,
  atualizarTarefa,
  concluirTarefa,
  removerTarefa
} from '../controllers/tarefa.controller.js'

export default async function tarefaRoutes(server, options) {

  server.get('/tarefas', listarTarefas)

  server.post('/tarefas', criarTarefa)

  server.get('/tarefas/resumo', obterResumo)

  server.get('/tarefas/:id', obterTarefa)

  server.patch('/tarefas/:id', atualizarTarefa)

  server.patch('/tarefas/:id/concluir', concluirTarefa)

  server.delete('/tarefas/:id', removerTarefa)
}