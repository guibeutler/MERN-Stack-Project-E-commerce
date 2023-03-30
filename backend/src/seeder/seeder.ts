import { connectDB } from '../config/db'
import { ObjectId } from 'bson'
import CategoryModel from '../models/CategoryModel'
import ProductModel from '../models/ProductModel'
import ReviewModel from '../models/ReviewModel'

import categoryData from './categories'
import productsData from './products'
import reviewsData from './reviews'

const importData = async () => {
	try {
		await connectDB()

		await CategoryModel.collection.dropIndexes()
		await ProductModel.collection.dropIndexes()
		await ReviewModel.collection.dropIndexes()

		await CategoryModel.collection.deleteMany({})
		await ProductModel.collection.deleteMany({})
		await ReviewModel.collection.deleteMany({})

		await CategoryModel.insertMany(categoryData)

		const reviews = await ReviewModel.insertMany(reviewsData)
		const sampleProducts = productsData.map((product) => {
			reviews.forEach((review) => {
				return product.reviews.push(review._id as never)
			})
			return { ...product }
		})
		await ProductModel.insertMany(sampleProducts)

		console.log('Seeder data proceeded successfully')
		process.exit()
	} catch (error) {
		console.error('error while proccessing seeder data', error)
	}
}

importData()
