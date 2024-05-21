import { Module } from '@nestjs/common';
import { OrderApiModule } from './api/order-api.module';

@Module({
  imports: [OrderApiModule]
})
export class OrderModule {}
