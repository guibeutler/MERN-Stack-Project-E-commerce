import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
			unique: true,
		},
		description: {
			type: String,
			require: true,
		},
		category: {
			type: String,
			require: true,
		},
		count: {
			type: Number,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		rating: {
			type: Number,
		},
		reviewsNumber: {
			type: Number,
		},
		sales: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product
