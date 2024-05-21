
import { Controller, Param, Post } from "@nestjs/common";
import { OrderService } from "../shared/order.service";

@Controller('orders')
export class OrderApiController {
  constructor(protected orderSrv: OrderService) {}

  @Post(':id/confirm')
  async confirmOrder(@Param('id') id: string) {
    await this.orderSrv.confirmOrder(id);
    return {orderId: 'test'};
  }
}
