const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'student'
})

app.post('/student' , (req, res) => {
    const sql = "INSERT INTO signup (Login, Mail, Password, DateBirth) VALUES (?)";
    const values = [
        req.body.Login,
        req.body.Mail,
        req.body.Password,
        req.body.DateBirth
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json('Error' + err);
        }
        return res.json(data);
    })
})

app.post('/signup' , (req, res) => {
    const sql = "SELECT * FROM signup WHERE `Login` = ? AND `Password` = ?";
    db.query(sql, [req.body.Login, req.body.Password], (err, data) => {
        if(err) {
            return res.json('Error' + err);
        }
        if (data.length > 0) {
            return res.json('Success');
        } else {
            return res.json('Failed');
        }
    })
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM signup";
    db.query(sql, (err, data) => {
        if (err) return res.json('Error' + err);
        return res.json(data);
    })
})

app.listen(8080, () => {
    console.log('Listening');
})

