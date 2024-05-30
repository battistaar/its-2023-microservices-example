/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { OrderModule } from './app/order.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      }
    }
  })

  const port = process.env.ORDER_API_PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Order is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
