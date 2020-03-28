function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '123456464654'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: 'Yuri', sobrenome: 'Carlos', anoInicio: 2045}));