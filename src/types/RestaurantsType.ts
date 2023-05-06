type RestaurantsMenuType = {
    id: string,
    name: string,
    price: number
}

type RestaurantsType = {
    id: string,
    category: string,
    name: string,
    menu: RestaurantsMenuType[]
}

export default RestaurantsType;
