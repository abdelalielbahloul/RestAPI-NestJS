import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}
    @Post()
    addProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number,
    ) {
        const generatedId = this.productService._addProduct(title, description, price);
        return {
            id: generatedId
        }
    }

    @Get()
    getAll() {
        return { 
            count: this.productService._getAllProduct().length,
            products : this.productService._getAllProduct() 
        };
    }

    @Get(':id')
    getProduct(
        @Param('id') productId: string
    ) {
        return this.productService._getById(productId);
    }

    @Patch(':id')
    editProduct(
        @Param('id') productId: string, 
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number,
    ) {
        return this.productService._editProduct(productId, title, description, price);
    }

    @Delete(':id')
    deleteProduct(@Param('id') productId) {
        return this.productService._deleteProduct(productId);
    }
}
