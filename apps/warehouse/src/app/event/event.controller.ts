import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { WarehouseService } from '../warehouse.service';

@Controller()
export class EventController {
  constructor(protected warehouseSrv: WarehouseService) {}

  @EventPattern('test_event')
  async test(payload: {productId: string, quantity: number}) {
    await this.warehouseSrv.unloadStock(payload.productId, payload.quantity);
  }
}
