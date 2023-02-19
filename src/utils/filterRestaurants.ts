import { Restaurants } from '../types/filterableRestaurant';

type filterCondition = {
  filterText: string
  filterButton: string
}

const BUTTON_QUERY_INIT = '전체';

function normalize(text: string) {
  return text.trim();
}

const contain = (item: string, query: string) => item.includes(query);

function filterRestaurants(items: Restaurants[], { filterText, filterButton }: filterCondition) {
  const textQuery = normalize(filterText);
  const buttonQuery = filterButton;

  return items.reduce((acc: Restaurants[], cur) => {
    const filterTextCondition = contain(cur.name, textQuery) || !textQuery;
    const filterButtonCondition = contain(cur.category, buttonQuery)
      || buttonQuery === BUTTON_QUERY_INIT;

    if (filterTextCondition && filterButtonCondition) {
      acc.push(cur);
    }

    return acc;
  }, []);
}
export default filterRestaurants;
