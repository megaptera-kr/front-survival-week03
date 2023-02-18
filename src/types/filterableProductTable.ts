export type RestaurantMenu = {
    id: string
    name: string
    price: number

}

export type Restaurants = {

    id: string
    category: string
    name: string
    menu: RestaurantMenu[]

}
