import { RestaurantsTable } from '../types/filterableRestaurant';

type filterCondition = {
  filterSearchText: string
  filterCategoryButton: string
}

const BUTTON_QUERY_INIT = '전체';

function normalize(text: string) {
  return text.trim();
}

const contain = (item: string, query: string) => item.includes(query);

function filterRestaurants(
  items: RestaurantsTable[],
  { filterSearchText, filterCategoryButton }: filterCondition,
) {
  const searchTextQuery = normalize(filterSearchText);
  const categoryButtonQuery = filterCategoryButton;

  return items.reduce((acc: RestaurantsTable[], cur) => {
    const filterTextCondition = contain(cur.name, searchTextQuery) || Boolean(!searchTextQuery);
    const filterButtonCondition = contain(cur.category, categoryButtonQuery)
      || categoryButtonQuery === BUTTON_QUERY_INIT;

    if (filterTextCondition && filterButtonCondition) {
      acc.push(cur);
    }

    return acc;
  }, []);
}
export default filterRestaurants;
