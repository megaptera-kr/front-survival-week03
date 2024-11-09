interface Menu {
    id: string;
    name: string;
    path: string;
}

interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
}
