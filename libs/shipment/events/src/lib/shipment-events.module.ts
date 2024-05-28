import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { REDIS_HOST, REDIS_PORT } from '@order/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SHIPMENT_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: REDIS_HOST,
          port: REDIS_PORT,
        }
      }
    ])
  ],
  providers: [],
  exports: [],
})
export class ShipmentEventsModuleClient {}
