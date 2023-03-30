import express, { Request, Response, NextFunction } from 'express'
import { connectDB } from './config/db'
import apiRoutes from './routes/apiRoutes'

const app = express()
const port = 3000

connectDB()

app.get('/', async (req: Request, res: Response, next: Function) => {
	res.json({ message: 'API running...' })
})

app.use('/api', apiRoutes)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
