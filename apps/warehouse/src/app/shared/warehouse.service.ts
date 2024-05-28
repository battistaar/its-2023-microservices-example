import { Injectable } from '@nestjs/common';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { ShipmentEvent } from '@shipment/config';
import { ItemsStatusEvent, WarehouseItem } from '@warehouse/config';
import { WarehouseEventsService } from '@warehouse/events';
import { WarehouseEvent } from '@warehouse/config';

@Injectable()
export class WarehouseService {
  constructor(protected warehouseEventSrv: WarehouseEventsService) {}

  protected products = [
    {
      id: '1',
      quantity: 10,
    },
    {
      id: '2',
      quantity: 20,
    },
  ];

  protected workItems: WarehouseItem[] = [];

  async getStockQuantity(productId: string) {
    const product = this.products.find((p) => p.id === productId);
    return product.quantity;
  }

  async unloadStock(productId: string, quantity: number) {
    const product = this.products.find((p) => p.id === productId);
    product.quantity -= quantity;

    return product.quantity;
  }

  async addWorkItem(payload: ShipmentEvent) {
    
    const warehouseItem: WarehouseItem = {
      warehouseId: randomStringGenerator(),
      orderId: payload.orderId,
      items: payload.items,
      shipmentId: payload.shipmentId,
      shipmentInfo: payload.shipmentInfo,
      status: "pending"
    }

    payload.items.forEach((item) => {
      this.unloadStock(item.productId, item.quantity);
    })

    this.workItems.push(warehouseItem);
  }

  async preparingOrder(warehouseId: string) {
    const item = this.workItems.find((i) => i.warehouseId === warehouseId);
    item.status = 'preparing';
    this.warehouseEventSrv.sendStatusChange(ItemsStatusEvent.PREPARING, item);
  }

  async shippedOrder(warehouseId: string) {
    const item = this.workItems.find((i) => i.warehouseId === warehouseId);
    item.status = 'shipped';
    
    const warehouseEvent: WarehouseEvent = { warehouseId: item.warehouseId, orderId: item.orderId, shipmentInfo: item.shipmentInfo, status: item.status };

    this.warehouseEventSrv.sendStatusChange(ItemsStatusEvent.SHIPPED, warehouseEvent);
  }
}
