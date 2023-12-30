import { Restaurants } from "../types/Restaurants";

type filterCartegoriesProps = {
    foodType: string;
    filteredRestaurants: Restaurants[];

}
export const filterCartegories = ({foodType, filteredRestaurants}:filterCartegoriesProps) => {
   return     foodType === "전체"
   ? filteredRestaurants
   : filteredRestaurants.filter(
       (restaurant) => restaurant.category === foodType
     );
}