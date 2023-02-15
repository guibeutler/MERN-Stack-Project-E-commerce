import React from 'react'
import { Alert, Button, Col, List, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import CartItemComponent from '@components/CartItemComponent'

function Cart() {
	const navigate = useNavigate()
	const data = [
		'Subtotal (2 itens)',
		'Preco: R$ 55,00',
		<Button
			type="primary"
			style={{ width: '100px' }}
			onClick={() => navigate('/user/cart-details')}
		>
			Checkout
		</Button>,
	]

	return (
		<Row
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Col>
				<h1>Carrinho</h1>
				{Array.from({ length: 3 }).map((item, idx) => (
					<CartItemComponent key={idx} />
				))}
				<Alert message="Carrinho Vazio :(" type="warning" />
			</Col>
			<Col>
				<List
					bordered
					size="small"
					dataSource={data}
					renderItem={(item) => <List.Item>{item}</List.Item>}
				/>
			</Col>
		</Row>
	)
}

export default Cart
