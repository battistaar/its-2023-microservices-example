import { Controller } from "@nestjs/common";
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseMessage, WarehouseMessagesDefinitions } from "@warehouse/config";
import { WarehouseService } from "../shared/warehouse.service";

@Controller()
export class WarehouseMessagesController {
    constructor(private warehouseSrv: WarehouseService) {}

    @WarehouseMessage(WarehouseMessagesDefinitions.StockQuantityMessage)
    async getStockQuantity(payload: GetStockQuantityInput): Promise<GetStockQuantityResult> {
      const quantity = await this.warehouseSrv.getStockQuantity(payload.productId);
      return {productId: payload.productId, quantity};
    }
}