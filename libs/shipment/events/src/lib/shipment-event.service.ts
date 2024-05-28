import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ShipmentEvent, ShipmentStatusEvents } from '@shipment/config';

@Injectable()
export class ShipmentEventsService {
  constructor(
    @Inject('SHIPMENT_SERVICE') protected shipmentClient: ClientProxy
  ) {}

  sendStatusChange(event: ShipmentStatusEvents, data: ShipmentEvent) {
    this.shipmentClient.emit(`shipment_${event}`, data);
  }
}
