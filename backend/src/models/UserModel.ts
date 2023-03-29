import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		lastName: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		phoneNumber: {
			type: String,
		},
		address: {
			type: String,
		},
		country: {
			type: String,
		},
		zipCode: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
			require: true,
			default: false,
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
