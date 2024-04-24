const express = require('express')
const route = express.Router()

import HomeController from "../controllers/homeController"

route.get('/', HomeController)


export default route