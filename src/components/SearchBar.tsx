import CategorySelectionButtons from './CategorySelectionButtons';
import TextFiled from './TextFiled';

import { FilterTextState } from '../types';

type SearchBarProps = {
  setSelectCategory: (value: string) => void;
} & FilterTextState

export default function SearchBar({ filterText, setFilterText, setSelectCategory }:SearchBarProps) {
  return (
    <div>
      <TextFiled
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategorySelectionButtons setSelectCategory={setSelectCategory} />
    </div>
  );
}
