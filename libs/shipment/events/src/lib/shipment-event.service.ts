import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ShipmentEvent, ShipmentStatusEvents } from '@shipment/config';

@Injectable()
export class ShipmentEventsService {
  constructor(
    @Inject('SHIPMENT_SERVICE') protected shipmentClient: ClientProxy
  ) {}

  sendStatusChange(event: ShipmentStatusEvents, data: ShipmentEvent) {
    console.log(`ord_${event}`);
    this.shipmentClient.emit(`shipmnt_${event}`, data);
  }
}
