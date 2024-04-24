import { randomUUID } from "crypto"
import route from './../router/routes';
const express = require('express')
const app = express()
const serverPort = 4848
const date = new Date()
const randomId = randomUUID()

app.use(express.urlencoded({extended: true}))

app.use(route)

/**app.get('/', (req:any, res:any) => {
    res.send(`
        <h2>Enviar dados:</h2>
        <form action="/" method="POST">
            <label>Dados 1:
                <input type='text' name='dados' placeholder=digite><br/>
            </label>
            <label>Dados 2:
                <input type='text' name='novosDados' placeholder=digite><br/>
            </label>
            <label>Dados 3:
                <input type='text' name='outrosDados' placeholder=digite><br/>
            </label>
            <input type=submit value=Enviar>
        </form>
        `)
}) */

app.get('/dados', (req:any, res:any) => {
    res.send('<h1>Pagina de dados</h1>')
})
app.post('/', (req:any, res:any) => {
    console.log(req.body)
    res.send(`
        <h2>Dados recebidos com sucesso!</h2>
        <table border='1'>
            <tr>
                <th>id</th>
                <th>dados</th>
                <th>registro</th>
            </tr>
            <tr>
                <td>${randomId}</td>
                <td>${req.body.dados}</td>
                <td>${date}</td>
            </tr>
        </table>
    `)
})

console.log(`acesse o servidor: localhost:${serverPort}`)

app.listen(serverPort)