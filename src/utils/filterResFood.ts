import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type filterResFoodCondition = {
  clickCategory: string;
  searchText: string;
}

export default function filterResFood(
  { clickCategory, searchText }: filterResFoodCondition,
  restaurant: Restaurant[],
): Restaurant[] {
  const category = (restaurants: Restaurant) => (
    clickCategory === '전체'
      ? restaurants : (normalize(restaurants.category)).includes(normalize(clickCategory))
  );

  const contains = (restaurants: Restaurant) => (normalize(restaurants.name))
    .includes(normalize(searchText));

  return restaurant.filter(category).filter(contains);
}
