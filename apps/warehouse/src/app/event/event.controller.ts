import { Controller } from '@nestjs/common';
import { WarehouseService } from '../warehouse.service';

@Controller()
export class EventController {
  constructor(protected warehouseSrv: WarehouseService) {}
}
