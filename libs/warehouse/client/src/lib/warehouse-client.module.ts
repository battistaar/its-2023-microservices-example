import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WarehouseClient } from './warehouse-client.service';
import { WAREHOUSE_PORT } from '@warehouse/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TEST_SERVICE', transport: Transport.TCP, options: {port: WAREHOUSE_PORT}},
    ])
  ],
  providers: [WarehouseClient],
  exports: [WarehouseClient],
})
export class WarehouseClientModule {}
