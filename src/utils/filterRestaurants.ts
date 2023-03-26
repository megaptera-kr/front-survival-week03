import Restaurant from '../types/Restaurant';

function textNormalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type filterStatus = {
  filterText: string;
  selectCategory: string;
}

// 셀렉트 된 카테고리만 필터해서 레스토랑리스트를 반환한다.
export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, selectCategory }: filterStatus,
): Restaurant[] {
  const selecList = (restaurant: Restaurant) => (restaurant.category === selectCategory);
  const filteredRestaurants = selectCategory === '전체'
    ? restaurants
    : restaurants.filter(selecList);

  const query = textNormalize(filterText);
  const contains = (restaurant: Restaurant) => (textNormalize(restaurant.name).includes(query));

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter(contains);
}
