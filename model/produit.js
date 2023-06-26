const mongoose = require('mongoose')
const produit = mongoose.model('produit', {
    code: {
        type: String,
        required: true,
        unique:true
    },
    nom: {
        type: String,
    },
    description: {
        type: String,
    },
    prix: {
        type:Number
    },
    created_at: {
        type: Date,
        default:Date.now()
    }
})
module.exports=produit