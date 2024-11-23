import 'reflect-metadata'
import dotenvx from '@dotenvx/dotenvx'
import express from 'express'
import appSetup from './startup/init'
import routerSetup from './startup/router'

dotenvx.config()
const app = express()
appSetup(app)
app.use(express.json())
routerSetup(app)
