
class ShipmentInfo {
  address: any;
}

class PaymentInfo {
  data: any;
  transactionId!: string;
}

class CartItem {
  productId!: string;
  quantity!: number;
}

export class ShipmentEvent {
  shipmentId!: string;
  orderId!: string;
  items!: CartItem[];
  paymentInfo!: PaymentInfo;
  shipmentInfo!: ShipmentInfo;
  status!: string;
}

export class Shipment {
  shipmentId!: string;
  orderId!: string;
  items!: CartItem[];
  shipmentInfo!: ShipmentInfo;
  status!: string;
}
