import { Module } from "@nestjs/common";
import { ShipmentSharedModule } from "../shared/shipment-shared.module";
import { ShipmentEventsController } from "./shipment-events.controller";

@Module({
  imports: [ShipmentSharedModule],
  controllers: [ShipmentEventsController]
})
export class ShipmentEventsModule { }
