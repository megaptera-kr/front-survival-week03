import React from 'react';
import { Category } from '../types/type';

type CategoryProps = {
  categories: Category[];
  onToggleCategory: (id: string) => void;
}

export default function SearchCategory({ categories, onToggleCategory }: CategoryProps) {
  return (
    <div style={{ margin: '5px' }}>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          style={{ marginRight: '10px' }}
          onClick={() => onToggleCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
