//Importar pacote do Express
const express = require ("express")
const mongoose = require("moongose")
//inicializar o pacote
const server = express()

//Configurar a porta de conexão
mongoose.connect('mongodb+srv://Marcela:super123@cluster0.dav3f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//Habilitar a leitura e recebimento de json -> Middleware (use)
    .then(() => { 
        server.listen(3000, () =>{
            console.log("Servidor conectando  ao mongoDB...")
        })
    }).catch((erro) =>{console.log(erro)})
server.use(
    express.urlencoded({
        extended: true,
    })
)

server.use(express.json())

//Criar uma rota inicial de boas vindas
server.get('/', (req,res) => {
    res.json({
        message: "Bem Vindo a nossa API com MongoDB."
    })
})