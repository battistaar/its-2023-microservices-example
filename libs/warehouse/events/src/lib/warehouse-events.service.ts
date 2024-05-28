import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { WarehouseItem, ItemsStatusEvent, WarehouseEvent } from "@warehouse/config";

@Injectable()
export class WarehouseEventsService { 
    constructor(@Inject('WAREHOUSE_SERVICE') protected warehouseClient: ClientProxy) {}

    sendStatusChange(event: ItemsStatusEvent, data: WarehouseEvent) {
      this.warehouseClient.emit(`wh_${event}`, data);
    }
}
