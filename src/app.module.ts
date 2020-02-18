import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products/products.controller';
import { ProductsService } from './products/products/products.service';
import { ProductController } from './products/product/product.controller';
import { ProductService } from './models/product/product.service';
import { ProductService } from './products/product/product.service';
import { ProductService } from './products/product/product.service';
import { Controller } from './products/.controller';
import { ProductController } from './products/product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, ProductController, Controller],
  providers: [AppService, ProductsService, ProductService],
})
export class AppModule {}
