import { Module } from "@nestjs/common";
import { ShipmentApiController } from "./shipment-api.controller";
import { ShipmentSharedModule } from "../shared/shipment-shared.module";

@Module({
  imports: [ShipmentSharedModule],
  controllers: [ShipmentApiController]
})
export class ShipmentApiModule { }
