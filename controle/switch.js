function testeSwitch(valorEntrada){
    switch (Math.floor(valorEntrada)){
        case 10: case 9: case 8: case 7:
            console.log("Você foi aprovado!");
            break;
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log("Estude mais da proxima!");
            break;
        default:
            console.log("Essa nota está estranha...");
            break;
    }
}

testeSwitch(10);