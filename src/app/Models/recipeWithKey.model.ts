export class RecipeWithKey {
    title: string;
    description: string;
    img: string;
    products: string;
    year: string;
    author: string;
    created: any;
    key: any;

    constructor(title: string, products: string, img: string, description: string, year: string, author: string, created: any, key: any) {
        this.title = title;
        this.products = products;
        this.img = img;
        this.description = description;
        this.year = year;
        this.author = author;
        this.created = created;
        this.key = key;
    }
}
