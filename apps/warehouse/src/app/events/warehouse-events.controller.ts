import { Controller } from "@nestjs/common";
import { ShipmentEvent, ShipmentStatusEvents } from "@shipment/config";
import { ShipmanetStatusEvent } from "@shipment/event-client";
import { WarehouseService } from "../shared/warehouse.service";

@Controller()
export class WarehouseEventsController {
    constructor(protected warehouseSrv: WarehouseService) {}

    @ShipmanetStatusEvent(ShipmentStatusEvents.START) 
    async onStart(payload: ShipmentEvent) {
        this.warehouseSrv.addWorkItem(payload);
    }
}