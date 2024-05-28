import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseEventsModule } from '@warehouse/events';

@Module({
  imports: [WarehouseEventsModule],
  providers: [WarehouseService],
  exports: [WarehouseService],
})
export class WarehouseSharedModule {}
