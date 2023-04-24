import restaurantsData from '../../restaurants.json';

export type Restaurant = typeof restaurantsData['restaurants'][0]
export type RestaurantCategory = '전체' |'중식' | '한식'| '일식';
