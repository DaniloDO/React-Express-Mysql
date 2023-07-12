import mysql from 'mysql'
import 'dotenv/config'



// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     port: process.env.PORT,
//     database: process.env.HOST
// })

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    port: 3306,
    database: 'adonis_blog_api'
})

connection.connect((err) => {
    if(err) {
        console.error('error connecting: ' + err.stack)
        return
    }

    console.log('connected as id' + connection.threadId)
    
})

export default connection
