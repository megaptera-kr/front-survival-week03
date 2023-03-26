import { useState } from 'react';
import SearchBar from './SearchBar';
import MenuTable from './MenuProductTable';
import filterMenus from '../utils/filterMenus';

function FilterableMenuTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredMenus = filterMenus({ filterText, filterCategory });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <MenuTable
        filteredMenus={filteredMenus}
      />
    </>
  );
}

export default FilterableMenuTable;
