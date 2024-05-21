import { IEventPattern } from "@core/event-utils";
import { applyDecorators } from "@nestjs/common";
import { EventPattern, MicroserviceOptions, Transport } from "@nestjs/microservices";
import { REDIS_HOST, REDIS_PORT, OrderEvent, OrderStatusEvents } from "@order/config";

export const OrderStatusEvent = (event: OrderStatusEvents) => {
  return applyDecorators(EventPattern(`ord_${event}`, Transport.REDIS)) as IEventPattern<OrderEvent>;
}


export const getOrderTransportConfig = (): MicroserviceOptions => ({
  transport: Transport.REDIS,
  options: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});
