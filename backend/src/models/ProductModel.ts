import mongoose from 'mongoose'
import Review from './ReviewModel'

const { Schema } = mongoose

const imageSchema = new Schema({
	path: { type: String, require: true },
})

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
		reviews: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: Review,
			},
		],
		images: [imageSchema],
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

productSchema.index(
	{ name: 'text', description: 'text' },
	{ name: 'TextIndex' }
)

export default Product
