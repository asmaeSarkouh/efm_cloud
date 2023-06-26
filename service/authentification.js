const express = require('express')
const utilisateur = require('../model/utilisateur')
const route = express.Router()
const bcrypt = require('bcrypt')
const verify=require('../isAuthenticated')

//create utilisateur
route.post('/register', async (req, res) => {
    const {email,password,username}=req.body
    const checkuser = await utilisateur.findOne({ email})
    if(checkuser)
        return res.status(401).json({ message: 'email deja exists' })
    const hashed = await bcrypt.hash({ password})
    const newuser = new utilisateur(req.body, hashed)
    const saved = await newuser.save()
    res.status(201).json({message:'saved',data:saved})
})

//login utilisateur
route.post('/login', verify,async (req, res) => {
    const { email, password } = req.body
    if (email && password){
    const checkuser = await utilisateur.findOne({ email: req.params.email })
    if(checkuser)
{        const hashed = await bcrypt.compare(password, checkuser.password)
}    if (hashed)
{            return res.status(200).json({ massage: 'connect' })
}    }
    else {
        res.status(200).json({ massage: 'invide' })
    }
})

module.exports=route