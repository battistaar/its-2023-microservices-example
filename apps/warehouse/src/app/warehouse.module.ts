import { Module } from "@nestjs/common";
import { WarehouseApiModule } from "./api/warehouse-api.module";

@Module({
    imports: [WarehouseApiModule]
})
export class WarehouseModule {}