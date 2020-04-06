var jwt = require("jsonwebtoken");

const serect = "wh1910"


// 加密
exports.createToken = function (data) {
    return jwt.sign(data, serect)
}

// 解密
const decodeToken = function (token) {
    return new Promise(function (resolve, reject) {

        jwt.verify(token, serect, function (err, data) {
            if (err) {
                console.log(err)
                reject(err)
            } else {
                resolve(data)
            }
        })

    })
}

exports.decodeToken = decodeToken

exports.getMobile = function(req,res,callback){
    var token = req.headers.token;
    console.log("token",token)
    if(token){
        decodeToken(token).then(mobile=>{
            callback(mobile)
        }).catch(err=>{
            res.json({
                code:"3000",
                msg:"token 验证失败",
                err,
                type:0,
            })
        })
    }else{
        res.json({
            code:"3000",
            msg:"token不存在,请重新登录",
            type:0
        })
    }
}



