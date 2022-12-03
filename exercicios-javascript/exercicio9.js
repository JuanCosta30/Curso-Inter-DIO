const pessoa = {
    nome: 'Juan da Costa',
    idade: 31,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

console.log(pessoa.descrever());
