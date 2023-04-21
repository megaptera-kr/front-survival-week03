import { FilterOptions } from '../types/types';
import FilterButtonGroup from './FilterButtonGroup';
import FilterInput from './FilterInput';

interface FilterBoxProps{
  setFilterOptions : React.Dispatch<React.SetStateAction<FilterOptions>>
}

function FilterBox({ setFilterOptions } : FilterBoxProps) {
  return (
    <div>
      <FilterInput
        label="검색"
        placeholder="식당 이름"
        setFilterOptions={setFilterOptions}
      />
      <FilterButtonGroup
        setFilterOptions={setFilterOptions}
      />
    </div>
  );
}

export default FilterBox;
