import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentEvent, PaymentEventEntity } from '@payment/config';

@Injectable()
export class PaymentEventsService {
  constructor(@Inject('PAYMENT_SERVICE') protected paymentClient: ClientProxy) {}

  sendStatusChange(event: PaymentEvent, data: PaymentEventEntity) {
    console.log(`pay_${event}`)
    this.paymentClient.emit(`pay_${event}`, data);
  }
}
