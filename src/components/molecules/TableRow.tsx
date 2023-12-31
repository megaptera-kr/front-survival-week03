import { Restaurant } from '../../models/Restaurant';

interface Props {
    restaurant: Restaurant;
}

export default function TableRow({ restaurant }: Props) {
  const {
    id, name, category, menu,
  } = restaurant;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((food) => <li key={food.id}>{`${food.name}(${food.price}원)`}</li>)}
        </ul>
      </td>
    </tr>
  );
}
