const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use( express.static( '.' ) ) // Provem os arquivos estáticos.
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( bodyParser.json() ) // Caso venha um JSON

// Configurando os detalhes dos uploads.
const storage = multer.diskStorage( {
    destination: function ( req, file, callback) {
        callback(null, './upload') // pasta que será salvo os arquivos.
    },
    filename: function (req, file, callback) { // Mudando nome do arquivo
        callback( null, `${Date.now()}_${file.originalname}` ) 
    }
} )

// Interpreta o Upload vindo na requisição.
const upload = multer( { storage } ).single('arquivo')

app.post('/upload', ( req, res ) => {
    upload(req, res, err => {
        if(err)
            return res.end('Ocorreu um erro.')
            
        res.end('Concluído com sucesso.')
    } )
})

app.post('/formulario', (req, res) => {
    res.send( {
        ...req.body,
        id: 1
    } )
} )

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query - recebe dados nas querys "?..."
    // req.params - recebe params ex: '/:id'
    const par = parseInt(req.query.numero) % 2 === 0 // Verifica se é par.

    res.send( {
        resultado: par ? "par" : "impar"
    })
} )

app.listen(8000, () => console.log('Servidor na Porta: http://localhost:8000'))