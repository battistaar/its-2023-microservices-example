
import { Controller, Param, Post } from "@nestjs/common";
import { ShipmentService } from "../shared/shipment.service";

@Controller('shipment')
export class ShipmentApiController {
  constructor(protected orderSrv: ShipmentService) {}

}
