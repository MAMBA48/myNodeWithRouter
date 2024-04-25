import dotenv from 'dotenv'
    dotenv.config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const serverPort = process.env.PORT
const connection = process.env.CONNECTION
    
const route = require('./../router/routes')
const GlobalVerify = require('../middlewares/globalVerify')

//fazer a conexão com o mongodb
mongoose.connect(connection)
    .then(() => console.log('connection ok!'))
        .catch(console.error('Erro ao conectar ao MongoDB!********'))

//configurando a sessao
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

app.use(express.urlencoded({extended: true}))

//CORRIGIR ESSE ERRO DE SESSAO
//--------------------------------------SESSION-----------------------------------------
const sessionOptions = session({
    secret: '0dfsd4gd5g4s65dd4 4 4d5d e fe e',
    resave: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())
//--------------------------------------SESSION-----------------------------------------

//middleware de verificação/autenticação controlará todas as rotas aqui
app.use(GlobalVerify)

//roteador
app.use(route)

console.log(`acesse o servidor: http://localhost:${serverPort}`)

app.listen(serverPort, () => console.log('server ok!'))