import { Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseCommands, WarehouseMessage, WarehouseMessagesDefinitions } from '@warehouse/config';
import { WarehouseService } from './warehouse.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
      protected warehouseSrv: WarehouseService
  ) {}

  @MessagePattern(WarehouseCommands.test)
  getData() {
    return this.appService.getData();
  }

  @WarehouseMessage(WarehouseMessagesDefinitions.StockQuantityMessage)
  async getStockQuantity(payload: GetStockQuantityInput): Promise<GetStockQuantityResult> {
    const quantity = await this.warehouseSrv.getStockQuantity(payload.productId);
    return {productId: payload.productId, quantity};
  }
}
