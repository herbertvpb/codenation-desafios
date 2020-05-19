const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const filteredProducts = productsList.filter(product => 
		ids.includes(product.id)
	);

	const products = filteredProducts.map(product => {
		return {
			name: product.name,
			category: product.category,
		}
	});

	const { categories, totalRegularPrice } = filteredProducts.reduce((acc, product) => {
		const categoryExists = acc.categories.some(cat => 
			cat === product.category
		);

		if (!categoryExists) acc.categories.push(product.category);

		acc.totalRegularPrice+= product.regularPrice;

		return acc;
	}, {
		categories: [],
		totalRegularPrice: 0
	});

	const promotion = promotions[categories.length - 1];

	const totalPrice = filteredProducts.reduce((acc, product) => {
		const promotionElement = product.promotions.find(promo => {
			return promo.looks.includes(promotion);
		});

		acc+= promotionElement 
			? promotionElement.price 
			: product.regularPrice;

		return acc;
	}, 0).toFixed(2);

	const discountValue = (totalRegularPrice - totalPrice).toFixed(2);

	const discount = ((discountValue / totalRegularPrice) * 100).toFixed(2) + '%';

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount,
	}
}

module.exports = { getShoppingCart };
