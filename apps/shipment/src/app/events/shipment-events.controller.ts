import { Controller } from '@nestjs/common';
import { OrderEvent, OrderStatusEvents } from '@order/config';
import { OrderStatusEvent } from '@order/event-client';
import { ShipmentService } from '../shared/shipment.service';

@Controller()
export class ShipmentEventsController {
  constructor(protected shipmentSrv: ShipmentService) {}

  @OrderStatusEvent(OrderStatusEvents.PAYED)
  async onPayed(payload: OrderEvent) {
    return this.shipmentSrv.startShipment(payload.orderId);
  }

  
}
