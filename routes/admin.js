
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = express.Router()

const rootDir = require('../util/path')

// router.use(bodyParser.urlencoded({extended: false}))
router.get('/favicon.ico', (req, res) => res.status(204))

router.get('/AddProduct', (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})
router.post('/AddProduct', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})




module.exports = router