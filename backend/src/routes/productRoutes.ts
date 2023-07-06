import { Router, Request, Response } from 'express'
import { getProducts, getProductById } from '../controllers/productController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getProducts(req, res)
})

router.get('/search/:searchQuery', (req: Request, res: Response) => {
	getProducts(req, res)
})

router.get('/category/:categoryName', (req: Request, res: Response) => {
	getProducts(req, res)
})

router.get(
	'/category/:categoryName/search/:searchQuery',
	(req: Request, res: Response) => {
		getProducts(req, res)
	}
)
router.get('/:id', getProductById)

export default router
