import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { OrderEvent, OrderStatusEvents } from '@order/config';
import { OrderStatusEvent } from '@order/event-client';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService
  ) {}

  @Get()
  getData() {
    // controlla la quantità residua
    // risponde con "ordine in lavorazione"

    // controlla il pagamento
    return this.appService.getData();
  }

  @OrderStatusEvent(OrderStatusEvents.START)
  async onStart(payload: OrderEvent) {
    console.log('test', payload);
  }
}
