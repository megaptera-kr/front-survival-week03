import React from 'react';
import { Restaurant } from '../types/type';

type RestaurantsItemProps = {
  restaurants: Restaurant[];
}

export default function RestaurantsItem({ restaurants }: RestaurantsItemProps) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>
            {restaurant.name}
          </td>
          <td>
            {restaurant.category}
          </td>
          <td style={{ paddingLeft: '60px' }}>
            {restaurant.menu.map((menuItem) => (
              <li key={menuItem.id}>
                {menuItem.name}
                (
                {menuItem.price}
                원)
              </li>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
}
