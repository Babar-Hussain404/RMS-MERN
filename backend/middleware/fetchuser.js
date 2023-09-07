const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt_token";

const fetchuser = (req,res, next) =>{
   //Get the user from the jet token and add id to req object
   const token = req.header('auth-token');
if(!token){
   res.status(401).send({error:"Please authenticate using a valid token"})
}
try {//verify if the token is correct
   const data = jwt.verify(token,JWT_SECRET)
req.user = data.user;

} catch (error) {
   res.status(401).send({error:"Please authenticate using a valid token"})
}
   next()
}

module.exports = fetchuser;