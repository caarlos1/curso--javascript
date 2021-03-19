// Comparando let e var no mesmo arquivo.
var numero = 1; // Global.
{
    let numero = 2; // Local pois está dentro de chaves.
    console.log('dentro =', numero);
}

console.log('fora =', numero);

/*
    O let tem 3 escopos: Global, bloco e de função.
    Diferente da var que tem apenas global e de função.
*/