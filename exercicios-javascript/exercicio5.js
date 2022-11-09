const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    const valor = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(valor.toFixed(2));
}else if(formaDePagamento === 2){
    const valor = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(valor.toFixed(2));
}else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    const valor = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log(valor.toFixed(2));
}