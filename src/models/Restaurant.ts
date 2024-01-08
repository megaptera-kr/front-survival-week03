import { FoodCategory } from '../types';
import { Food } from './Food';

export interface Restaurant {
    id: string;
    category: FoodCategory;
    name: string;
    menu: Food[];
}
