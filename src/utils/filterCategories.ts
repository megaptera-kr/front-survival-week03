import { Restaurants } from '../types/Restaurants';

type FilterCategoriesProps = {
    foodType: string;
    filteredRestaurants: Restaurants[];
}

const filterCategories = ({ foodType, filteredRestaurants }: FilterCategoriesProps) => {
  if (foodType === '전체') {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter(
    (restaurant) => restaurant.category === foodType,
  );
};

export default filterCategories;
