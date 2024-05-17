import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { WarehouseCommands } from '@warehouse/config';

@Injectable()
export class WarehouseClient {
  constructor(@Inject('TEST_SERVICE') private client: ClientProxy) {  }

  async test() {
    return lastValueFrom(this.client.send(WarehouseCommands.test, {test: 'ciao'}));
  }
}
