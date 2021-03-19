const funcs = [];

// Com let as coisas funcionam bem.
for(let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2](); // Retorna 2
funcs[8](); // Retorna 8