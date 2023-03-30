import { connectDB } from '../config/db'
import CategoryModel from '../models/CategoryModel'
import ProductModel from '../models/ProductModel'
import ReviewModel from '../models/ReviewModel'
import UserModel from '../models/UserModel'
import OrderModel from '../models/OrderModel'

import categoryData from './categories'
import productsData from './products'
import reviewsData from './reviews'
import usersData from './users'
import ordersData from './orders'

const importData = async () => {
	try {
		await connectDB()

		await CategoryModel.collection.dropIndexes()
		await ProductModel.collection.dropIndexes()
		await ReviewModel.collection.dropIndexes()
		await UserModel.collection.dropIndexes()
		await OrderModel.collection.dropIndexes()

		await CategoryModel.collection.deleteMany({})
		await ProductModel.collection.deleteMany({})
		await ReviewModel.collection.deleteMany({})
		await UserModel.collection.deleteMany({})
		await OrderModel.collection.deleteMany({})

		await CategoryModel.insertMany(categoryData)

		const reviews = await ReviewModel.insertMany(reviewsData)
		const sampleProducts = productsData.map((product) => {
			reviews.forEach((review) => {
				return product.reviews.push(review._id as never)
			})
			return { ...product }
		})
		await ProductModel.insertMany(sampleProducts)
		await UserModel.insertMany(usersData)
		await OrderModel.insertMany(ordersData)

		console.log('Seeder data proceeded successfully')
		process.exit()
	} catch (error) {
		console.error('error while proccessing seeder data', error)
	}
}

importData()
