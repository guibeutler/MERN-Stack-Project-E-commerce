import React from 'react'
import { Row } from 'antd'
import Carousel from '@components/Carousel'
import CategoryCard from '@components/CategoryCard'

function Home() {
	const categories = ['Geleias', 'Kits de Geleia', 'Novidades']

	return (
		<>
			<Carousel />
			<Row style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
				{categories.map(() => (
					<CategoryCard />
				))}
			</Row>
		</>
	)
}

export default Home
