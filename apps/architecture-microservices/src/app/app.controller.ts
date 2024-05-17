import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService,
      @Inject('EVENT_SERVICE') protected eventClient: ClientProxy
  ) {}

  @Get()
  getData() {
    // controlla la quantità residua
    // risponde con "ordine in lavorazione"

    // controlla il pagamento

    this.eventClient.emit('test_event', {productId: '2', quantity: 3});
    return this.appService.getData();
  }
}
