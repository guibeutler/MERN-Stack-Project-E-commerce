import { connectDB } from '../config/db'
import CategoryModel from '../models/CategoryModel'
import ProductModel from '../models/ProductModel'
import categoryData from './categories'
import productsData from './products'

const importData = async () => {
	try {
		await connectDB()

		await CategoryModel.collection.dropIndexes()
		await ProductModel.collection.dropIndexes()

		await CategoryModel.collection.deleteMany({})
		await ProductModel.collection.deleteMany({})

		await CategoryModel.collection.insertMany(categoryData)
		await ProductModel.collection.insertMany(productsData)

		console.log('Seeder data proceeded successfully')
		process.exit()
	} catch (error) {
		console.error('error while proccessing seeder data', error)
	}
}

importData()
