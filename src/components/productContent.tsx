import { Menu, Restaurant } from '../types/Restaurant';

export default function ProductContent({ product }: { product: Restaurant }) {
  return (
    <tr>
      <td>
        {product.name}
      </td>
      <td>
        {product.category}
      </td>
      <td>
        <ul>
          {
            product.menu.map((menu:Menu) => (
              <li key={menu.id}>
                {menu.name}
                (
                {menu.price.toLocaleString()}
                원)
              </li>
            ))
          }
        </ul>
      </td>
    </tr>
  );
}
