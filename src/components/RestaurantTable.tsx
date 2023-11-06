import { Restaurant, Restaurants } from "../types/data";

interface Props {
  data: Restaurants;
}

function RestaurantRow({ restaurant }: { restaurant: Restaurant }) {
  const { id, name, category, menu } = restaurant;

  return (
    <tr key={`${id}`}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.id}>{`${menuItem.name}(${menuItem.price}원)`}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function RestaurantTable({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <RestaurantRow key={`${row.id}_${row.name}`} restaurant={row} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
