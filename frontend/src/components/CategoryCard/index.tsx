import React from 'react'
import { Button, Card } from 'antd'

const { Meta } = Card

function CategoryCard() {
	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={
				<img
					alt="example"
					src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
				/>
			}
		>
			<Meta title="Europe Street beat" />
			<Meta description="sdsadadadasdasdasdsd" />
			<Button>Ver Mais!</Button>
		</Card>
	)
}

export default CategoryCard
