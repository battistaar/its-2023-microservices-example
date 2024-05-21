import { EventsDefinition, MessagesDefinition, clientEventDecoratorFactory, clientMessageDecoratorFactory } from '@core/event-utils';

export const WarehouseCommands = {
  test: { cmd : 'test' },
  getStockQuantity: { cmd: 'getStockQuantity'}
}

export class GetStockQuantityInput {
  productId!: string;
}

export class GetStockQuantityResult {
  productId!: string;
  quantity!: number;
}

export const WarehouseEventsDefinitions = {
  StockQuantityMessage: {
    identifier: 'test',
    payloadType: GetStockQuantityInput
  }
} satisfies EventsDefinition;

export const WarehouseMessagesDefinitions = {
  StockQuantityMessage: {
    identifier: 'getStockQuantity',
    payloadType: GetStockQuantityInput,
    responseType: GetStockQuantityResult
  }
} satisfies MessagesDefinition;

const prefix = 'wh';

export const WarehouseEvent = clientEventDecoratorFactory(WarehouseEventsDefinitions, prefix);

export const WarehouseMessage = clientMessageDecoratorFactory(WarehouseMessagesDefinitions, prefix);
