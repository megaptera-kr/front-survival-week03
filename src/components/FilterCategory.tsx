import { Restaurant } from '../types/Restaurant';

type FilterCategoryProps = {
  restaurants: Restaurant[],
  setFilterCategory: (value: string) => void
}

export default function FilterCategory({ restaurants, setFilterCategory }: FilterCategoryProps) {
  const categories = restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  return (
    <>
      <button type="button" onClick={() => setFilterCategory('전체')}>전체</button>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => setFilterCategory(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
}
