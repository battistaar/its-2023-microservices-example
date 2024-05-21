import { Order, OrderStatusEvents } from '@order/config';
import { Injectable } from "@nestjs/common";
import { OrderEventsService } from '@order/events';

@Injectable()
export class OrderService {
  constructor(protected orderEventsSrv: OrderEventsService) {}

  private orders: Order[] = [{
    id: 'order1',
    items: [{productId: 'prod1', quantity: 3}],
    paymentInfo: {method: 'card', data: {number: '12345'}, transactionId: null},
    shipmentInfo: {address: {city: 'Vicenza', cap: 36100}},
    userId: 'user10',
    status: 'pending'
  }];

  async confirmOrder(id: string) {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('order not found');
    }
    order.status = 'confirmed';
    const eventData = {
      orderId: id,
      ...order
    }
    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.START, eventData);
  }

  async setStatusPayed(id: string) {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('order not found');
    }
    order.status = 'payed';

    const eventData = {
      orderId: id,
      ...order
    }
    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.PAYED, eventData);
  }

  async setStatusToShipping(id: string) {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('order not found');
    }
    order.status = 'shipping';

    const eventData = {
      orderId: id,
      ...order
    }
    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.SHIPPING, eventData);
  }

  async setStatusShipped(id: string) {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('order not found');
    }
    order.status = 'shipped';

    const eventData = {
      orderId: id,
      ...order
    }
    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.SHIPPED, eventData);
  }
  
  async setStatusDelivered(id:string) {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new Error('order not found');
    }
    order.status = 'delivered';

    const eventData = {
      orderId: id,
      ...order
    }
    this.orderEventsSrv.sendStatusChange(OrderStatusEvents.DELIVERED, eventData);
  }
}
