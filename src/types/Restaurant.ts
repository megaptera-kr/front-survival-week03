type MenuItem = {
    id: string;
    name: string;
    price: number;
  }

type Restaurant = {
'id': string;
'category': string;
'name': string;
'menu': MenuItem[];
}

export default Restaurant;
