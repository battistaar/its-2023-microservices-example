import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderEventsModule } from "@order/events";

@Module({
  imports: [OrderEventsModule],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderSharedModule { }
