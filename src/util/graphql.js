import gql from 'graphql-tag'

export const FETCH_PRODUCTS = gql `
	{
		getProducts {
			id
			title
			description
			price
			active
		}
	}
`
export const FETCH_ACTIVE_PRODUCTS = gql `
	{
		getActiveProducts {
			id
			title
			description
			price
			active
		}
	}
`
