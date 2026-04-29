class Aluno {
  constructor(nome) {
    this.nome = nome
    this.notas = []
  }

  adicionarNota(nota) {
    this.notas[this.notas.length] = nota
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0
    }

    let total = 0

    for (let i = 0; i < this.notas.length; i++) {
      total += this.notas[i]
    }

    let media = total / this.notas.length
    return media
  }

  situacao() {
    let media = this.calcularMedia()

    if (media >= 6) {
      return "Aprovado"
    } else {
      return "Reprovado"
    }
  }

  exibir() {
    let media = this.calcularMedia().toFixed(2)
    let texto = this.nome + " | Média: " + media + " | " + this.situacao()
    console.log(texto)
  }
}

const a1 = new Aluno("Ana")
a1.adicionarNota(8)
a1.adicionarNota(7)
a1.adicionarNota(7.5)

a1.exibir()