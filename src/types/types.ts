export interface Menu{
  id: number;
  name: string;
  price: number;
}

export interface Restaurant{
  id : number;
  name : string;
  category: string;
  menu: Menu[];
}

export interface FilterOptions{
  name: string;
  category : string;
}
