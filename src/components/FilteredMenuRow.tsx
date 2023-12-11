import Menu from './Menu';

type FilteredMenuRowProps = {
  restaurant: Restaurant;
};

export default function FilteredMenuRow({ restaurant }: FilteredMenuRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <Menu menuItems={restaurant.menu} />
    </tr>
  );
}
