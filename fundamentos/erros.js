function imprimirNome (obj){
    try {
        console.log(obj.name.toUpperCase())
    }

    catch(erro) {
        tratarErro(erro);
    }
    
    // Sempre será executado:
    finally {
        console.log("Acabou o serviço.")
    }
}


function tratarErro(erro) {
    throw new Error("Eu sou uma mensagem de erro!")
}

const objeto = {
    nome: "Carlos Roberto"
}

imprimirNome(objeto)