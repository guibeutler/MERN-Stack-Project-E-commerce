import { ObjectId } from 'mongodb'

const reviews = [
	{
		comment:
			'Review Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
		rating: 5,
		user: { _id: new ObjectId(), name: 'John Doe' },
	},
	{
		comment:
			'Review Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
		rating: 4,
		user: { _id: new ObjectId(), name: 'John Effrey' },
	},
	{
		comment:
			'Review Lorem Ipsum, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
		rating: 3,
		user: { _id: new ObjectId(), name: 'John Fallen' },
	},
]

export default reviews
