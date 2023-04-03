import Category from '../models/CategoryModel'

import { Request, Response } from 'express'

const getCategories = async (req: Request, res: Response) => {
	try {
		const categories = await Category.find({}).sort({ name: 'asc' }).orFail()
		res.json(categories)
	} catch (error) {
		console.error(error)
	}
}

export default getCategories
