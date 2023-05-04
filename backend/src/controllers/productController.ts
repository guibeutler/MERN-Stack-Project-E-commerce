import { Request, Response } from 'express'
import { recordsPerPage } from '../config/pagination'
import Product from '../models/ProductModel'

const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find({})
			.sort({ name: 1 })
			.limit(recordsPerPage)
		res.json({ products })
	} catch (error) {
		console.error(error)
	}
}

export default getProducts
