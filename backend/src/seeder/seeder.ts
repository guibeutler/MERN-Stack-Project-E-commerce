const categoryData = require('./categories')
const category = require('../models/CategoryModel')

const importData = async () => {
	try {
		await category.collection.deleteMany({})
		await category.insertMany(categoryData)
		console.log('Seeder data proceeded successfully')
		process.exit()
	} catch (error) {
		console.error('error while proccessing seeder data', error)
	}
}
importData()
