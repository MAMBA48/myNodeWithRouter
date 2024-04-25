const express = require('express')
const route = express.Router()
import { HomeController } from "../controllers/homeController"
import { PostHome } from "../controllers/homeController"
import { AboutPage } from "../controllers/aboutController"
import { DadosPage } from "../controllers/dadosController"

route.get('/', HomeController)
route.post('/', PostHome) //componente de recebimento de dados
route.get('/dados', DadosPage)
route.get('/about', AboutPage)

export default route