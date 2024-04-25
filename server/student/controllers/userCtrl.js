const dataBase = require('../../middlewares/mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.signup =(req,res)=>{
 let insertNewUserQuery="INSERT INTO etudiant(Last_name,First_name,email,password) VALUES (?,?,?,?)"
    bcrypt.hash(req.body.mdp,10,(err,hash)=>{
        if(err)throw err
        console.log(hash)
        dataBase.query(insertNewUserQuery,[req.body.lastname, req.body.firstname, req.body.email, hash],(err,result)=>{
        if(err) {throw(err)} 
            
            res.status(201).json({ message: "insertion réussi"}) 
    }) 
    })
}


exports.login =(req,res)=>{
     let selectUserLoginQuery= 'SELECT * FROM etudiant WHERE email = ?'
     dataBase.query(selectUserLoginQuery,req.body.email,(error,result)=>{
     if(error)throw error
     if(result.length < 1){
        return res.status(401).json({
            message:"User not found"
        })
     }
     console.log(result)
     res.status(201)
     bcrypt.compare(req.body.mdp, result[0].password).then((valid)=>{
       if(!valid){
        res.status(401).end()
       }
       let accessToken = jwt.sign(
        {id_etudiant:result[0].id_etudiant},
        "My_TOKEN_SECRET",
        { 
           expiresIn:"2h"
        }
       )
       res.status(201).json({
        accessToken
       })
     })
    })
}

