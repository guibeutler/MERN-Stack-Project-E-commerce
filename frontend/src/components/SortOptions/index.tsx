import React from 'react'
import { Select, Space } from 'antd'

function SortOptions() {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<Space wrap>
			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
				options={[
					{ value: 'jack', label: 'Jack' },
					{ value: 'lucy', label: 'Lucy' },
					{ value: 'Yiminghe', label: 'yiminghe' },
				]}
			/>
		</Space>
	)
}
export default SortOptions
