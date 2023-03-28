import express from 'express'

const app = express()

const productRoutes = require('./productRoutes')

app.use('/products', productRoutes)

module.exports = app
