class PessoaFinal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class AlunoFinal extends PessoaFinal {
    #notas = [];
  
    constructor(nome, idade, matricula, curso) {
      super(nome, idade);
      this.matricula = matricula;
      this.curso = curso;
    }
  
    adicionarNota(nota) {
      if (nota < 0 || nota > 10) {
        console.log("Nota inválida. Deve ser entre 0 e 10.");
        return;
      }
      this.#notas.push(nota);
    }
  
    calcularMedia() {
      if (this.#notas.length === 0) return 0;
      const soma = this.#notas.reduce((a, b) => a + b, 0);
      return soma / this.#notas.length;
    }
  
    apresentar() {
      console.log(
        `Sou o aluno ${this.nome}, curso ${this.curso}, matrícula ${this.matricula}. Minha média é ${this.calcularMedia().toFixed(2)}.`
      );
    }
  }
  
  class ProfessorFinal extends PessoaFinal {
    constructor(nome, idade, disciplina) {
      super(nome, idade);
      this.disciplina = disciplina;
    }
  
    apresentar() {
      console.log(`Sou o professor ${this.nome}, leciono ${this.disciplina}.`);
    }
  }
  
  class Turma {
    constructor(codigo, professor) {
      this.codigo = codigo;
      this.professor = professor;
      this.alunos = [];
    }
  
    adicionarAluno(aluno) {
      this.alunos.push(aluno);
    }
  
    listarAlunos() {
      console.log(`Turma ${this.codigo} — Professor: ${this.professor.nome}`);
      this.alunos.forEach(a => a.apresentar());
    }
  }
  
  // Teste do mini-sistema
  const prof = new ProfessorFinal("Marcos", 45, "Matemática");
  const alunoA = new AlunoFinal("João", 20, "A123", "Engenharia");
  const alunoB = new AlunoFinal("Maria", 21, "B456", "Engenharia");
  
  alunoA.adicionarNota(8);
  alunoA.adicionarNota(9);
  alunoB.adicionarNota(7);
  alunoB.adicionarNota(10);
  
  const turma1 = new Turma("TURMA1", prof);
  turma1.adicionarAluno(alunoA);
  turma1.adicionarAluno(alunoB);
  
  turma1.listarAlunos();