// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    cumprimentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Classe Aluno herdando de Pessoa
  class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
      super(nome, idade);
      this.curso = curso;
    }
  
    cumprimentar() {
      console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
    }
  }
  
  // Teste Pessoa e Aluno
  const pessoa1 = new Pessoa("Carlos", 40);
  const aluno1 = new Aluno("Ana", 22, "Engenharia");
  pessoa1.cumprimentar();
  aluno1.cumprimentar();
  
  console.log("------------------------------------------------");
  
  // Classe Animal e subclasses
  class Animal {
    emitirSom() {
      console.log("O animal fez um som.");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("O cachorro latiu: Au au!");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("O gato miou: Miau!");
    }
  }
  
  // Teste polimórfico
  const animais = [new Cachorro(), new Gato(), new Animal()];
  animais.forEach(animal => animal.emitirSom());
  
  console.log("------------------------------------------------");