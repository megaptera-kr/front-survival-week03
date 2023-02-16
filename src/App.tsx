import { useState } from 'react';
import Category from './components/Category';
import Restaurants from '../restaurants.json';
import SearchBer from './components/SearchBer';
import MenuTable from './components/MenuTable';

export default function App() {
    const [searchBer, setSearchBer] = useState('');
    const [category, setCategory] = useState('전체');
    const [restaurants] = useState(Restaurants.restaurants);

    const categorys: string[] = restaurants.reduce(
        (acc, restaurant) =>
            acc.includes(restaurant.category)
                ? acc
                : [...acc, restaurant.category],
        ['전체']
    );

    return (
        <div>
            <h1>오늘의 메뉴</h1>
            <SearchBer searchBer={searchBer} setSearchBer={setSearchBer} />
            <Category categorys={categorys} setCategory={setCategory} />
            <MenuTable
                restaurants={restaurants}
                restaurantName={searchBer}
                category={category}
            />
        </div>
    );
}
