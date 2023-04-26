import type Product from '../type/Product';

type ProductRowProps = {
	key: string;
	product: Product;
};

export default function ProductRow({product}: ProductRowProps) {
	return (
		<tr>
			<td>
				<span style={{
					color: product.stocked ? 'red' : 'black',
				}}
				>
					{product.name}
				</span>
			</td>
			<td>{product.price}</td>
		</tr>
	);
}
