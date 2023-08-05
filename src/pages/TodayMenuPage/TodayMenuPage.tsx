import {
  useCallback, useEffect, useState,
} from 'react';

import SearchInput from '../../components/SearchInput';
import MenuList from './MenuList';

import RESTAURANTS_DATA from '../../../restaurants.json';

const CATEGORIES = ['전체', '중식', '한식', '일식'] as const;

function TodayMenuPage() {
  const [menuData, setMenuData] = useState<typeof RESTAURANTS_DATA['restaurants']>([...RESTAURANTS_DATA.restaurants]);
  const [query, setQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');

  const handleChangeSearchInput = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleClickCategoryButton = useCallback((value: string) => {
    setCategoryQuery(value);
  }, []);

  /** 검색어 필터링 */
  useEffect(() => {
    let newData = [...RESTAURANTS_DATA.restaurants];

    if (!query) {
      setMenuData(newData);

      return;
    }

    newData = [...RESTAURANTS_DATA.restaurants].map((item) => {
      /** 식당 이름으로 필터링한다. */
      if (item.name.includes(query)) {
        return item;
      }

      /** 메뉴 카테고리로 필터링한다. */
      if (item.category.includes(query)) {
        return item;
      }

      /** 메뉴 이름으로 필터링한다. */
      const filteredMenu = item.menu.filter(({ name }) => name.includes(query));
      if (filteredMenu.length > 0) {
        return {
          ...item,
          menu: filteredMenu,
        };
      }

      return null;
    }).filter((item) => !!item) as typeof RESTAURANTS_DATA['restaurants'];

    setMenuData(newData);
  }, [query]);

  /** 메뉴 카테고리(탭) 필터링 */
  useEffect(() => {
    if (!categoryQuery) return;

    let newData = [...RESTAURANTS_DATA.restaurants];

    if (categoryQuery === '전체') {
      setMenuData(newData);

      return;
    }

    newData = newData.filter(({ category }) => category === categoryQuery);

    setMenuData(newData);
  }, [categoryQuery]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        gap: '40px',
      }}
    >
      <h1>오늘의 메뉴</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          gap: '20px',
        }}
      >
        <SearchInput
          label="검색"
          onChange={handleChangeSearchInput}
        />

        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          {CATEGORIES.map((value) => (
            <button
              type="button"
              key={`${value}`}
              onClick={() => handleClickCategoryButton(value)}
            >
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
