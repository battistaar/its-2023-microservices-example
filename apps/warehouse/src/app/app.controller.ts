import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseCommands } from '@warehouse/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(WarehouseCommands.test)
  getData() {
    console.log('request');
    return this.appService.getData();
  }

  @MessagePattern(WarehouseCommands.getStockQuantity)
  async getStockQuantity(payload: GetStockQuantityInput): Promise<GetStockQuantityResult> {
    return {productId: payload.productId, quantity: 5};
  }
}
