import { useState } from 'react';
import SearchBar from './SearchBar';
import MenuTable from './MenuProductTable';
import filterMenus from '../utils/filterMenus';

function FilterableMenuTable() {
  const [filterText, setFilterText] = useState('');
  const [filterMenu, setFilterMenu] = useState('');

  const filteredMenus = filterMenus({ filterText, filterMenu });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        filterMenu={filterMenu}
        setFilterMenu={setFilterMenu}
      />
      <MenuTable
        filteredMenus={filteredMenus}
      />
    </>
  );
}

export default FilterableMenuTable;
