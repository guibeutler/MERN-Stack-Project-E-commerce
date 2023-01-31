import React from 'react'
import { Pagination } from 'antd'

function PaginationComponent() {
	return (
		<>
			<Pagination defaultCurrent={1} total={50} />
		</>
	)
}
export default PaginationComponent
