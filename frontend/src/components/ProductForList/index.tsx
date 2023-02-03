import React from 'react'
// import { Button, Card } from 'antd'
// import Meta from 'antd/es/card/Meta'
import { Rating } from 'react-simple-star-rating'

import { Card, Typography, Button, Avatar } from 'antd'

const { Meta } = Card

function ProductForList() {
	return (
		<>
			<Card
				tabList
				hoverable
				style={{ width: 240, marginTop: '30px', marginBottom: '50px' }}
				cover={
					<img
						alt="example"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
					/>
				}
			>
				<Meta title="Europe Street beat" description="www.instagram.com" />
				<Rating readonly size={20} initialValue={5} /> (1)
				<Button>Ver</Button>
			</Card>
		</>
	)
}
export default ProductForList
