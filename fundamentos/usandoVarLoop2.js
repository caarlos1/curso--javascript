const funcs = [];

// Será que por estar em uma função, o var estará protegido?
for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2](); // Retorna 10...
funcs[8](); // Aqui também retorna 10...