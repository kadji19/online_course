const jwt = require("jsonwebtoken")
module.exports =verifyToken=(req,res,next)=>{
    
  
    try {
        let adminToken= req.headers["authorization"].split(" ")[1]
     let decodedToken= jwt.verify(adminToken,"My_TOKEN_SECRET")
    let id_admin = decodedToken.id_admin
    req.body.id_admin= id_admin
    next()
    } catch (err) {
        res.status(401).json({err})
    }
}

