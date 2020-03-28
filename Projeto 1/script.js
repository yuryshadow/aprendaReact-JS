function cadastrar(usuarios, ...novosusuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios
    ]

    return console.log(totalusuarios);

}

let usuarios = ["Yuri","Maria"];

let novosusuarios = cadastrar(usuarios, "Marvim", "Nero");