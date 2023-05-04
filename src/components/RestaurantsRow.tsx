import Restaurant from '../types/Restaurant';

type RestaurantsRowProps = {
    Bistro: Restaurant;
}

export default function RestaurantsRow({ Bistro }: RestaurantsRowProps) {
  return (
    <tr key={Bistro.id}>
      <td>{Bistro.name}</td>
      <td>{Bistro.category}</td>
      <td>
        <ul>
          {Bistro.menu.map((food) => (
            <li key={food.name}>
              {food.name}
              (
              {food.price.toLocaleString()}
              원)
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
