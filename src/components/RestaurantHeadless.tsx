import React from 'react';
import { Restaurants } from '../types/filterableProductTable';

type RestaurantHeadless = {
  data: {
    restaurants: Restaurants[]
  }
  children: (data: Restaurants[]) => React.ReactNode
}

function RestaurantHeadless({ data, children }: RestaurantHeadless) {
  return (
    <div>
      {children(data.restaurants)}
    </div>
  );
}

export default RestaurantHeadless;
