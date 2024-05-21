import { Module } from "@nestjs/common";
import { OrderApiController } from "./order-api.controller";
import { OrderSharedModule } from "../shared/order-shared.module";

@Module({
  imports: [OrderSharedModule],
  controllers: [OrderApiController]
})
export class OrderApiModule { }
