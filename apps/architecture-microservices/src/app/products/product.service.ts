import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
  protected products = [
    {
      id: "1",
      name: 'Prodotto1',
      price: 200
    },
    {
      id: "2",
      name: 'Prodotto2',
      price: 50
    }
  ];

  async findProducts() {
    return this.products;
  }

  async getById(id: string) {
    return this.products.find(p => p.id === id);
  }
}
