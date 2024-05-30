export class ShipmentInfo {
  address: any;
}

class OrderItem {
  productId!: string;
  quantity!: number;
}

export class WarehouseItem {
    warehouseId!: string;
    orderId!: string;
    items!: OrderItem[];
    shipmentId!: string;
    shipmentInfo!: ShipmentInfo;
    status!: string;
}

export class WarehouseEvent {
    warehouseId!: string;
    orderId!: string;
    shipmentInfo!: ShipmentInfo;
    status!: string;
}
