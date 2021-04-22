import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

export default function Product({ productId, image, title, description, price }) {
	const buy = () => {
		// this.props.addCartItem(this.props.productId);
		console.log("buy")
	};

	return (
		// imageUrl = config.apiBaseUrl + 'files/' + this.props.image.id + '/' + this.props.image.filename;

		<div className="product">
			<Image src={"https://api.food-delivery.mishast.com/files/2780dba2-f18e-11e9-81b4-2a2ae2dbcce4/greece_salad.jpg"} size='large' bordered />
			<div className="bottom">
				<h1>{title}</h1>
				<h2>{description}</h2>
				<div className="price">R${price}</div>
				<Button
					primary
					negative
					content='Adicionar' icon='plus' labelPosition='right' onClick={() => buy(productId)} />

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
