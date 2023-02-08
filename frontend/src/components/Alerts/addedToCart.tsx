import React, { useState } from 'react'
import { Alert, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './style.css'

function AlertAddToCart() {
	const [show, setShow] = useState(true)
	const navigate = useNavigate()
	const handleClose = () => {
		setShow(false)
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '5px',
			}}
		>
			{show && (
				<Alert
					style={{ width: '60%', height: '10vh' }}
					message="Item adicionado ao carrinho!"
					type="success"
					showIcon
					closable
					onClose={handleClose}
					action={[
						<Button onClick={() => navigate('/product-list')}>
							<ArrowLeftOutlined />
						</Button>,

						<Button onClick={() => navigate('/cart')}>
							<ShoppingCartOutlined />
						</Button>,
					]}
				/>
			)}
		</div>
	)
}

export default AlertAddToCart
