import { Injectable } from "@nestjs/common";
import { Order, OrderStatusEvents } from "@order/config";
import { OrderStatusEvent } from "@order/event-client";
import { OrderEventsService } from "@order/events";

@Injectable()
export class OrderService {
    constructor(private orderEventsSrv: OrderEventsService) { }

  private orders: Order[]= [
    {
      id: 'ord1',
      userId: 'user10',
      items: [
        {
          productId: 'prod3',
          quantity: 2,
        },
      ],
      paymentInfo: {
        method: 'card',
        data: { number: '12345' },
        transactionId: null,
      },
      shipmentInfo: { address: { city: 'Vicenza', cap: 36100 } },
      status: 'pending',
    }
  ];

  async confirmOrder(id: string) {
   
  }


  async setStatusPayed(id: string) {
    const order = this.orders.find(o => o.id === id);

    if (!order) {
        throw new Error('Order not found');
    }
    order.status = 'payed';

    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.PAYED, order);
  }
}
