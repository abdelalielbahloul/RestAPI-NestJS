import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/models/product';

@Injectable()
export class ProductService {
    private _products: Product[] = [];

    _addProduct(title: string, descrption: string, price: number) {
        const id = new Date().toISOString();
        const newProduct = new Product(id, title, descrption, price);
        this._products.push(newProduct);
        return id;
    }

    _getAllProduct() {
        return [...this._products];
    }

    _getById(id: string) {
        const product = this._products.find(p => p.id === id);
        if (!product) {
            throw new NotFoundException('Product Not Found')
        }

        return {...product}

    }
}
