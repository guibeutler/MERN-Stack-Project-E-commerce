import React from 'react'
import { Col, Row, List, Button } from 'antd'
import SortOptions from '@components/SortOptions/index'
import PriceFilter from '@components/FiltersQuery/priceFilter'
import RatingFilter from '@components/FiltersQuery/ratingFilter'
import CategoryFilter from '@components/FiltersQuery/categoryFilter'
import ProductForList from '@components/ProductForList'
import PaginationComponent from '@components/Pagination'

function ProductList() {
	const data = [
		<SortOptions />,
		<PriceFilter />,
		<RatingFilter />,
		<CategoryFilter />,
	]

	return (
		<div>
			<Row>
				<Col md={3}>
					<List
						bordered
						dataSource={data}
						renderItem={(item) => <List.Item> {item}</List.Item>}
					/>
					<Button> Filtrar</Button>
					<Button> Limpar</Button>
				</Col>
				<Col>
					<ProductForList />
					<PaginationComponent />
				</Col>
			</Row>
		</div>
	)
}

export default ProductList
