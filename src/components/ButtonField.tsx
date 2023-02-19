import Restaurant from '../types/Restaurant';
import selectCategory from '../util/selectCategory';
import ButtonList from './ButtonList';

type ButtonFieldProps = {
  restaurants: Restaurant[];
  setFilterButton: (value: string) => void;
}

export default function ButtonField({
  restaurants,
  setFilterButton,
}: ButtonFieldProps) {
  const categories = selectCategory(restaurants);

  return (
    <div className="button-field">
      <ButtonList
        categories={categories}
        setFilterButton={setFilterButton}
      />
    </div>
  );
}
