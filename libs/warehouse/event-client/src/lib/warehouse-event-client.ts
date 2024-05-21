import { IEventPattern } from "@core/event-utils";
import { applyDecorators } from "@nestjs/common";
import { EventPattern, MicroserviceOptions, Transport } from "@nestjs/microservices";
import { ItemsStatusEvent, REDIS_HOST, REDIS_PORT, WarehouseItem } from "@warehouse/config";

export const ItemsStatusEvents = (event: ItemsStatusEvent) => {
  return applyDecorators(
    EventPattern(`ord_${event}`, Transport.REDIS)
  ) as IEventPattern<WarehouseItem>;
};

export const getWarehouseTransportConfig = (): MicroserviceOptions => ({
  transport: Transport.REDIS,
  options: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});