import type Product from '../type/Product';

export default function selectProduct(
	items: Product[],
	category: string,
): Product[] {
	return items.filter(item => item.category === category);
}
