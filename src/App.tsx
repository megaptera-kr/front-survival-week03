import './App.css';

import restaurants from '../restaurants.json';

import TotalMenu from './components/TotalMenu';

const restaurant = restaurants.restaurants;

export default function App() {
  return (
    /* 토탈 메뉴
    */
    <TotalMenu restaurant={restaurant} />
  );
}
