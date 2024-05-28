import { Module } from "@nestjs/common";
import { WarehouseService } from "./warehouse.service";

@Module({
    imports: [],
    providers: [WarehouseService],
    exports: [WarehouseService],
})
export class WarehouseSharedModule {}