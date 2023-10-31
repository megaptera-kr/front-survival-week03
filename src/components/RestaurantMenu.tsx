import React from 'react';
import { Menu } from '../type/Restaurants';

export default function RestaurantMenu({ menus }: { menus: Menu[] }) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          <span>{menu.name}</span>
          <span>{menu.price}</span>
        </li>
      ))}
    </ul>
  );
}
