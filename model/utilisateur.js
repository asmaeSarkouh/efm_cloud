const mongoose = require('mongoose')
const utilisateur = mongoose.model('utilisateur', {
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    token: {
        type:String
    },
    statuis: {
        type: String,
        enum:['admin','manager','user']
    }
})
module.exports=utilisateur