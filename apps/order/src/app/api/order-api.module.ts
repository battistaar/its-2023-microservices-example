import { Module } from "@nestjs/common";
import { OrderApiController } from "./order-api.controller";
import { OrderSharedModule } from "../shared/order-shared.module";
import { OrderEventsModule } from "@order/events";

@Module({
  imports: [OrderEventsModule, OrderSharedModule],
  controllers: [OrderApiController]
})
export class OrderApiModule { }
