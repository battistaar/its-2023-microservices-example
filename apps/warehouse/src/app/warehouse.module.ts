
import { Module } from "@nestjs/common";
import { WarehouseApiModule } from "./api/warehouse-api.module";
import { WarehouseMessagesModule } from "./messages/warehouse-messages.module";
import { WarehouseEventsModule } from "./events/warehouse-events.module";

@Module({
    imports: [WarehouseApiModule, WarehouseEventsModule, WarehouseMessagesModule]
})
export class WarehouseModule {}
