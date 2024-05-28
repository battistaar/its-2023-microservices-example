import { Module } from "@nestjs/common";
import { WarehouseMessagesController } from "./warehouse-messages.controller";
import { WarehouseSharedModule } from "../shared/warehouse-shared.module";

@Module({
    imports: [WarehouseSharedModule],
    controllers: [WarehouseMessagesController],
})
export class WarehouseMessagesModule {}