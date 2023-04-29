interface Restaurant {
    id: string,
    category: string,
    name: string,
    menu: {
        id: string,
        name: string,
        price: number
    }[],
}

interface Restaurants {
    restaurants: Restaurant[]
}

export { Restaurant, Restaurants };
