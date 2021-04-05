// A herança do Java Script é baseada em protótipos.
const ferrari = {
    modelo: 'F40',
    velMax: 320,
    acelerar: () => {
        console.log("vrum!");
    }
}

const volvo = {
    modelo: 'F40',
    velMax: 200
}

// Acessar o protótipo desse objeto.
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // Apenas funções tem .prototype
console.log(Object.prototype.__proto__);

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto);

// console.log(ferrari.acelerar.__proto__);