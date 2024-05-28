
import { Controller, Param, Post } from "@nestjs/common";
import { ShipmentService } from "../shared/shipment.service";

@Controller('shipment')
export class ShipmentApiController {
  constructor(protected shipmentSrv: ShipmentService) {}


  @Post(':id/delivered')
  async deliveredOrder(@Param('id') id: string){
    return await this.shipmentSrv.deliveredShipment(id)
  }
}
