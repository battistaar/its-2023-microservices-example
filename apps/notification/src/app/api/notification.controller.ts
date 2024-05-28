import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderStatusEvent } from '@order/event-client';
import { NotificationService } from '../shared/notification.service';
import { OrderEvent, OrderStatusEvents } from '@order/config';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @OrderStatusEvent(OrderStatusEvents.START)
  async handleStartEvent(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.START, data);
  }

  @OrderStatusEvent(OrderStatusEvents.PAYED)
  async handlePayedEvent(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.PAYED, data);
  }

  @OrderStatusEvent(OrderStatusEvents.SHIPPING)
  async handleShippingEvent(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.SHIPPING, data);
  }

  @OrderStatusEvent(OrderStatusEvents.SHIPPED)
  async handleShippedEvent(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.SHIPPED, data);
  }

  @OrderStatusEvent(OrderStatusEvents.DELIVERED)
  async handleDeliveredEvent(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.DELIVERED, data);
  }

  @OrderStatusEvent(OrderStatusEvents.ALL)
  async handleAllEvents(data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.ALL, data);
  }
}
