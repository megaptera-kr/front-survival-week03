import { useState } from 'react';
import CategorySelectionButtons from './components/CategorySelectionButtons';
import Header from './components/Header';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import data from '../restaurants.json';

import { Data } from './types';

export default function App() {
  const { restaurants } = data as Data;

  return (
    <div>
      <Header />
      <FilterableRestaurantsTable
        restaurants={restaurants}
      />
    </div>
  );
}
