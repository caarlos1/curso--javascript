// Promessa que sera executado e devolvido no futuro.
let promessa = new Promise( (resolve, reject) => {
    resolve(3) // Resolvendo a promessa e passando a resposta única.
})

promessa
    .then(console.log) // Posso pasar o console.log assim, que já funciona.