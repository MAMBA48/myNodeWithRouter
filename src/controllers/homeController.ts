
//controler sendo usado para dividir as paginas
const HomeController = (req:any, res:any) => {
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
    }

export default HomeController