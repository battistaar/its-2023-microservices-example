import { Module } from '@nestjs/common';
import { WarehouseEventsService } from './warehouse-events.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { REDIS_HOST, REDIS_PORT } from '@warehouse/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WAREHOUSE_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: REDIS_HOST,
          port: REDIS_PORT,
        }
      }
    ])
  ],
  providers: [WarehouseEventsService],
  exports: [WarehouseEventsService],
})
export class WarehouseEventsModule {}
