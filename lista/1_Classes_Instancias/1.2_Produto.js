class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome
    this.preco = Number(preco)
    this.estoque = estoque
  }

  disponivel() {
    if (this.estoque <= 0) {
      return false
    }
    return true
  }

  exibir() {
    let status

    if (this.disponivel()) {
      status = "Em estoque"
    } else {
      status = "Fora de estoque"
    }

    let saida = this.nome + " — R$ " + this.preco.toFixed(2)
    saida += " — " + status

    console.log(saida)
  }
}

const p1 = new Produto("Notebook", 3500, 5)
const p2 = new Produto("Fone de ouvido", 150, 0)

p1.exibir()
p2.exibir()