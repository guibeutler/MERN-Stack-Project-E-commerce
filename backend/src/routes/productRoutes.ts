import express from 'express'

const router = express.Router()
const getProducts = require('../controllers/productController')

router.get('/', getProducts)

module.exports = router
