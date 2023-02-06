import React from 'react'
import { Col, Layout, Row } from 'antd'

function ProductDetails() {
	return (
		<Layout style={{ backgroundColor: '#fff' }}>
			<Row>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					Images
				</Col>
				<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<Row>
						<Col md={8}> Product name, price, description, rating</Col>
					</Row>
					<Row>
						<Col>
							<h5>REVIEWS</h5>
						</Col>
					</Row>
					<hr />
					send review form
				</Col>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<p>Product status, quantity, add to cart</p>
				</Col>
			</Row>
		</Layout>
	)
}

export default ProductDetails
