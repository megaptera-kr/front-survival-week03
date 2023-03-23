import json from "../../restaurants.json";
interface RestaurantTableBodyProps {
  menuCategory: string;
  restaurantName: string;
}
export default function RestaurantTableBody({
  menuCategory,
  restaurantName,
}: RestaurantTableBodyProps) {
  const menu = json.restaurants.filter((item) => {
    if (menuCategory === "전체") {
      return restaurantName ? item.name === restaurantName : item;
    }
    if (menuCategory !== "전체") {
      return restaurantName
        ? item.category === menuCategory && item.name === restaurantName
        : item.category === menuCategory;
    }
  });
  return (
    <tbody>
      {menu.map((items) => (
        <tr key={items.id}>
          <td>{items.name}</td>
          <td>{items.category}</td>
          <td>
            <ul>
              {items.menu.map((item) => (
                <li key={item.id}>{`${item.name}(${item.price}원)`}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
