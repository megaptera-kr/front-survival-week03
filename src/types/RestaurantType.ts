import { MenuType } from './MenuType';

export interface RestaurantType {
  id: string;
  category: string;
  name: string;
  menu: MenuType[];
}
