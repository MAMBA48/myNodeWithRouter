
export const AboutPage = (req:any, res:any) => {
    res.send(`
        <a href="/about">Sobre</a>
        <h2>Sobre</h2>
        <div>
            <h4>Nossa história</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quis amet at, fugiat harum cumque ea rem nihil facere delectus officia molestiae dolore, reprehenderit natus aperiam eum minus nulla unde.</p>
            <hr/>
            <a href="/">Voltar</a>
        </div>
    `)
}