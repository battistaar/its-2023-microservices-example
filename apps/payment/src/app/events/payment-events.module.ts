import { Module } from "@nestjs/common";
import { PaymentSharedModule } from "../shared/payment.shared.module";

@Module({
  imports: [PaymentSharedModule]
})
export class PaymentApiModule { }
