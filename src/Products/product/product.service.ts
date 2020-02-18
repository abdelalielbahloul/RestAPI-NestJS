import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product';

@Injectable()
export class ProductService {
    products: Product[] = [];

    _addProduct(title: string, descrption: string, price: number) {
        const newProduct = new Product(new Date().toISOString(), title, descrption, price);
        this.products.push(newProduct);
    }
}
