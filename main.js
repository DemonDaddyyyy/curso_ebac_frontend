class Personagem {
  constructor(nome, genero, presenteFavorito) {
    this.nome = nome;
    this.genero = genero;
    this.presenteFavorito = presenteFavorito;
  }

  descricao() {
    return `${this.nome} (${this.genero}) - Presente favorito: ${this.presenteFavorito}`;
  }
}

class Solteiro extends Personagem {
  constructor(nome, genero, presenteFavorito, aniversario) {
    super(nome, genero, presenteFavorito);
    this.aniversario = aniversario;
  }

  descricao() {
    return `${super.descricao()} | Solteiro(a), aniversário: ${this.aniversario}`;
  }
}

class Casado extends Personagem {
  constructor(nome, genero, presenteFavorito, conjuge) {
    super(nome, genero, presenteFavorito);
    this.conjuge = conjuge;
  }

  descricao() {
    return `${super.descricao()} | Casado(a) com ${this.conjuge}`;
  }
}

const Penny = new Solteiro("Penny", "Feminino", "Poppy", "Inverno 2");
const Abigail = new Solteiro("Abigail", "Feminino", "Ametista", "Outono 13");
const Robin = new Casado("Robin", "Feminino", "Salada de Alface", "Demetrius");

try {
  const personagemEscolhido = Robin;

  if (personagemEscolhido instanceof Casado) {
    throw new Error(
      `Você não pode casar com ${personagemEscolhido.nome}, pois ela já é casada com ${personagemEscolhido.conjuge}.`
    );
  }

  console.log(`Você pode casar com ${personagemEscolhido.nome}!`);

} catch (erro) {
  console.error("Erro:", erro.message);
}

// Teste
[Penny, Abigail, Robin].forEach((personagem) => {
  console.log(personagem.descricao());
});

// teste 