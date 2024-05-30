import { PaymentStatusEvent } from '@event/client';
import { Controller } from '@nestjs/common';
import { PaymentEvent, PaymentEventEntity } from '@payment/config';
import { ShipmentEvent, ShipmentStatusEvents } from '@shipment/config';
import { ShipmentStatusEvent } from '@shipment/event-client';
import { OrderService } from '../shared/order.service';

@Controller()
export class OrderEventsController {
  constructor(private orderService: OrderService) {}

  @PaymentStatusEvent(PaymentEvent.CONFIRMED)
  async paymentConfirmed(payload: PaymentEventEntity) {
    console.log('Payment Confirmed', payload);

    this.orderService.setStatusPayed(payload.orderId);
  }

  @ShipmentStatusEvent(ShipmentStatusEvents.START)
  async shipmentStart(payload: ShipmentEvent) {
    console.log('Shipment Start', payload);

    this.orderService.setStatusToShipping(payload.orderId);
  }

  @ShipmentStatusEvent(ShipmentStatusEvents.PREP)
  async shipmentPreparing(payload: ShipmentEvent) {
    console.log('Shipment Preparing', payload);
  }

  @ShipmentStatusEvent(ShipmentStatusEvents.SHIPPED)
  async shipmentShipped(payload: ShipmentEvent) {
    console.log('Shipment Shipped', payload);

    this.orderService.setStatusShipped(payload.orderId);
  }

  @ShipmentStatusEvent(ShipmentStatusEvents.DELIVERED)
  async shipmentDelivered(payload: ShipmentEvent) {
    console.log('Shipment Delivered', payload);

    this.orderService.setStatusDelivered(payload.orderId);
  }
}
