interface objectmenu {
    id: string;
    name: string;
    price: number;
}

interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: objectmenu[];
}

export default Restaurant;
