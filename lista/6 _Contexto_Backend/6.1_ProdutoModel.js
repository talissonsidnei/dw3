export default class ProdutoModel {
  #lista;
  #idAtual;

  constructor() {
    this.#lista = [
      { id: 1, nome: "Notebook", preco: 3500 },
      { id: 2, nome: "Mouse", preco: 80 },
      { id: 3, nome: "Teclado", preco: 200 }
    ];
    this.#idAtual = 4;
  }

  async findAll() {
    return this.#lista;
  }

  async findById(id) {
    for (let item of this.#lista) {
      if (item.id === id) {
        return item;
      }
    }
    return undefined;
  }

  async create(dados) {
    let novoProduto = {
      id: this.#idAtual,
      nome: dados.nome,
      preco: dados.preco
    };

    this.#idAtual = this.#idAtual + 1;
    this.#lista.push(novoProduto);

    return novoProduto;
  }

  async delete(id) {
    let posicao = -1;

    for (let i = 0; i < this.#lista.length; i++) {
      if (this.#lista[i].id === id) {
        posicao = i;
        break;
      }
    }

    if (posicao < 0) {
      return false;
    }

    this.#lista.splice(posicao, 1);
    return true;
  }
}