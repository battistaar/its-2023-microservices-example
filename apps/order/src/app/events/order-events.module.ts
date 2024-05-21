import { Module } from "@nestjs/common";
import { OrderSharedModule } from "../shared/order-shared.module";
import { OrderEventsController } from "./order-events.controller";

@Module({
  imports: [OrderSharedModule],
  controllers: [OrderEventsController]
})
export class OrderEventsModule { }
