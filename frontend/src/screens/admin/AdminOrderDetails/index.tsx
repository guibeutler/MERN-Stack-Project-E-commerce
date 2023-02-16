import React from 'react'
import { Alert, Col, List, Row, Select } from 'antd'
import CartItemComponent from '@components/CartItemComponent'

const shipping = [
	'Nome: Jonh Doe',
	'Endereço: São Teodoro, 577',
	'Telefone: 55 55555-5555',
	<Alert message="Error Text" type="error" />,
]

const paymentMethod = [
	<Select
		disabled
		style={{ width: 250 }}
		options={[{ value: 'Paypal', label: 'Paypal' }]}
	/>,
	<Alert message="Success Text" type="success" />,
]

const orderSummary = [
	'Valor: R$ 55.00',
	'Envio: incluso',
	'Total: R$ 55.00',
	<Alert message="Error Text" type="error" />,
]

function AdminOrderDetails() {
	return (
		<div>
			<Row style={{ display: 'flex', justifyContent: 'center' }}>
				<h1>Detalhes do pedido</h1>
			</Row>
			<Row style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Col>
					<List
						bordered
						size="small"
						header={<h2>Entrega</h2>}
						dataSource={shipping}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Col>
				<Col>
					<List
						bordered
						size="small"
						header={<h2>Método de pagamento</h2>}
						dataSource={paymentMethod}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Col>
				<Col>
					<List
						bordered
						size="small"
						header={<h2>Resumo do pedido</h2>}
						dataSource={orderSummary}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Col>
			</Row>
			<Row
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<h2>Itens do pedido</h2>
				<Col>
					<List>
						{Array.from({ length: 3 }).map((item, idx) => (
							<CartItemComponent key={idx} />
						))}
					</List>
				</Col>
			</Row>
		</div>
	)
}

export default AdminOrderDetails
