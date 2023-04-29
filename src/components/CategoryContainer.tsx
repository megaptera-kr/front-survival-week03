import CategoryButton from './CategoryButton';

type CategoryContainerProps = {
  categories : string[];
}

export default function CategoryContainer(
  { categories } : CategoryContainerProps,
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
