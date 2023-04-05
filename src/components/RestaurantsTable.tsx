import { type } from 'process';
import React from 'react';
import { Restaurant } from '../types/type';
import RestaurantsItem from './RestaurantsItem';
import RestaurantsTitle from './RestaurantsTitle';

type RestaurantsTableProps = {
  filterText: Restaurant[];
}

export default function RestaurantsTable({ filterText } : RestaurantsTableProps) {
  return (
    <div style={{ marginTop: '20px', padding: '5px' }}>
      <table style={{ width: '400px' }}>
        <thead>
          <RestaurantsTitle />
        </thead>
        <tbody>
          <RestaurantsItem restaurants={filterText} />
        </tbody>

      </table>
    </div>
  );
}
