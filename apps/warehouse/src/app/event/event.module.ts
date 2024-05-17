import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { WareHouseServiceModule } from "../warehouse/warehouse.module";

@Module({
  imports: [WareHouseServiceModule],
  controllers: [EventController]
})
export class EventModule {}
