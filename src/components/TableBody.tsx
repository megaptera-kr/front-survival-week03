import RestaurantsType from '../types/RestaurantsType';

type TableBodyType = {
    restaurants: RestaurantsType[]
}

export default function TableBody({ restaurants }: TableBodyType) {
  return (
    <tbody>

      {restaurants.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>
            <ul>
              {product.menu.map((menu) => (
                <li key={menu.id}>
                  {menu.name}
                  (
                  {menu.price}
                  )
                </li>
              ))}
            </ul>
          </td>
        </tr>
      ))}

    </tbody>
  );
}
