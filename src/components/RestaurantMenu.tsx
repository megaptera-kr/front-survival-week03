import { useState } from "react";
import RestaurantTable from "./RestaurantTable";
import SearchBar from "./SearchBar";

export default function RestaurantMenu() {
  const [menuCategory, setMenuCategory] = useState("전체");
  const [restaurantName, setRestaurantName] = useState("");
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
        setMenuCategory={setMenuCategory}
      />
      <RestaurantTable
        menuCategory={menuCategory}
        restaurantName={restaurantName}
      />
    </>
  );
}
