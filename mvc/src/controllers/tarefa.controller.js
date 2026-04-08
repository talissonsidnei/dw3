// @file: src/CONTROLLER/tarefa.controller.js

// DADOS (array de tarefas) - movido para o controlador para ser acessado no processamento das requisições
const tarefas = [
  { id: 1, descricao: "Fazer compras", concluido: false },
  { id: 2, descricao: "Lavar o carro", concluido: false },
  { id: 3, descricao: "Estudar Fastify", concluido: true }
]


// Processa requisições da rota `GET /tarefas`
export async function listarTarefas(request, reply) {
  // LOG para indicar que a função foi chamada
  console.log("Controller: listarTarefas chamado")

  const { busca, concluido } = request.query
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
  return reply.send(resultado)
}


    // Processa requisições da rota `POST /tarefas`
    export async function criarTarefa(request, reply) { }

    // Processa requisições da rota `GET /tarefas/resumo`
    export async function obterResumo(request, reply) { }

    // Processa requisições da rota `GET /tarefas/:id`
    export async function obterTarefa(request, reply) { }

    // Processa requisições da rota `PATCH /tarefas/:id`
    export async function atualizarTarefa(request, reply) { }

    // Processa requisições da rota `PATCH /tarefas/:id/concluir`
    export async function concluirTarefa(request, reply) { }

    // Processa requisições da rota `DELETE /tarefas/:id`
    export async function removerTarefa(request, reply) { }