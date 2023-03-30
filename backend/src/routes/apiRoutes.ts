import express, { Express } from 'express'
import productRoutes from './productRoutes'

const app: Express = express()

app.use('/products', productRoutes)

export default app
