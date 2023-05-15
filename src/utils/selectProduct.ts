import type Product from '../type/Restaurant';

export default function selectProduct(
	items: Product[],
	category: string,
): Product[] {
	return items.filter(item => item.category === category);
}
