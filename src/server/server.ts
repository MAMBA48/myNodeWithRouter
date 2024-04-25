import dotenv from 'dotenv'
    dotenv.config()

import GlobalVerify from '../middlewares/globalVerify';
import route from './../router/routes';
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const serverPort = process.env.PORT
const connection = process.env.CONNECTION
//fazer a conexão com o mongodb
mongoose.connect(connection)
    .then(() => console.log('connection ok!'))
    .catch(console.error('Erro ao conectar ao MongoDB!********'))

app.use(express.urlencoded({extended: true}))

//middleware de verificação/autenticação controlará todas as rotas aqui
app.use(GlobalVerify)

//roteador
app.use(route)

console.log(`acesse o servidor: http://localhost:${serverPort}`)

app.listen(serverPort, () => console.log('server ok!'))