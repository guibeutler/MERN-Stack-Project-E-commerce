import { Request, Response } from 'express'
import { recordsPerPage } from '../config/pagination'
import Product from '../models/ProductModel'

export const getProducts = async (req: Request, res: Response) => {
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

		let categoryQueryCondition = {}
		const categoryName = req.params.categoryName || ''
		if (categoryName) {
			queryCondition = true
			let a = categoryName.replaceAll(',', '/')
			var regEx = new RegExp('^' + a)
			categoryQueryCondition = { category: regEx }
		}
		if (req.query.category) {
			queryCondition = true
			let a = (req.query.category as string).split(',').map((item) => {
				if (item) return new RegExp('^' + item)
			})
			categoryQueryCondition = {
				category: { $in: a },
			}
		}

		if (queryCondition) {
			query = {
				$and: [
					priceQueryCondition,
					ratingQueryCondition,
					categoryQueryCondition,
				],
			}
		}

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

export const getProductById = async (req: Request, res: Response) => {
	try {
		const product = await Product.findById(req.params.id)
			.populate('reviews')
			.orFail()
		res.json(product)
	} catch (error) {
		console.error(error)
	}
}
