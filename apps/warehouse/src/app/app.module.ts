import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { WareHouseServiceModule } from './warehouse/warehouse.module';

@Module({
  imports: [WareHouseServiceModule ,EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
