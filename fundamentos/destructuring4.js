// Mesmo exemplo do destructuring3.js, só que com arrays.

function rand( [ min = 0, max = 1000 ] ){
    if (min > max) 
        [ min, max ] = [ max, min ] // Estou invertendo os valores.

    const valor = Math.random() * (max - min) + min;
    return console.log(Math.floor(valor));
}

// Mande os valores.
rand( [ 10, 20 ] );

// Pasando apenas o max.
rand( [ , 20 ] );