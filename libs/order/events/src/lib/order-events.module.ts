import { Module } from '@nestjs/common';
import { OrderEventsService } from './order-events.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { REDIS_HOST, REDIS_PORT } from '@order/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: REDIS_HOST,
          port: REDIS_PORT,
        }
      }
    ])
  ],
  providers: [OrderEventsService],
  exports: [OrderEventsService],
})
export class OrderEventsModule {}
