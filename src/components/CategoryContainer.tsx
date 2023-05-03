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
    <ul style={{
      display: 'flex',
      padding: '0px',
      listStyle: 'none',
    }}
    >
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
