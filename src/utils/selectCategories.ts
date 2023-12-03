export default function getCategories(restaurantList: Restaurant[]): string[] {
  return restaurantList.reduce(
    (acc: string[], restaurant: Restaurant) => {
      const { category } = restaurant;
      return acc.includes(category) ? acc : [...acc, category];
    },
    ['전체'],
  );
}
