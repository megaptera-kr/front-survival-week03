import './App.css';

import restaurants from '../restaurants.json';

import TotalMenu from './components/TotalMenu';

const restaurant = restaurants.restaurants;

export default function App() {
  return (
    <TotalMenu restaurant={restaurant} />
  );
}
