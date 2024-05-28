import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentEventsModule } from '@payment/events';

@Module({
  imports: [PaymentEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
