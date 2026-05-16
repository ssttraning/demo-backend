const mysql = require('mysql2');
const db = mysql.createConnection({
    host:"n1nlmysql57plsk.secureserver.net",
    user:"demodatabase",
    password:"h805hMk9#",
    database:"demodatabase"
})
module.exports=db;