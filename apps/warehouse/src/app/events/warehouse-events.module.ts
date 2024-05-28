import { Module } from "@nestjs/common";
import { WarehouseEventsController } from "./warehouse-events.controller";
import { WarehouseSharedModule } from "../shared/warehouse-shared.module";


@Module({
  imports: [WarehouseSharedModule],
  controllers: [WarehouseEventsController]
})
export class WarehouseEventsModule { }
