import React from 'react'
import { Button, Col, Row, InputNumber } from 'antd'
import img1 from '@assets/imgCarousel/img1.png'
import { DeleteOutlined } from '@ant-design/icons'

function CartItemComponent() {
	function onChange(value: number) {
		console.log('changed', value)
	}
	return (
		<Row gutter={[10, 32]}>
			<Col>
				<img width={150} src={img1} alt="" />
			</Col>
			<Col>
				<p>
					Geleia de <br />
					morango
				</p>
			</Col>
			<Col>
				<b>Preço: R$ 55,00</b>
			</Col>
			<Col>
				<InputNumber
					style={{ width: '52px' }}
					defaultValue={1}
					min={1}
					max={100}
					step={1}
					onChange={onChange}
				/>
			</Col>
			<Col>
				<Button style={{ width: '50px' }}>
					<DeleteOutlined />
				</Button>
			</Col>
		</Row>
	)
}

export default CartItemComponent
