import { PaymentStatusEvent } from '@event/client';
import { Controller } from '@nestjs/common';
import { PaymentEvent, PaymentEventEntity } from '@payment/config';
import { ShipmentEvent, ShipmentStatusEvents } from '@shipment/config';
import { ShipmanetStatusEvent } from '@shipment/event-client';
import { OrderService } from '../shared/order.service';

@Controller()
export class OrderEventsController {
  constructor(private orderService: OrderService) {}

  @PaymentStatusEvent(PaymentEvent.CONFIRMED)
  async paymentConfirmed(payload: PaymentEventEntity) {
    console.log('Payment Confirmed', payload);

    this.orderService.setStatusPayed(payload.orderId);
  }

  @ShipmanetStatusEvent(ShipmentStatusEvents.START)
  async shipmentStart(payload: ShipmentEvent) {
    console.log('Shipment Start', payload);

    this.orderService.setStatusToShipping(payload.orderId);
  }

  @ShipmanetStatusEvent(ShipmentStatusEvents.PREP)
  async shipmentPreparing(payload: ShipmentEvent) {
    console.log('Shipment Preparing', payload);
  }

  @ShipmanetStatusEvent(ShipmentStatusEvents.SHIPPED)
  async shipmentShipped(payload: ShipmentEvent) {
    console.log('Shipment Shipped', payload);

    this.orderService.setStatusShipped(payload.orderId);
  }

  @ShipmanetStatusEvent(ShipmentStatusEvents.DELIVERED)
  async shipmentDelivered(payload: ShipmentEvent) {
    console.log('Shipment Delivered', payload);

    this.orderService.setStatusDelivered(payload.orderId);
  }
}
