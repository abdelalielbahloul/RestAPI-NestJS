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
        const product = this.findOneProduct(id);
        if (!product) {
            throw new NotFoundException('Product Not Found')
        }

        return {...product}

    }

    private findOneProduct(id: string) {
        const product = this._products.find(p => p.id === id);
        return {...product}
    }

    private findProduct(id: string) : [Product, number] {
        const productIndex = this._products.findIndex(p => p.id === id);
        const product = this._products[productIndex];
               return [product, productIndex];
    }

    _editProduct(id: string, title: string, description: string, price: number) {
        const [product, index] = this.findProduct(id);
        if (!product) {
            throw new NotFoundException('Product Not Found')
            
        }
        const upadatedProduct = {...product};

        if (title) upadatedProduct.title = title;
        if (description) upadatedProduct.description = description;
        if (price) upadatedProduct.price = price;

        this._products[index] = upadatedProduct;
        return {...this._products[index]}

    }

    _deleteProduct(id: string) {
        const index = this.findProduct(id)[1];
        
        if (index != -1) {
            this._products.splice(index, 1);
            return {
                success: true,
                message: "Product removed Successfully!"
            }

        } else {
            throw new NotFoundException('Product Not Found');
            
        }
            
       

    }
}
