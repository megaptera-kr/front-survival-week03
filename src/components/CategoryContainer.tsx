import CategoryButton from './CategoryButton';

type CategoryContainerProps = {
  categories : string[];
  setFilterCategory: (value:string) => void;
}

export default function CategoryContainer(
  {
    categories,
    setFilterCategory,
  } : CategoryContainerProps,
) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
