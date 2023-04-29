import CategoryButton from './CategoryButton';

type CategoryContainerProps = {
  categories : string[];
  filterCategory: string;
  setFilterCategory: (value:string) => void;
}

export default function CategoryContainer(
  {
    categories,
    filterCategory,
    setFilterCategory,
  } : CategoryContainerProps,
) {
  return (
    <ul>
      <CategoryButton key="전체" category="전체" />
      {categories.map((category) => (
        <CategoryButton key={category} category={category} />
      ))}
    </ul>
  );
}
