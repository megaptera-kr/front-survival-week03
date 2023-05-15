import type Product from '../type/Restaurant';

export default function selectCategories(products: Product[]): string[] {
	return products.reduce((acc: string[], product: Product) => {
		const {category} = product;
		return acc.includes(category) ? acc : [...acc, product.category];
	}, []);
}
