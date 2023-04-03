import { Router, Request, Response } from 'express'
import getOrders from '../controllers/ordersController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getOrders(req, res)
})

export default router
