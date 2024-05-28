import { Module } from "@nestjs/common";
import { ShipmentSharedModule } from "../shared/shipment-shared.module";
import { ShipmentEventsController } from "./shipment-events.controller";
import { ShipmentEventsModuleClient } from "@shipment/events";

@Module({
  imports: [ShipmentSharedModule, ShipmentEventsModuleClient],
  controllers: [ShipmentEventsController]
})
export class ShipmentEventsModule { }
