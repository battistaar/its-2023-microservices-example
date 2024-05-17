import { Injectable } from "@nestjs/common";

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

  async getStockQuantity(productId: string) {
    const product = this.products.find(p => p.id === productId)
    return product.quantity;
  }

  async unloadStock(productId: string, quantity: number) {
    const product = this.products.find(p => p.id === productId);
    product.quantity -= quantity;

    return product.quantity;
  }
}
