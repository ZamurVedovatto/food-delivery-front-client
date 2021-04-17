import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default function Product({ key, productId, image, title, description, price }) {

	const buy = () => {
		// this.props.addCartItem(this.props.productId);
		console.log("buy")
	};

	return (
		// imageUrl = config.apiBaseUrl + 'files/' + this.props.image.id + '/' + this.props.image.filename;

		<div className="product">
			<img src={image} />
				<div className="bottom">
					<h1>{title}</h1>
					<h2>{description}</h2>
					<div className="price">${price}</div>
					<Button primary animated onClick={() => buy(productId)}>
						<Button.Content visible>Adicionar</Button.Content>
						<Button.Content hidden>
							<Icon name='plus' />
						</Button.Content>
					</Button>
				</div>
		</div>
	)
}
