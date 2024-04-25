const mysql = require('mysql2');
const bcrypt = require("bcrypt")
const dataBase=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"online_course"
})

dataBase.connect((err)=>{
    if(err){
        throw(err)
    }
    console.log("dataBase connected")


})

module.exports = dataBase 