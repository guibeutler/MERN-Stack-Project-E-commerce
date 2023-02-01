import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Rating } from 'react-simple-star-rating'

function ProductForList() {
	return (
		<>
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
				<Meta title="Europe Street beat" description="www.instagram.com" />
			</Card>
		</>
	)
}
export default ProductForList
