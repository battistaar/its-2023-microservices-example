import { OrderEvent, OrderStatusEvents, REDIS_HOST, REDIS_PORT } from '@order/config';
import { applyDecorators } from '@nestjs/common';
import { EventPattern, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { IEventPattern } from '@core/event-utils';
import { PaymentEvent, PaymentEventEntity } from '@payment/config';

export function eventClient(): string {
  return 'event-client';
}

export const PaymentStatusEvent = (event: PaymentEvent) => {
  return applyDecorators(EventPattern(`pay_${event}`, Transport.REDIS)) as IEventPattern<PaymentEventEntity>;
}


export const getPaymentTransportConfig = (): MicroserviceOptions => ({
  transport: Transport.REDIS,
  options: {
    host: REDIS_HOST,
    port: REDIS_PORT
  }
});
