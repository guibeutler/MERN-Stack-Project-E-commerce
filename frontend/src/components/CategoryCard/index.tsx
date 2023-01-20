import React from 'react'
import { Button, Card, Row, Col } from 'antd'

const { Meta } = Card

function CategoryCard() {
	return (
		// <Card
		// 	hoverable
		// 	style={{ width: 150 }}
		// 	cover={
		// 		<img
		// 			alt="example"
		// 			src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
		// 		/>
		// 	}
		// >
		// 	<Meta title="Europe Street beat" />
		// 	<Meta description="sdsadadadasdasdasdsd" />
		// 	<Button>Ver Mais!</Button>
		// </Card>

		<Card
			title="Default size card"
			extra={<a href="/">More</a>}
			style={{ width: 300, border: '1px solid #e19563' }}
		>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	)
}

export default CategoryCard
