//const token=req.headers.token
//const decode=token.verify,'ss
//if(req.isadmin==req.decode)
const jwt = require('jsonwebtoken')
function verify(req, res, next) {
    const token = req.headres.token
    const decode = token.verify
    if (req.status == 'admin') {
        res.status(200).json({decode})
        next()
    } else {
        res.status(400).json({message:'no autorise'})
    }
}
module.exports=verify