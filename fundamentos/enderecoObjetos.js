// Caso eu crie um objeto Sapato
let Sapato = {
    marca: 'Nike',
}

// E atribua seu valor na variavel Tenis
let Tenis = Sapato;

// E mude o a marca para Puma
Tenis.marca = 'Puma';

// Ao verificar qual a marca do Sapato, aparecerá
console.log(Sapato.marca); // Resultado: Puma

// Mas pera ai... Qual o motivo?

/*
    Quando dizemos que uma variavel em JavaScript recebe um Objeto,
    não estamos copiando o objeto em si, e sim o endereço desse Objeto.
    Ou seja, Sapato e Tenis estão apontando para o endereço do mesmo Objeto.

    Diferente de quando copiamos uma variavel normal, já que o valor é copiado
    e não o endereços de onde está o valor. Sacou?

    Espero que sim... 
*/