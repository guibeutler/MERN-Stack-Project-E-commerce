import React from 'react'
import {
	Col,
	Layout,
	Row,
	Image,
	List,
	Alert,
	Form,
	Input,
	Button,
	Select,
	InputNumber,
} from 'antd'
import { Rating } from 'react-simple-star-rating'
import AlertAddToCart from '@components/Alerts/addedToCart'
import img1 from '@assets/imgCarousel/img1.png'
import img2 from '@assets/imgCarousel/img2.jpg'
import img3 from '@assets/imgCarousel/img3.jpeg'
import TextArea from 'antd/es/input/TextArea'

function ProductDetails() {
	const product = [
		'Product Name',
		'Price',
		'Description',
		<Rating size={20} readonly initialValue={5} />,
	]
	function onChange(value: number) {
		console.log('changed', value)
	}
	const data = [
		'Product status',

		<InputNumber
			defaultValue={1}
			min={1}
			max={100}
			step={1}
			onChange={onChange}
		/>,
		<Button>Add to cart</Button>,
	]

	return (
		<Layout style={{ backgroundColor: '#fff' }}>
			<AlertAddToCart />
			<Row>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<Image width={300} src={img1} />
					<Image width={300} src={img2} />
					<Image width={300} src={img3} />
				</Col>
				<Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<Row>
						<Col md={8}>
							<List
								size="default"
								dataSource={product}
								renderItem={(item) => <List.Item> {item}</List.Item>}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h5>REVIEWS</h5>
						</Col>
					</Row>
					<hr />
					send review form
					<Alert
						message="Faca Login antes de enviar uma mensagem"
						type="error"
					/>
					<Form layout="vertical">
						<Form.Item label="E-mail">
							<Input />
						</Form.Item>
						<Form.Item label="Text Area">
							<TextArea />
						</Form.Item>
						<Form.Item>
							<Button>Button</Button>
						</Form.Item>
					</Form>
				</Col>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<List
						size="default"
						dataSource={data}
						renderItem={(item) => <List.Item> {item}</List.Item>}
					/>
				</Col>
			</Row>
		</Layout>
	)
}

export default ProductDetails
