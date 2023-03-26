import { useState } from "react";
import Restaurant from "../types/Restaurant";
import filterRestaurants from "../utils/filterRestaurants";
import selectCategories from "../utils/selectCategory";
import RestaurantTable from "./RestaurantTable";
import SearchBar from "./SearchBar";

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [menuCategory, setMenuCategory] = useState<string>("전체");
  const [restaurantName, setRestaurantName] = useState<string>("");

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    restaurantName,
    menuCategory,
  });

  return (
    <div>
      <SearchBar
        categories={categories}
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
        setMenuCategory={setMenuCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
