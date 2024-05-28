import { shipmentEventClient } from './shipment-event-client';

describe('shipmentEventClient', () => {
  it('should work', () => {
    expect(shipmentEventClient()).toEqual('shipment-event-client');
  });
});
