import { Module } from "@nestjs/common";
import { ProductController } from "./products.controller";
import { ProductService } from "./product.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TEST_SERVICE', transport: Transport.TCP, options: {port: 5000}},
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
