import { Module } from "@nestjs/common";
import { ShipmentService } from "./shipment.service";

@Module({
  providers: [ShipmentService],
  exports: [ShipmentService]
})
export class ShipmentSharedModule { }
