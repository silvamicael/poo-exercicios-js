class ContaBancaria {
    #saldo;
  
    constructor() {
      this.#saldo = 0;
    }
  
    depositar(valor) {
      if (valor <= 0) {
        console.log("Valor de depósito inválido.");
        return;
      }
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }
  
    sacar(valor) {
      if (valor <= 0) {
        console.log("Valor de saque inválido.");
        return;
      }
      if (valor > this.#saldo) {
        console.log("Saldo insuficiente.");
        return;
      }
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    }
  
    verSaldo() {
      console.log(`Saldo atual: R$${this.#saldo}`);
    }
  }
  
  // Teste ContaBancaria
  const conta = new ContaBancaria();
  conta.depositar(500);
  conta.sacar(200);
  conta.sacar(400); // saldo insuficiente
  conta.verSaldo();
  
  console.log("------------------------------------------------");
  
  class Usuario {
    #senha;
    #email;
  
    constructor(email, senha) {
      this.#email = email;
      this.setSenha(senha);
    }
  
    setSenha(novaSenha) {
      if (novaSenha.length < 6) {
        console.log("A senha deve ter pelo menos 6 caracteres.");
        return;
      }
      this.#senha = novaSenha;
      console.log("Senha definida com sucesso!");
    }
  
    autenticar(senhaInformada) {
      if (senhaInformada === this.#senha) {
        console.log("Autenticação bem-sucedida!");
        return true;
      } else {
        console.log("Senha incorreta.");
        return false;
      }
    }
  }
  
  // Teste Usuario
  const user = new Usuario("teste@email.com", "12345"); // erro
  user.setSenha("abc123");
  user.autenticar("abc123");
  user.autenticar("senhaErrada");
  
  console.log("------------------------------------------------");