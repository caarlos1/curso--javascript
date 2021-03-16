/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
*/

// Arrow function não precisa de {} caso tenha apenas uma linha.
const dividendoDivisor = ( dividendo, divisor ) => 
    console.log( `Resultado: ${(Math.floor( dividendo / divisor ))} | Resto: ${(dividendo % divisor)}` ); // ou ~~(dividendo / divisor)


    dividendoDivisor( 10, 8 );