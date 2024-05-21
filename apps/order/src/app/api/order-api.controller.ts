import { OrderEventsService } from '@order/events';
import { Body, Controller, Post } from "@nestjs/common";
import { OrderEvent, OrderStatusEvents } from '@order/config';

@Controller('orders')
export class OrderApiController {
  constructor(protected orderEventsSrv: OrderEventsService) {}

  @Post(':id/confirm')
  async confirmOrder(@Body() body: any) {
    const order: OrderEvent = {
      orderId: 'order1',
      items: [{productId: '1', quantity: 3}],
      paymentInfo: {method: 'card', data: {number: '12345'}, transactionId: null},
      shipmentInfo: {address: {city: 'Vicenza', cap: 36100}},
      userId: 'user1234',
      status: 'start'
    };

    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.START, order);
    return {orderId: 'test'};
  }
}
