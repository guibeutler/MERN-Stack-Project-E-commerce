import React from 'react'
import { Col, Layout, Row } from 'antd'

function UserOrderDetails() {
	return (
		<div
		// style={{
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	justifyContent: 'center',
		// }}
		>
			<Row style={{ display: 'flex', justifyContent: 'center' }}>
				<h1>Detalhes do pedido</h1>
			</Row>
			<Row style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Col>
					<h2>Entrega</h2>
				</Col>
				<Col>
					<h2>Método de pagamento</h2>
				</Col>
				<Col>
					<h2>Resumo do pedido</h2>
				</Col>
			</Row>
		</div>
	)
}

export default UserOrderDetails
