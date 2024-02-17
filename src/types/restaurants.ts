export type MenuItem = {
  id: number
  name: string
  price: number
}

export type FoodCategory = '한식' | '중식' | '일식'

export type Restaurant = {
  id: number
  category: FoodCategory
  name: string
  menu: MenuItem[]
}

export type Restaurants = Restaurant[]
