import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { OrderEvent, OrderStatusEvents } from "@order/config";

@Injectable()
export class OrderEventsService {
  constructor(@Inject('ORDER_SERVICE') protected orderClient: ClientProxy) {}

  sendStatusChange(event: OrderStatusEvents, data: OrderEvent) {
    console.log(`ORDER: sending event: ord_${event}`)
    this.orderClient.emit(`ord_${event}`, data);
  }
}
