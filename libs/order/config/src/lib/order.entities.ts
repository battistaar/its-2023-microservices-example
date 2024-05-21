class ShipmentInfo {
  address: any;
}

class PaymentInfo {
  method!: string;
  data: any;
  transactionId!: string;
}

class CartItem {
  productId!: string;
  quantity!: number;
}

export class OrderEvent {
  orderId!: string;
  userId!: string;
  items!: CartItem[];
  paymentInfo!: PaymentInfo;
  shipmentInfo!: ShipmentInfo;
  status!: string;
}

export class Order {
  id!: string;
  userId!: string;
  items!: CartItem[];
  paymentInfo!: PaymentInfo;
  shipmentInfo!: ShipmentInfo;
  status!: string;
}
