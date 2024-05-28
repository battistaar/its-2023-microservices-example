import { Injectable } from '@nestjs/common';
import { PaymentEventsService } from '@payment/events';
import { OrderEvent } from '@order/config';
import { PaymentEvent, PaymentEventEntity } from '@payment/config';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class AppService {
 constructor(protected paymentSrv: PaymentEventsService) { }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async startPAyment(orderEvent : OrderEvent) {
    await this.startPayment(orderEvent);
  }

  async startPayment(order: OrderEvent) {
    const payment : PaymentEventEntity = {
      orderId: order.orderId,
      payment_status: 'payment-status_awaiting',
      transactionId: randomStringGenerator()
    }
    this.paymentSrv.sendStatusChange(PaymentEvent.AWAITING, payment);
    setTimeout(() => {
      this.paymentSrv.sendStatusChange(PaymentEvent.CONFIRMED, payment);
    }, 5000);
  }
}
