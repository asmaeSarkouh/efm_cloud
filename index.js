const express = require('express')
const app = express()
app.use(express.json())
//route
const routeProduit=require('./service/produit')
const routeUser=require('./service/authentification')
//basedonne
require('./mongoConnect')

//service
app.use('/api/v1/produit',routeProduit)
app.use('/api/v1/auth', routeUser)

//frontend
const bodyParser = require('body-parser')
const ejs = require('ejs')
const axios=require('axios')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded())

//list
app.get('/', async (req, res) => {
    const response = await axios.get('http://localhost:5000/api/v1/produit')
    const produit = response.data
    res.render('home',{produit:produit})
})
//create
app.post('/add', async (req, res) => { 
    const response = await axios.post('http://localhost:5000/api/v1/produit/add', req.body)
    res.redirect('/')
})
//edit
app.get('/:code', async (req, res) => {
    const response = await axios.get('http://localhost:5000/api/v1/produit/'+req.params.code)
    const produit = response.data
    res.render('home',{produit:produit})
})
app.post('/edit', async (req, res) => { 
    const response = await axios.put('http://localhost:5000/api/v1/produit/'+req.params.code+'/edit', req.body)
    res.redirect('/')
})

app.listen(5000,()=>{console.log('server runing')})