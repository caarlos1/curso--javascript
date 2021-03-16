let comparaComThis = function(params) {
    console.log(this === params)
}

comparaComThis(global); // true

const obj = {}
// Bindei obj como o "this".
comparaComThis = comparaComThis.bind(obj); 

comparaComThis(global); // false
comparaComThis(obj); // true

let comparaComThisArrow = params => console.log(this === params);
comparaComThisArrow(global); // false // O "this" do function arrow, no caso do console, aponta para o modulo (module.exports)
comparaComThisArrow(module.exports); // true

// O "this" do arrow function sempre aponta para dentro do contexto que foi escrita.