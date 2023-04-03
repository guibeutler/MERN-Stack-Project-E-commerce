import { Router, Request, Response } from 'express'
import getCategories from '../controllers/categoryController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getCategories(req, res)
})

export default router
