const valor = "Global";

function minhaFuncao () {
    console.log(valor);
}

function exec ( ){
    const valor = "Local";
    minhaFuncao();
}

exec(); // Vai aparecer Global, por que foi declarada de fora.