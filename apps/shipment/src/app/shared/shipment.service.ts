import { Order, OrderStatusEvents } from '@order/config';
import { Injectable } from "@nestjs/common";
import { OrderEventsService } from '@order/events';
import { ShipmentEventsService } from '@shipment/events';

@Injectable()
export class ShipmentService {
  
    constructor(protected shipmentSrv: ShipmentEventsService){}

    
}
