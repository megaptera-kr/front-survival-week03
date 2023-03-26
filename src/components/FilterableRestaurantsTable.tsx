import { useState } from 'react';
import SearchBar from './SearchBar';
import MenuTable from './MenuProductTable';
import filterMenus from '../utils/filterMenus';
import { restaurants } from '../../restaurants.json';

function FilterableMenuTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleClickMenuButton = (menuType: string) => {
    setFilterCategory(menuType);
  };

  const filteredMenus = filterMenus({ restaurants, filterText, filterCategory });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        onClickMenuButton={handleClickMenuButton}
      />
      <MenuTable
        filteredMenus={filteredMenus}
      />
    </>
  );
}

export default FilterableMenuTable;
