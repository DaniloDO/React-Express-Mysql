import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

import router from './routes/routes.js'
import connection from './database/config.js'

import 'dotenv/config'

const app = express()

app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))

app.use(express.json())
app.use('/routes', router)
app.use('/', () => connection)
app.set('json spaces', 2)

app.listen(5000, () => console.log(`server data`))

app.get('/', (req, res) => res.json({title: 'hello server'}))
