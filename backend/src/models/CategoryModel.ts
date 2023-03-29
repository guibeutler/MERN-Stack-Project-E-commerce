import mongoose from 'mongoose'
const { Schema } = mongoose

const categorySchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
	},
	description: {
		type: String,
		require: true,
		default: 'default category description',
	},
	image: { type: String, require: true },
})

const Category = mongoose.model('Category', categorySchema)

export default Category
