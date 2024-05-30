import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { OrderStatusEvent } from '@order/event-client';
import { OrderEvent, OrderStatusEvents } from '@order/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @OrderStatusEvent(OrderStatusEvents.START)
  async onStart(payload: OrderEvent) {
    console.log(`PAYMENT: received ${OrderStatusEvents.START}`)
    await this.appService.startPAyment(payload);
  }
}
