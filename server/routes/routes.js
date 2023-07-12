import { Router } from "express"
import connection from "../database/config.js"

const router = Router()

connection.query('SELECT * FROM users', (err, data) => {
    if(err) throw err

    router.get('/all', (req, res) => {
        res.send(data)
    })
})


export default router

