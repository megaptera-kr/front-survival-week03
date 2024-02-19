import MenuList from "./MenuList";

import Restaurant from "../types/Restaurant";

type RestaurantRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <MenuList menu={menu} />
      </td>
    </tr>
  );
}
