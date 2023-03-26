export interface Menu {
    id: string;
    name: string;
    price: number;
}

export interface Restaurants {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
}
