import { Module } from '@nestjs/common';
import { OrderApiModule } from './api/order-api.module';
import { OrderEventsModule } from './events/order-events.module';

@Module({
  imports: [OrderApiModule, OrderEventsModule]
})
export class OrderModule {}
