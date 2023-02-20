import menuInfoType from './menuInfoType';

type restaurantType = {
  id: string,
  category: string,
  name: string,
  menu: menuInfoType[]
}

export default restaurantType;
