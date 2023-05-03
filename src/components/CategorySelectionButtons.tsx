import selectCategories from '../utils/selectCategories';
import CategoryButton from './CategoryButton';

type CategorySelectionButtonsProps = {
  setSelectCategory: (value: string) => void;
}

export default function CategorySelectionButtons({
  setSelectCategory,
}:CategorySelectionButtonsProps) {
  const categories = selectCategories();

  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0px' }}>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          setSelectCategory={setSelectCategory}
        />
      ))}
    </ul>
  );
}
