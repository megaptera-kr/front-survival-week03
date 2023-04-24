import Table from '../table/Table';
import RestaurantMenu from '../restaurantMenu/RestaurantMenu';

import type { Restaurant, RestaurantTableColumns } from '../../types/restaurants';
import { Columns } from '../../types/table';

interface RestaurantTableProps {
  restaurants: Restaurant[]
}

export default function ResturantTable({ restaurants }: RestaurantTableProps) {
  const columns: Columns<RestaurantTableColumns> = [
    { key: 'name', label: '식당이름' },
    { key: 'category', label: '종류' },
    { key: 'menu', label: '메뉴' },
  ];

  const renderColumn = (data: Restaurant, key: RestaurantTableColumns) => {
    switch (key) {
    case 'category':
    case 'name':
      return data[key];

    case 'menu': return <RestaurantMenu menus={data[key]} />;

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return (
    <Table columns={columns} title="식당 목록">
      <>
        {restaurants.map((restaurant) => (
          <Table.Row key={restaurant.id}>
            {columns.map(({ key }) => (
              <Table.Cell key={key}>{renderColumn(restaurant, key)}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </>
    </Table>
  );
}
