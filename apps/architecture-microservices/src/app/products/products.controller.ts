import { Controller, Get, Inject, NotFoundException, Param } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ClientProxy } from "@nestjs/microservices";

@Controller('products')
export class ProductController {
  constructor(
    protected productSrv: ProductService,
    @Inject('TEST_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  async getProducts() {
    return this.productSrv.findProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const result = await this.client.send({cmd: 'test'}, {test: 'ciao'});
    result.subscribe(val => console.log(val))


    const product = this.productSrv.getById(id);
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }
}
