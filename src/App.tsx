// import React from 'react';
import FilterableStoreTable from './components/FilterableStoreTable';

import { restaurants } from '../restaurants.json';

export default function App() {
  return (
    <FilterableStoreTable restaurants={restaurants} />
  );
}
