import mongoose from 'mongoose'
import User from './UserModel'

const { Schema } = mongoose

const orderSchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: User,
		},
		orderTotal: {
			itemsCount: { type: Number, require: true },
			cartTotal: { type: Number, require: true },
		},
		cartItems: [
			{
				name: { type: String, require: true },
				price: { type: Number, require: true },
				image: { path: { type: String, require: true } },
				quantity: { type: Number, require: true },
				count: { type: Number, require: true },
			},
		],
		transactionResult: {
			status: { type: String },
			createTime: { type: String },
			amount: { type: Number },
		},
		isPaid: {
			type: Boolean,
			require: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		isDelivered: {
			type: Boolean,
			require: true,
			default: false,
		},
		deliveredAt: {
			type: Date,
		},
	},
	{ timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
