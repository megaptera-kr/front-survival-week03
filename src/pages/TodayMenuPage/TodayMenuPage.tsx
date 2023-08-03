import { useCallback, useMemo, useState } from 'react';

import SearchInput from '../../components/SearchInput';
import MenuList from './MenuList';

import RESTAURANTS_DATA from '../../../restaurants.json';

const CATEGORIES = ['전체', '중식', '한식', '일식'] as const;

function TodayMenuPage() {
  const [menuQuery, setMenuQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');

  const handleChangeSearchInput = useCallback((value: string) => {
    setMenuQuery(value);
  }, []);

  const handleClickCategoryButton = useCallback((value: string) => {
    setCategoryQuery(value);
  }, []);

  const menuData = useMemo(() => {
    let data = RESTAURANTS_DATA.restaurants;

    if (categoryQuery) {
      data = data.filter(({ category }) => category === categoryQuery);

      if (!menuQuery) return data;
    }

    if (menuQuery) {
      data = data.map((item) => {
        const filteredMenu = item.menu.filter(({ name }) => name.includes(menuQuery));

        return {
          ...item,
          menu: filteredMenu,
        };
      }).filter(({ menu }) => menu.length !== 0);

      return data;
    }

    return data;
  }, [menuQuery, categoryQuery]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      gap: '40px',
    }}
    >
      <h1>오늘의 메뉴</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        gap: '20px',
      }}
      >
        <SearchInput label="검색" placeholder="식당 이름" onChange={handleChangeSearchInput} />

        <div style={{
          display: 'flex',
          gap: '8px',
        }}
        >
          {CATEGORIES.map((value) => (
            <button type="button" key={`${value}`} onClick={() => handleClickCategoryButton(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>

      <MenuList data={menuData} />
    </div>
  );
}

export default TodayMenuPage;
