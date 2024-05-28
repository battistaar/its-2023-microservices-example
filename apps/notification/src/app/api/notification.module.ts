import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationController } from './notification.controller';
import { REDIS_HOST, REDIS_PORT } from '@order/config';
import { NotificationService } from '../shared/notification.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: REDIS_HOST,
          port: REDIS_PORT,
        }
      }
    ])
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
