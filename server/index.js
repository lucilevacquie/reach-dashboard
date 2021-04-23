const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database: 'Dashboard'
})

app.post('/create', (req, res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    db.query('INSERT INTO Dashboard (firstName, lastName, email, password) VALUES (?, ?, ?, ?)' 
    [firstName, lastName, email, password]), 
    (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send("values inserted to table")
        }
    }
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})