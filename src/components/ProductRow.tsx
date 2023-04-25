import Product from '../type/Product';

type ProductRowProps = {
  product: Product;
}

export default function ProductRow({ product }: ProductRowProps) {
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
