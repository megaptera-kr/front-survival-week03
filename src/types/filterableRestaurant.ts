export type RestaurantTableMenu = {
    id: string
    name: string
    price: number

}
export type RestaurantsTable = {

    id: string
    category: string
    name: string
    menu: RestaurantTableMenu[]

}
