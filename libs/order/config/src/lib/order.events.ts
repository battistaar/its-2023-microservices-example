export enum OrderStatusEvents {
  START = 'order_status_start',
  PAYED = 'order_status_payed',
  SHIPPING = 'order_status_shipping',
  SHIPPED = 'order_status_shipped',
  DELIVERED = 'order_status_delivered',
  ALL = 'order_status_*' // method to listen to all events and based on the status send a certain notitication
}
