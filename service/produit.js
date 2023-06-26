const express = require('express')
const route = express.Router()
const produit = require('../model/produit')

//read produits
route.get('/', async (req, res) => {
    const produits = await produit.find()
    produits ? res.status(200).send(produits)
        :res.status(404).json({message:'not found'})
})

//read produit from its code
route.get('/:code', async (req, res) => {
    const produits = await produit.findOne({code:req.params.code})
    produit ? res.status(200).json({data:produits})
        :res.status(404).json({message:'not found'})
})

//create produit
route.post('/add', async (req, res) => {
    try {
        const newProduit = new produit(req.body)
        const saved = await newProduit.save()
        console.log(saved);
        res.status(201).json({message:'saved',data:saved})
    } catch (err)
    {res.status(400).json({message:err.message})}
})

//update produit
route.put('/:code/edit', async (req, res) => {
    const produits = await produit.findOneAndUpdate({ code: req.params.code }, req.body)
        produits ? res.status(200).json({massage:'updated',data:produits})
        :res.status(404).json({message:'not found'})
})

//delete produit
route.delete('/:code', async (req, res) => {
    const produits = await produit.findOneAndDelete({ code: req.params.code })
        produits ? res.status(200).json({massage:'deleted'})
        :res.status(404).json({message:'not found'}) 
})
module.exports = route

