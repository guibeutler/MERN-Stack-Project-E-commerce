import express, { Express } from 'express'
import productRoutes from './productRoutes'
import categoryRoutes from './categoryRoutes'
import usersRoutes from './usersRoutes'
import ordersRoutes from './usersRoutes'

const app: Express = express()

app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.use('/users', usersRoutes)
app.use('/orders', ordersRoutes)

export default app
