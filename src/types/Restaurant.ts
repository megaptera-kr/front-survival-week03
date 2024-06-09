import Food from './Food';

export interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: Food[];
}

export type FilterableRestaurantTableProps = {
    restaurants: Restaurant[]
}
