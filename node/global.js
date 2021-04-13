// console.log(global)

// Uso apenas em apenas exceções
globalThis.MinhaApp = Object.freeze({
    nome: 'Globalzinho',
    saudacao() {
        return 'To em tudo rapaz.'
    },
})