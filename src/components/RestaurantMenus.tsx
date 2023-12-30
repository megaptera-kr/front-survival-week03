import React from "react";

import { Menu } from "../types/Menu";

type RestaurantMenu = {
  menu: Menu;
};

const RestaurantMenus = ({ menu }: RestaurantMenu) => (
  <li>{`${menu.name}(${menu.price}원)`}</li>
);

export default RestaurantMenus;
