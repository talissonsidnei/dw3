class Timer {
  constructor(nome) {
    this.nome = nome
    this.tempo = 0
  }

  iniciar() {
    setInterval(() => {
      this.tempo = this.tempo + 1
      let saida = this.nome + ": " + this.tempo + "s"
      console.log(saida)
    }, 1000)
  }
}

const timer = new Timer("Cronômetro")
timer.iniciar()