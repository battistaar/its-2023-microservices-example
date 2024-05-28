import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./product.service";
import { WarehouseClientModule } from '@warehouse/message-client';

@Module({
  imports: [
    WarehouseClientModule
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
