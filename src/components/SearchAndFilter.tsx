import React from "react";

import { FoodType } from "../types/FoodType";
import SearchBar from "./SearchBar";

type SearchAndFilterProps = {
  query: string;
  setQuery: (query: string) => void;
  handleFoodTypes: (typs: FoodType) => void;
  filterFoodTypes: string[];
};

type FoodTypeBtnsProps = {
  handleFoodTypes: (typs: FoodType) => void;
  filterFoodTypes: string[];
};

const FoodTypeBtns = ({
  handleFoodTypes,
  filterFoodTypes,
}: FoodTypeBtnsProps) => {
  return (
    <div>
      {["전체",...filterFoodTypes].map((type) => (
        <button key={type} onClick={() => handleFoodTypes(type as FoodType)}>
          {type}
        </button>
      ))}
    </div>
  );
};

const SearchAndFilter = ({
  query,
  setQuery,
  handleFoodTypes,
  filterFoodTypes,
}: SearchAndFilterProps) => {
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <FoodTypeBtns
        handleFoodTypes={handleFoodTypes}
        filterFoodTypes={filterFoodTypes}
      ></FoodTypeBtns>
    </div>
  );
};
export default SearchAndFilter;
