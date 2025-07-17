class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque= "espada";
                break;
            case "monge":
                ataque= "artes marciais";
                break;
            case "ninja":
                ataque= "shuriken";
                break;
            default:
                ataque="ataque muito fraco você não é um herói.";    
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
    
}

//Criando os objetos para a classe
const drEstranho = new Hero("Dr.Estranho", 40, "mago");
const heMan = new Hero("He-Man", 20, "guerreiro");
const wong = new Hero("Wong", 55, "monge");
const naruto = new Hero("Naruto", 15, "ninja");

const heros = [drEstranho, heMan, wong, naruto];

for (let i =0; i < heros.length; i++) {
    heros[i].atacar();
}