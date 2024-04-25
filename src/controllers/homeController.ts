import { randomUUID } from "crypto"
const randomId = randomUUID()
const date = new Date()

//controler sendo usado para dividir as paginas
export const HomeController = (req:any, res:any) => {
        res.send(`
        <a href="/about">Sobre</a>
        <a href="/dados">Dados</a>
            <h2>Enviar dados:</h2>
            <hr/>
            <form action="/" method="POST">
                <label>Dados 1:
                    <input type='text' name='dados' placeholder=digite><br/>
                </label>
            <hr/>
                <label>Dados 2:
                    <input type='text' name='novosDados' placeholder=digite><br/>
                </label>
            <hr/>
                <label>Dados 3:
                    <input type='text' name='outrosDados' placeholder=digite><br/>
                </label>
            <hr/>
                <input type=submit value=Enviar>
            </form>
            `)
    }
export const PostHome = (req:any, res:any) => {
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
        <a href="/">Voltar</a>
    `)
    return
}

