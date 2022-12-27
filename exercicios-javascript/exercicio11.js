class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC(){
        const imc = this.calcularIMC();

        if(imc < 18.5){
            return('Abaixo do peso');
        }else if(imc >= 18 && imc < 25){
            return('Peso normal');
        }else if(imc >= 25 && imc < 30){
            return('Acima do peso');
        }else if(imc >= 30 && imc < 40){
            return('Obeso');
        }else{
            return('Obesidade grave');
        }
    }
}

const juan = new Pessoa('Juan', 56, 1.72);
console.log(juan.calcularIMC().toFixed(2));
console.log(juan.classificarIMC());