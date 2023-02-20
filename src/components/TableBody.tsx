import menuInfoType from '../types/menuInfoType';
import restaurantType from '../types/restaurantType';
import MenuList from './MenuList';

export default function TableBody({ restaurant }: {restaurant:restaurantType}) {
  return (
    <tr
      key={restaurant.id}
    >
      <td>
        {restaurant.name}

      </td>
      <td>
        {restaurant.category}
      </td>
      <td
        style={{
          paddingInline: '2rem',
        }}
      >
        {
          restaurant.menu.map((menuInfo: menuInfoType) => (
            <MenuList key={menuInfo.id} menuInfo={menuInfo} />
          ))
        }
      </td>
    </tr>
  );
}
