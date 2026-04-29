export default class ProdutoModel {
  #listaProdutos;
  #contadorId;

  constructor() {
    this.#listaProdutos = [
      { id: 1, nome: "Notebook", preco: 3500 },
      { id: 2, nome: "Mouse", preco: 80 },
      { id: 3, nome: "Teclado", preco: 200 }
    ];
    this.#contadorId = 4;
  }

  static validar(dados) {
    let erros = [];

    if (!dados || !dados.nome || dados.nome.trim() === "") {
      erros[erros.length] = "Nome é obrigatório.";
    }

    if (!dados || typeof dados.preco !== "number" || dados.preco <= 0) {
      erros[erros.length] = "Preço deve ser maior que 0.";
    }

    if (erros.length !== 0) {
      return { valido: false, erros: erros };
    }

    return { valido: true };
  }

  async findAll() {
    return this.#listaProdutos;
  }

  async findById(id) {
    for (let produto of this.#listaProdutos) {
      if (produto.id === id) {
        return produto;
      }
    }
    return undefined;
  }

  async create(dados) {
    let novo = {
      id: this.#contadorId,
      nome: dados.nome,
      preco: dados.preco
    };

    this.#contadorId = this.#contadorId + 1;
    this.#listaProdutos.push(novo);

    return novo;
  }

  async delete(id) {
    let indice = -1;

    for (let i = 0; i < this.#listaProdutos.length; i++) {
      if (this.#listaProdutos[i].id === id) {
        indice = i;
        break;
      }
    }

    if (indice === -1) {
      return false;
    }

    this.#listaProdutos.splice(indice, 1);
    return true;
  }
}