function escrevaNome(nome){
    return 'Me chamo ' + nome;
}
function verificarIdade(idade){
    if(idade >= 18){
        return 'De maior idade';
    }else{
        return 'De menor idade';
    }
}

const verificador = verificarIdade(31);
const nomeUsuario = escrevaNome('Juan');

console.log(`${nomeUsuario} e sou ${verificador}`);