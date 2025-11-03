class Funcionario {
    calcularSalario() {
      return 0;
    }
  }
  
  class FuncionarioHorista extends Funcionario {
    constructor(horasTrabalhadas, valorHora) {
      super();
      this.horasTrabalhadas = horasTrabalhadas;
      this.valorHora = valorHora;
    }
  
    calcularSalario() {
      return this.horasTrabalhadas * this.valorHora;
    }
  }
  
  class FuncionarioAssalariado extends Funcionario {
    constructor(salarioMensal) {
      super();
      this.salarioMensal = salarioMensal;
    }
  
    calcularSalario() {
      return this.salarioMensal;
    }
  }
  
  // Teste Funcionários
  const funcionarios = [
    new FuncionarioHorista(160, 30),
    new FuncionarioAssalariado(5000),
  ];
  
  funcionarios.forEach((f, i) => {
    console.log(`Funcionário ${i + 1} - Salário: R$${f.calcularSalario()}`);
  });
  
  console.log("------------------------------------------------");
  
  // Formas Geométricas
  class Forma {
    calcularArea() {
      return 0;
    }
  }
  
  class Quadrado extends Forma {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado ** 2;
    }
  }
  
  class Retangulo extends Forma {
    constructor(largura, altura) {
      super();
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  }
  
  // Teste Formas
  const formas = [
    new Quadrado(4),
    new Retangulo(5, 10),
    new Circulo(3),
  ];
  
  formas.forEach((f, i) => {
    console.log(`Forma ${i + 1} - Área: ${f.calcularArea().toFixed(2)}`);
  });
  
  console.log("------------------------------------------------");