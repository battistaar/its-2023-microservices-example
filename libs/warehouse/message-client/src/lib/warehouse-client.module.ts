import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WarehouseClient } from './warehouse-client.service';
import { WAREHOUSE_HOST, WAREHOUSE_PORT } from '@warehouse/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TEST_SERVICE', transport: Transport.TCP, options: {host: WAREHOUSE_HOST, port: WAREHOUSE_PORT}},
    ])
  ],
  providers: [WarehouseClient],
  exports: [WarehouseClient],
})
export class WarehouseClientModule {}
