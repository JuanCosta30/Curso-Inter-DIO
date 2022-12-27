class Carros{
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    };
}

const uno = new Carros('Fiat', 'branco', 1/12);
console.log(uno.calcularGastoPercurso(70, 5).toFixed(2));