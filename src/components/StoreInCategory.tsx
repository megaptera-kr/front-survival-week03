import Restaurants from '../type/restaurantstype';

type StoreInCategoryProps = {
  items: Restaurants
  key : string
}

export default function StoreInCategory({ key, items }: StoreInCategoryProps) {
  return (
    <tr key={key}>
      <td>{items.name}</td>
      <td>{items.category}</td>
      <td>
        <ul>
          {items.menu.map((item) => (
            <li key={item.id}>
              {item.name}
              (
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원)
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
