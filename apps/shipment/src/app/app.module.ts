import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentEventsModule } from './events/shipment-events.module';
import { ShipmentApiModule } from './api/shipment-api.module';

@Module({
  imports: [ShipmentEventsModule, ShipmentApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
