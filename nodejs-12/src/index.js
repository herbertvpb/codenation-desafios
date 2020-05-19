const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const { products } = require('./data/products.json');

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

	const { promotion, totalRegularPrice } = filteredProducts.reduce((acc, product) => {
		const categoryExists = acc.categories.some(cat => 
			cat === product.category
		);

		acc.totalRegularPrice+= product.regularPrice;

		if (!categoryExists) acc.categories.push(product.category);

		acc.promotion = promotions[acc.categories.length - 1];

		return acc;
	}, {
		promotion : '',
		categories: [],
		totalRegularPrice: 0
	});

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

	const discountPercentage = `${((discountValue / totalRegularPrice) * 100).toFixed(2)}%`;

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discountPercentage,
	}
}

// console.log(getShoppingCart([120, 230, 310, 490], products))
// console.log(getShoppingCart([130, 140, 230, 260], products))
// console.log(getShoppingCart([110, 120, 130, 140], products))
// console.log(getShoppingCart([110, 130, 140, 230, 310, 330], products))

module.exports = { getShoppingCart };
