import { useState } from "react";

import SearchBar from "./SearchBar";
import RestaurantsTable from "./RestaurantsTable";

import Restaurant from "../types/Restaurant";

import selectCategories from "../utils/selectCategories";
import filterRestaurants from "../utils/filterRestaurants";

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>("");
  const [category, setCategory] = useState<string>("전체");

  const categories = selectCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText,
    category,
  });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setCategory={setCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
