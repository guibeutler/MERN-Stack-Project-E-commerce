import Category from '../models/CategoryModel'

import { Request, Response } from 'express'

export const getCategories = async (req: Request, res: Response) => {
	try {
		const categories = await Category.find({}).sort({ name: 'asc' }).orFail()
		res.json(categories)
	} catch (error) {
		console.error(error)
	}
}

export const newCategory = async (req: Request, res: Response) => {
	try {
		const { category } = req.body

		if (!category) {
			res.status(400).send('Category input is required!')
		}

		const categoryExists = await Category.findOne({ name: category })

		if (categoryExists) {
			res.status(400).send('Category already exists!')
		} else {
			const categoryCreated = await Category.create({
				name: category,
			})
			res.status(201).send({ categoryCreated: categoryCreated })
		}
	} catch (error) {
		console.error(error)
	}
}
