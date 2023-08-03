import { useState } from 'react';
import { restaurants } from '../restaurants.json';
import SearchBar from './components/SearchBar';
import FiterCategory from './components/FliterCategory';
import FilterRow from './components/FilterRow';

export default function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [currentCategory, setCurrentCategory] = useState<string>('');

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <FiterCategory
        restaurants={restaurants}
        setCurrentCategory={setCurrentCategory}
      />
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ paddingInline: '2rem' }}>식당 이름</th>
              <th>종류</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody>
            <FilterRow
              restaurants={restaurants}
              currentCategory={currentCategory}
              keyword={keyword}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
