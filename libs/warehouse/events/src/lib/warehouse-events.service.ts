import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { WarehouseItem, ItemsStatusEvent } from "@warehouse/config";

@Injectable()
export class WarehouseEventsService { 
    constructor(@Inject('WAREHOUSE_SERVICE') protected warehouseClient: ClientProxy) {}

    sendStatusChange(event: ItemsStatusEvent, data: WarehouseItem) {
      console.log(`wh_${event}`)
      this.warehouseClient.emit(`wh_${event}`, data);
    }
}
