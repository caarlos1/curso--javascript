// JSON é um formato textual.
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    },
}

console.log(obj) // { a: 1, b: 2, c: 3, soma: [Function: soma] }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // { a: 1, b: 2, c: 3 }