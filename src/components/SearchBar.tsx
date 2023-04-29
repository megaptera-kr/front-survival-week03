import CategoryButton from './CategoryButton';

type SearchBarProps = {
  categories: string[];
}

export default function SearchBar(
  { categories } : SearchBarProps,
) {
  return (
    <>
      {/* 눕혀야함 */}
      <div>
        <label htmlFor="restaurant-name">검색</label>
        <input type="search" placeholder="식당 이름" name="resturant-name" />
      </div>
      {/* Category iterate */}
      <ul>
        <CategoryButton key="전체" category="전체" />
        {categories.map((category) => (
          <CategoryButton key={category} category={category} />
        ))}
      </ul>
    </>
  );
}
