import data from "../restaurants.json";
import RestaurantMenu from "./containers/RestaurantMenu";

export default function App() {
  return (
    <div className="app">
      <RestaurantMenu data={data.restaurants} />
    </div>
  );
}
