import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { GetStockQuantityInput, GetStockQuantityResult, WarehouseCommands } from '@warehouse/config';

@Injectable()
export class WarehouseClient {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {  }

  async test() {
    return lastValueFrom(this.client.send(WarehouseCommands.test, {test: 'ciao'}));
  }

  async getStockQuantity(productId: string) {
    return lastValueFrom(this.client.send<GetStockQuantityResult, GetStockQuantityInput>(WarehouseCommands.getStockQuantity, { productId }));
  }
}
