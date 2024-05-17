export const WarehouseCommands = {
  test: { cmd : 'test' },
  getStockQuantity: { cmd: 'getStockQuantity'}
}

export interface GetStockQuantityInput {
  productId: string;
}

export interface GetStockQuantityResult {
  productId: string;
  quantity: number;
}
