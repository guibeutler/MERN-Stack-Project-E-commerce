import React, { Fragment } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

function RatingFilter() {
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(e.target.value)
	}

	return (
		<>
			<span>Classificação</span>
			{Array.from({ length: 5 }).map((_, idx) => (
				<Fragment key={idx}>
					<Checkbox onChange={onChange} value={5 - idx}>
						<Rating readonly size={20} initialValue={5 - idx} />
					</Checkbox>
					<br />
				</Fragment>
			))}
		</>
	)
}
export default RatingFilter
