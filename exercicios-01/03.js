/*
    03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const base = 8;
const expoente = 3;

// Fazendo na mão:
const baseExpoenteNoDedo = ( base, expoente ) => {
    if(expoente == 0)
        console.log("Todo numéro elevado a 0 é igual a 1.");
    else {
        let resultado = base;
        // Se o expoente for maior que 1, ativa o for.
        for(let i = 1 ; i < expoente ; i++) {
            resultado = base * resultado;
        }
        console.log(`Resultado: ${resultado}`)
    }
}

baseExpoenteNoDedo(base, expoente);

// Utilizando o objeto Math.pow:
const baseExpoenteMath = ( base, expoente ) => {
    console.log(`Resultado: ${Math.pow(base, expoente)}`);
}

baseExpoenteMath(base, expoente);


// Com novo operador:
const baseExpoenteOperador = ( base, expoente ) => {
    console.log(`Resultado: ${base ** expoente}`);
}

baseExpoenteOperador(base, expoente);