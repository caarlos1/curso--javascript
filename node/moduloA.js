// Em node, cada arquivo representa um módulo.

// Exportando:
this.ola = 'Fala aí meu chegado!'
exports.bemVindo = 'Bem vindo champs!'
module.exports.ateLogo = 'Até logo amigo!'

let teste = 'Sou um teste' // Não aparece no this, pois não foi exportado para o objeto.
// console.log(this);