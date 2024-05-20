import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { WarehouseClient } from "@warehouse/client";

@Controller('products')
export class ProductController {
  constructor(
    protected productSrv: ProductService,
    protected warehouseClient: WarehouseClient
  ) {}

  @Get()
  async getProducts() {
    return this.productSrv.findProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const { quantity } = await this.warehouseClient.getStockQuantity(id);


    const product = await this.productSrv.getById(id);
    if (!product) {
      throw new NotFoundException();
    }

    return {
      ...product,
      quantity
    };
  }
}
