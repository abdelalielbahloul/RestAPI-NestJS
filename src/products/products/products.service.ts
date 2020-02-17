import { Injectable } from '@nestjs/common';
import { Products } from '../products';

@Injectable()
export class ProductsService {
    products: Products[] = [];

    _addProduct() {
        console.log("hello");
        
    }
}
