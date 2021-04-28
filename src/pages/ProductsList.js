import React from 'react'
import { Segment, Image } from 'semantic-ui-react';
import Product from './../components/Product';

export default function ProductsList({ loading, productsList }) {

	return (
		<div className="container">
			<div className="products">
			{
				loading ? (
					<Segment loading>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Segment>
				) : (
					productsList?.map((item) => (
						<div key={item.id}>
							<Product
								product={item}
							/>
						</div>
					))
				)
			}
			</div>
		</div>
	)
}
