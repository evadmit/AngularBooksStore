export class Book {
    id: number;
    isBought: boolean = false;
    title: string;
    ganre: string;
    description: string;
    author: string;
    authorID?: number;
    price: number ;
    available: number ;
    image:string;
}

export class CartItem{
    selectedBook: Book;
    quantity: number;
}