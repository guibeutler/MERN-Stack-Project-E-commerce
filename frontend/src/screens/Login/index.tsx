/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Alert, Button, Checkbox, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import './style.css'

const onFinish = (values: any) => {
	console.log('Success:', values)
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
			<Col>
				<h1>Fazer Login</h1>

				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your Username!' }]}
					>
						<Input
							prefix={<MailOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Lembrar-me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Esqueceu a senha?
						</a>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							loading={loadings[1]}
							onClick={() => enterLoading(1)}
						>
							Login
						</Button>{' '}
						<br />
						Novo aqui? <a onClick={() => navigate('/register')}>Cadastre-se!</a>
					</Form.Item>
				</Form>
				<Alert
					style={{ textAlign: 'center' }}
					message="E-mail ou senha inválidos!"
					type="error"
				/>
			</Col>
		</Row>
	)
}

export default Login
