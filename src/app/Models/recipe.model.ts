export class Recipe {
    // id: number;
    title: string;
    description: string;
    img: string;
    products: string;
    year: string;

    constructor(title: string, products: string, img: string, description: string, year: string) {
        // this.id = id;
        this.title = title;
        this.products = products;
        this.img = img;
        this.description = description;
        this.year = year;
    }
}
