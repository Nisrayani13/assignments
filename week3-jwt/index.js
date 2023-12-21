const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const z=require("zod");

const schema=z.object({
    username:z.string().email(),
    password:z.string().min(6),
})

function signJwt(username, password) {
    let payload={
        username:username,
        password:password,
    }
    let validEmail=schema.safeParse(payload);
    if(validEmail["success"]===false)return null;
    let token=jwt.sign(payload,jwtPassword);
    return token;
}

function verifyJwt(token) {
    try{
        const decoded=jwt.verify(token,jwtPassword);
        if(decoded)return true;
    }catch(error){
        // console.error("Token verification failed:",error.message);
        return false;
    }
}

function decodeJwt(token) {
    try{
        const decoded=jwt.decode(token)
        if(decoded)return true;
        return false;
    }catch(error){
        // console.log("Token verifiaction failed:",error.message);
        return null;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}