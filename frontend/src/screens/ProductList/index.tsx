import React from 'react'
import { Col, Row, List, Button } from 'antd'
import SortOptions from '@components/SortOptions/index'
import PriceFilter from '@components/FiltersQuery/priceFilter'
import RatingFilter from '@components/FiltersQuery/ratingFilter'

function ProductList() {
	const data = [<SortOptions />, <PriceFilter />, <RatingFilter />]

	return (
		<div>
			<Row style={{ display: 'flex', flexDirection: 'column' }}>
				<Col md={3}>
					<List
						bordered
						dataSource={data}
						renderItem={(item) => <List.Item> {item}</List.Item>}
					/>
				</Col>
				<Col>
					<Button> Filtrar</Button>
					<Button> Limpar</Button>
				</Col>
			</Row>
		</div>
	)
}

export default ProductList
