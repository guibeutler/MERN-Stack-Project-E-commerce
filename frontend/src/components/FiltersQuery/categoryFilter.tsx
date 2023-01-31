import React from 'react'
import { Checkbox, Col, Row } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

function CategoryFilter() {
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(e)
	}
	const plainOptions = ['Kits', 'Geleias']

	return (
		<Row>
			<Col>
				<span>Categorias</span>
				<Checkbox.Group options={plainOptions} onChange={onChange} />
			</Col>
		</Row>
	)
}
export default CategoryFilter
