import json from "../../restaurants.json";
import RestaurantTableBody from "./RestaurantTableBody";
import RestaurantTableColumn from "./RestaurantTableColumn";

interface RestaurantTableProps {
  menuCategory: string;
  restaurantName: string;
}

export default function RestaurantTable({
  menuCategory,
  restaurantName,
}: RestaurantTableProps) {
  return (
    <table>
      <RestaurantTableColumn />
      <RestaurantTableBody
        menuCategory={menuCategory}
        restaurantName={restaurantName}
      />
    </table>
  );
}
