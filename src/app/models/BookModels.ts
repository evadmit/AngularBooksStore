export class Book {
    id: string;
    title: string;
    ganre: string;
    description: string;
    author: string;
    price: number ;
    available: number ;
    image:string;
}

export class CartItem{
    selectedBook: Book;
    quantity: number;
}