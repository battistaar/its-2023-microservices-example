import { Controller, Param, Patch } from "@nestjs/common";
import { WarehouseService } from "../shared/warehouse.service";

@Controller('warehouse')
export class WarehouseApiController {
    constructor(private warehouseSrv: WarehouseService) {}

    @Patch(':id/preparing') 
    async preparingOrder(@Param('id') id: string): Promise<void> {
        await this.warehouseSrv.preparingOrder(id);
    }

    @Patch(':id/shipped') 
    async shippedOrder(@Param('id') id: string): Promise<void> {
        await this.warehouseSrv.shippedOrder(id);
    }
}