import React from 'react'
import { Button } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

export default function Product({product}) {
	const { title, description, price } = product
	const state = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	console.log("state on product", state)

	const buy = () => {
		dispatch({
			type: "ADD_ITEM_TO_CART",
			payload: {
				item: product
			}
		})
	};

	return (
		<div className="product">
			<Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg'} size='large' bordered />
			<div className="bottom">
				<h1>{title}</h1>
				<h2>{description}</h2>
				<div className="price">R${price}</div>
				<Button
					primary
					negative
					content='Adicionar' icon='plus' labelPosition='right' onClick={() => buy()} />

				{/* <Button primary animated onClick={() => buy(productId)}>
					<Button.Content visible>Adicionar</Button.Content>
					<Button.Content hidden>
						<Icon name='plus' />
					</Button.Content>
				</Button> */}
			</div>
		</div>
	)
}
