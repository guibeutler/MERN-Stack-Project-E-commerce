import { Document, Schema, model } from 'mongoose'

interface IReview extends Document {
	comment: string
	rating: number
	user: {
		_id: Schema.Types.ObjectId
		name: string
	}
}

const reviewSchema = new Schema<IReview>(
	{
		comment: { type: String, required: true },
		rating: { type: Number, required: true },
		user: {
			_id: { type: Schema.Types.ObjectId, required: true },
			name: { type: String, required: true },
		},
	},
	{ timestamps: true }
)

const Review = model<IReview>('Review', reviewSchema)

export default Review
