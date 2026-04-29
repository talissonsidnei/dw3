class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular
    this.saldo = Number(saldo)
  }

  depositar(valor) {
    this.saldo = this.saldo + Number(valor)
  }

  sacar(valor) {
    if (this.saldo - valor < 0) {
      console.log("Saldo insuficiente.")
    } else {
      this.saldo = this.saldo - valor
    }
  }

  exibirSaldo() {
    let texto = "Titular: " + this.titular
    texto += " | Saldo: R$ " + this.saldo.toFixed(2)
    console.log(texto)
  }
}

const contaA = new ContaBancaria("Ana", 200)
contaA.sacar(50)
contaA.exibirSaldo()

const contaB = new ContaBancaria("Carlos", 100)
contaB.depositar(20)
contaB.sacar(40)
contaB.exibirSaldo()