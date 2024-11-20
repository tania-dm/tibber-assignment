import express, { Application, Request, Response } from 'express'

const app: Application = express()

const PORT: number = 5000

app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`)
})