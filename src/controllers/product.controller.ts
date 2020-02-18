import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}
    @Post()
    addProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number,
    ): any {
        this.productService._addProduct(title, description, price);
    }
}
