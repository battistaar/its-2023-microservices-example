import { Order, OrderStatusEvents } from '@order/config';
import { Injectable } from "@nestjs/common";
import { OrderEventsService } from '@order/events';
import { ShipmentEventsService } from '@shipment/events';
import { Shipment, ShipmentStatusEvents } from '@shipment/config';

@Injectable()
export class ShipmentService {
  
    constructor(protected shipmentEventsSrv: ShipmentEventsService){}

    private shimpents: Shipment[] = [{
        id: 'shipment1',
        orderId: 'order1',
        userId: 'user19',
        items: [{productId: 'prod1', quantity: 5}],
        shipmentInfo: {address: {city: 'Vicenza', cap: 36100, via: 'via delle scimmie, 7'}},
        status: 'pending'
    }]

    async startShipment(id: string){
        const shipment = this.shimpents.find(ship => ship.id === id)

        if(!shipment){
            throw new Error('shipment not found')
        }
        shipment.status = 'start'

        const eventData = {
            shipmentId : id,
            ...shipment
        }
        this.shipmentEventsSrv.sendStatusChange(ShipmentStatusEvents.START, eventData)
        
    }

    async preperingShipment(id: string){
        const shipment = this.shimpents.find(ship => ship.id === id)
        if(!shipment){
            throw new Error('shipment not found')
        }
        shipment.status = 'prepering'

        const eventData  ={
            shipmentId: id,
            ...shipment
        }

        this.shipmentEventsSrv.sendStatusChange(ShipmentStatusEvents.PREP, eventData)
    }

    async shippedShipment(id: string){
        const shipment = this.shimpents.find(ship => ship.id === id)
        
        if(!shipment){
            throw new Error('shipment not found')
        }
        shipment.status = 'shipped'

        const eventData  ={
            shipmentId: id,
            ...shipment
        }

        this.shipmentEventsSrv.sendStatusChange(ShipmentStatusEvents.SHIPPED, eventData)
    }
}
