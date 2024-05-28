import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './api/notification.module';

@Module({
  imports: [AppController, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
