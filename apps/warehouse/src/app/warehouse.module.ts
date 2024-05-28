import { Module } from "@nestjs/common";
import { WarehouseApiModule } from "./api/warehouse-api.module";
import { WarehouseMessagesModule } from "./messages/warehouse-messages.module";

@Module({
    imports: [WarehouseApiModule, WarehouseMessagesModule]
})
export class WarehouseModule {}