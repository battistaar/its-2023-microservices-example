import { CartItem, ShipmentInfo } from "@shipment/config";

export class WarehouseItem {
    warehouseId!: string;
    orderId!: string;
    items!: CartItem[];
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