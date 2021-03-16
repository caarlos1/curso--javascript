// IIFFE - > Imediatamente Invocada 
// Função auto invocadas.
// Serve para fugir do escopo global.
(
    function () {
        console.log('Opa! Estou fugindo do escopo Global!')
    }
)()