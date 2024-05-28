
class ShipmentInfo {
  address: any;
}

class CartItem {
  productId!: string;
  quantity!: number;
}

export class ShipmentEvent {
  shipmentId!: string;
  orderId!: string;
  userId!: string;
  items!: CartItem[];
  shipmentInfo!: ShipmentInfo;
  status!: string;
}

export class Shipment {
  id!: string;
  orderId!: string;
  userId!: string;
  items!: CartItem[];
  shipmentInfo!: ShipmentInfo;
  status!: string;
}
