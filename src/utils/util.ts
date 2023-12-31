import { Restaurant } from '../models/Restaurant';
import { FoodCategory } from '../types';

type FilterConditions = {
    filteredText: string;
    filteredCategory: string;
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

/**
 * 식당 정보들 중 카테고리 정보만 추출해서 배열을 반환하는 함수
 * @param restaurants
 */
export function selectCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc: FoodCategory[], restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}

/**
 * 검색 텍스트와 선택한 카테고리에 따라 식당 정보들을 반환하는 함수
 * @param restaurants
 * @param filteredText
 * @param filteredCategory
 */
export default function filterRestaurants(
  restaurants: Restaurant[],
  { filteredText, filteredCategory }: FilterConditions,
): Restaurant[] {
  const filteredRestaurants = filteredCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant: Restaurant) => (restaurant.category === filteredCategory));

  const query = normalize(filteredText);

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter((restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  ));
}
