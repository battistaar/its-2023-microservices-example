import { Module } from "@nestjs/common";
import { WarehouseApiController } from "./warehouse-api.controller";
import { WarehouseSharedModule } from "../shared/warehouse-shared.module";

@Module({
    imports: [WarehouseSharedModule],
    controllers: [WarehouseApiController],
})
export class WarehouseApiModule {}