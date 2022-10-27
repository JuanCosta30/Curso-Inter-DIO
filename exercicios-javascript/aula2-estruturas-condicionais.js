//condicional - retorna um valor booleano
const numero = 5;
const numeroDiviselPor5 =  (numero % 5) === 0;

if(numero === 0){
    console.log('Numero inválido!');
}else if (numeroDiviselPor5){
    console.log('Sim');
}else{
    console.log('Não');
}

console.log(numeroDiviselPor5);