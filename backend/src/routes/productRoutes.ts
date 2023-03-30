import { Router, Request, Response } from 'express'
import getProducts from '../controllers/productController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getProducts(req, res)
})

export default router
