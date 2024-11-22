import express from 'express'
import appSetup from './startup/init'
import routerSetup from './startup/router'
import dotenv from 'dotenv';

dotenv.config();
const app = express()
appSetup(app)
app.use(express.json())
routerSetup(app)
