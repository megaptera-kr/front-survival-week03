export type Menu = {
    id: string;
    name : string;
    price : number
}
export type Category = '전체' | '중식' | '한식' | '일식';

export interface Restaurant {
    category : string;
    id : string;
    menu : Array<Menu>;
    name : string;
}
