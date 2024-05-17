/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WAREHOUSE_PORT } from '@warehouse/config';

async function bootstrap() {
  const port = 5000;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: WAREHOUSE_PORT
      }
    },
  );
  await app.listen();
  Logger.log(
    `🚀 Application is running on port:${port}`
  );
}

bootstrap();
