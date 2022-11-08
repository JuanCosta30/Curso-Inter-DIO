const peso = 56;
const altura = 1.72;
const imc = peso / Math.pow(altura,2);


if(imc < 18.5){
    console.log(imc.toFixed(2),'Abaixo do peso');
}else if(imc >= 18.5 && imc <= 25){
    console.log(imc.toFixed(2),'Peso normal');
}else if(imc > 25 && imc <= 30){
    console.log(imc.toFixed(2),'Acima do peso');
}else if(imc > 30 && imc <= 40){
    console.log(imc.toFixed(2),'Obeso');
}else{
    console.log(imc.toFixed(2),'Obesidade grave');
}

