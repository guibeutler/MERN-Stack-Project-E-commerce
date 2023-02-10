/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Button, Checkbox, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

function Login() {
	const [loadings, setLoadings] = useState<boolean[]>([])
	const navigate = useNavigate()

	const enterLoading = (index: number) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings]
			newLoadings[index] = true
			return newLoadings
		})

		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings]
				newLoadings[index] = false
				return newLoadings
			})
		}, 6000)
	}
	return (
		<Row
			style={{
				display: 'flex',
				justifyContent: 'center',
				margin: '20px',
			}}
		>
			<Col style={{ width: '350px' }}>
				<h1>Login</h1>
				<Form
					layout="vertical"
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="E-mail"
						name="email"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Senha"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item>
						{loadings[1] ? (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Entrando
							</Button>
						) : (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Login
							</Button>
						)}
						<br />
						Não possui conta?{' '}
						<a onClick={() => navigate('/register')}>Cadastrar!</a>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default Login
