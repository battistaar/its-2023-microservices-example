import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { OrderEvent, OrderStatusEvents } from '@order/config';
import { NotificationService } from '../shared/notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('ord_order_status_start')
  handleStartEvent(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.START, data);
  }

  @EventPattern('ord_order_status_payed')
  handlePayedEvent(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.PAYED, data);
  }

  @EventPattern('ord_order_status_shipping')
  handleShippingEvent(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.SHIPPING, data);
  }

  @EventPattern('ord_order_status_shipped')
  handleShippedEvent(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.SHIPPED, data);
  }

  @EventPattern('ord_order_status_delivered')
  handleDeliveredEvent(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.DELIVERED, data);
  }

  @EventPattern('ord_order_status_*')
  handleAllEvents(@Payload() data: OrderEvent) {
    this.notificationService.sendNotification(OrderStatusEvents.ALL, data);
  }
}
