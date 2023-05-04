import { Request, Response } from 'express'
import { recordsPerPage } from '../config/pagination'
import Product from '../models/ProductModel'

const getProducts = async (req: Request, res: Response) => {
	try {
		const pageNumber = Number(req.query.pageNumber) || 1

		const totalProducts = await Product.countDocuments({})

		const products = await Product.find({})
			.skip(recordsPerPage * (pageNumber - 1))
			.sort({ name: 1 })
			.limit(recordsPerPage)

		res.json({
			products,
			pageNumber,
			paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
		})
	} catch (error) {
		console.error(error)
	}
}

export default getProducts
