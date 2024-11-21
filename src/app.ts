import express from 'express';
import appSetup from './startup/init';
import routerSetup from './startup/router';

const app = express();
appSetup(app);
app.use(express.json())
routerSetup(app);