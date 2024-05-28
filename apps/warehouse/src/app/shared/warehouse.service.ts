import { Injectable } from "@nestjs/common";
import { WarehouseItem } from "@warehouse/config";

@Injectable()
export class WarehouseService {
    protected products = [
        {
          id: '1',
          quantity: 10
        },
        {
          id: '2',
          quantity: 20
        }
    ];

    protected workItems: WarehouseItem[] = [];
    
    async getStockQuantity(productId: string) {
        const product = this.products.find(p => p.id === productId)
        return product.quantity;
    }
    
    async unloadStock(productId: string, quantity: number) {
        const product = this.products.find(p => p.id === productId);
        product.quantity -= quantity;
    
        return product.quantity;
    }

    async preparingOrder(warehouseId: string) {
        const item = this.workItems.find(i => i.warehouseId === warehouseId);
        item.status = 'preparing';
    }

    async shippedOrder(warehouseId: string) {
        const item = this.workItems.find(i => i.warehouseId === warehouseId);
        item.status = 'shipped';
    }
}