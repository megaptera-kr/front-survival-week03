type menuProps = {
    id: string,
    name: string,
    price: number
}

type Restaurants = {
    id: string,
    category: string,
    name: string,
    menu: menuProps[]
}

export default Restaurants;
