import React from 'react'
import { Alert, Button, Col, List, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

function Cart() {
	const navigate = useNavigate()
	const data = [
		'Subtotal (2 itens)',
		'Preco: R$ 55,00',
		<Button onClick={() => navigate('/user/order-details')}>Checkout</Button>,
	]

	return (
		<Row
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Col md={8}>
				<h1>Carrinho</h1>
				{Array.from({ length: 3 }).map((item) => (
					<>
						CartItemComponent <br />
					</>
				))}
				<Alert message="Carrinho Vazio :(" type="warning" />
			</Col>
			<Col md={4}>
				<List
					bordered
					size="small"
					dataSource={data}
					renderItem={(item) => <List.Item> {item}</List.Item>}
				/>
			</Col>
		</Row>
	)
}

export default Cart
