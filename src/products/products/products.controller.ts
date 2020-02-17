import { Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    /**
     *
     */
    constructor(private productService: ProductsService) {
        
    }
    @Post()
    addProduct() : any {
        this.productService._addProduct();
    }
}
