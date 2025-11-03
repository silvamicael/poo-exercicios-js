// Classe Carro
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    descrever() {
      console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}.`);
    }
  }
  
  // Teste da classe Carro
  const carro1 = new Carro("Toyota", "Corolla", 2022);
  const carro2 = new Carro("Honda", "Civic", 2023);
  carro1.descrever();
  carro2.descrever();
  
  console.log("------------------------------------------------");
  
  // Classe Produto
  class Produto {
    constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    vender(quantidade) {
      if (quantidade <= 0) {
        console.log("Quantidade inválida para venda.");
        return;
      }
      if (quantidade > this.estoque) {
        console.log("Estoque insuficiente para a venda.");
      } else {
        this.estoque -= quantidade;
        console.log(`Venda realizada! ${quantidade} unidades de ${this.nome} vendidas.`);
      }
    }
  
    repor(quantidade) {
      if (quantidade <= 0) {
        console.log("Quantidade inválida para reposição.");
        return;
      }
      this.estoque += quantidade;
      console.log(`${quantidade} unidades de ${this.nome} repostas no estoque.`);
    }
  }
  
  // Teste da classe Produto
  const produto1 = new Produto("Notebook", 3500, 10);
  produto1.vender(3);
  produto1.repor(5);
  console.log("Estoque atual:", produto1.estoque);
  
  console.log("------------------------------------------------");