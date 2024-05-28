import { IEventPattern } from "@core/event-utils";
import { applyDecorators } from "@nestjs/common";
import { EventPattern, MicroserviceOptions, Transport } from "@nestjs/microservices";
import { REDIS_HOST, REDIS_PORT, ShipmentEvent, ShipmentStatusEvents } from "@shipment/config";

export const ShipmentStatusEvent = (event: ShipmentStatusEvents) => {
  return applyDecorators(EventPattern(`shipment_${event}`, Transport.REDIS)) as IEventPattern<ShipmentEvent>;
}


export const getOrderTransportConfig = (): MicroserviceOptions => ({
  transport: Transport.REDIS,
  options: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});
