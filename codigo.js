class Heroi {
 constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
 }

 atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
 }
}

let mago = new Heroi("Mago dos Tempos Anteriores", 1000, "mago");
mago.atacar();

let guerreiro = new Heroi("Guerreiro dos Dragões", 30, "guerreiro");
guerreiro.atacar();

let monge = new Heroi("Monge da Ponte das Almas", 400, "monge");
monge.atacar();

let ninja = new Heroi("Ninja do Vale Oculto", 25, "ninja");
ninja.atacar();
