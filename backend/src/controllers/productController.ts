import { Request, Response } from 'express'
import { recordsPerPage } from '../config/pagination'
import Product from '../models/ProductModel'

const getProducts = async (req: Request, res: Response) => {
	try {
		let query = {}

		let queryCondition = false

		let priceQueryCondition = {}
		if (req.query.price) {
			queryCondition = true
			priceQueryCondition = { price: { $lte: Number(req.query.price) } }
		}

		let ratingQueryCondition = {}
		if (req.query.rating) {
			queryCondition = true
			ratingQueryCondition = {
				rating: { $in: (req.query.rating as string).split(',') },
			}
		}

		query = { $and: [priceQueryCondition, ratingQueryCondition] }

		const pageNumber = Number(req.query.pageNumber) || 1

		let sort = {}

		const sortOption = req.query.sort || ''
		if (sortOption) {
			let sortOpt = (sortOption as string).split('_')
			sort = { [sortOpt[0]]: Number(sortOpt[1]) }
		}
		console.log(sort)

		const totalProducts = await Product.countDocuments(query)

		const products = await Product.find(query)
			.skip(recordsPerPage * (pageNumber - 1))
			.sort(sort)
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
