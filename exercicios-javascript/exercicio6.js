/*function sayMyName(name) {
    console.log('Your name is: ' + name);
}
sayMyName('Juan');*/

/*function quadrado(valor){
   return valor * valor;

}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);*/

function incrementarJuros(valor, porcentualJuros){
    const valorDeAcrescimo = (porcentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));