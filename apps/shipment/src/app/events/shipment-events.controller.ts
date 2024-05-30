import { Controller } from '@nestjs/common';
import { OrderEvent, OrderStatusEvents } from '@order/config';
import { OrderStatusEvent } from '@order/event-client';
import { ShipmentService } from '../shared/shipment.service';
import { ItemsStatusEvents } from '@warehouse/event-client';
import { ItemsStatusEvent, WarehouseEvent } from '@warehouse/config';

@Controller()
export class ShipmentEventsController {
  constructor(protected shipmentSrv: ShipmentService) {}

  @OrderStatusEvent(OrderStatusEvents.PAYED)
  async onPayed(payload: OrderEvent) {
    return this.shipmentSrv.startShipment(payload.orderId);
  }

  @ItemsStatusEvents(ItemsStatusEvent.PREPARING)
  async onItemsPreparing(payload: WarehouseEvent){
    return this.shipmentSrv.preperingShipment(payload.orderId)
  }

  @ItemsStatusEvents(ItemsStatusEvent.SHIPPED)
  async onItemsShipped(payload: WarehouseEvent){
    return this.shipmentSrv.shippedShipment(payload.orderId)
  }

}
