import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Order, OrderEvent, OrderStatusEvents } from "@order/config";

@Injectable()
export class OrderEventsService {
  constructor(@Inject('ORDER_SERVICE') protected orderClient: ClientProxy) {}

  sendStatusChange(event: OrderStatusEvents, data: Order) {
    console.log(`ord_${event}`)
    this.orderClient.emit(`ord_${event}`, data);
  }
}
