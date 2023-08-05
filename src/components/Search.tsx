import ButtonFiled from './ButtonFiled';
import InputFiled from './InputFiled';

type SearchProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value:string) => void;
  setFilterButton: (value:string) => void;
}

export default function Search({
  categories,
  filterText,
  setFilterText,
  setFilterButton,
}:SearchProps) {
  return (
    <div>
      <InputFiled
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      {categories.map((category) => (
        <ButtonFiled
          key={category}
          category={category}
          setFilterButton={setFilterButton}
        />
      ))}
    </div>
  );
}
