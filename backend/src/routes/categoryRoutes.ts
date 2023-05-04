import { Router, Request, Response } from 'express'
import {
	getCategories,
	newCategory,
	deleteCategory,
} from '../controllers/categoryController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getCategories(req, res)
})

router.post('/', (req: Request, res: Response) => {
	newCategory(req, res)
})

router.delete('/:category', (req: Request, res: Response) => {
	deleteCategory(req, res)
})

export default router
