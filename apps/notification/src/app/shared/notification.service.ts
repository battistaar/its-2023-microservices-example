import { Injectable, Logger } from '@nestjs/common';
import { OrderStatusEvents, OrderEvent } from '@order/config';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  sendNotification(event: OrderStatusEvents, data: OrderEvent) {
    switch (event) {
      case OrderStatusEvents.START:
        this.logger.log(`Notification: Order ${data.orderId} has started.`);
        break;
      case OrderStatusEvents.PAYED:
        this.logger.log(`Notification: Order ${data.orderId} has been paid.`);
        break;
      case OrderStatusEvents.SHIPPING:
        this.logger.log(`Notification: Order ${data.orderId} is shipping.`);
        break;
      case OrderStatusEvents.SHIPPED:
        this.logger.log(`Notification: Order ${data.orderId} has been shipped.`);
        break;
      case OrderStatusEvents.DELIVERED:
        this.logger.log(`Notification: Order ${data.orderId} has been delivered.`);
        break;
      case OrderStatusEvents.ALL:
        this.logger.log(`Notification: Event occurred for Order ${data.orderId}.`);
        break;
      default:
        this.logger.log(`Unknown event: ${event}`);
    }
  }
}
