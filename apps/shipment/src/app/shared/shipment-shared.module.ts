import { Module } from "@nestjs/common";
import { ShipmentService } from "./shipment.service";
import { ShipmentEventsModuleClient } from "@shipment/events";

@Module({
  imports: [ShipmentEventsModuleClient],
  providers: [ShipmentService],
  exports: [ShipmentService]
})
export class ShipmentSharedModule { }
