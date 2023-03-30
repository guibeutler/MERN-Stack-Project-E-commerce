import { Request, Response } from 'express'

const getProducts = (req: Request, res: Response) => {
	res.send('GET PRODUCTS')
}

export default getProducts
