const mysql = require('mysql2');
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_react_demo"
})
module.exports=db;