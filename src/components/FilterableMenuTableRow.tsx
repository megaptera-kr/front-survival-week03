import { RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableRowProps = {
  restauant: RestaurantItem;
};

export default function FilterableMenuTableRow({
  restauant,
}: FilterableMenuTableRowProps) {
  return (
    <tr>
      <td>{restauant.name}</td>
      <td>{restauant.category}</td>
      <td>
        <ul>
          {restauant.menu.map((item) => (
            <li key={`${item.id}-${item.name}-${item.price}`}>
              {`${item.name}(${item.price.toLocaleString()}원)`}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
