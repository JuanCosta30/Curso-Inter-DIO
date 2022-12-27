class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} <br>`);

    }

}

const juan = new Pessoa();
juan.nome = 'Juan da Costa';
juan.idade = '31';

juan.descrever();