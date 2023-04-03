import { Router, Request, Response } from 'express'
import getUsers from '../controllers/usersController'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
	getUsers(req, res)
})

export default router
