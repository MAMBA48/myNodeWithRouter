import route from './../router/routes';
const express = require('express')
const app = express()
const serverPort = 4848

app.use(express.urlencoded({extended: true}))

//roteador
app.use(route)

console.log(`acesse o servidor: http://localhost:${serverPort}`)

app.listen(serverPort)