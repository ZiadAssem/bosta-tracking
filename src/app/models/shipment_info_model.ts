// Define interfaces for each part of the response
interface TransitEvent {
    state: string;
    timestamp: Date;
    hub?: string;
    reason?: string;
}

export interface ShipmentInfo {
    provider: string;
    currentStatus: {
        state: string;
        timestamp: Date;
    };
    promisedDate: Date;
    trackingNumber: string;
    transitEvents: TransitEvent[];
    createDate: Date;
}


export const mapShipmentInfo = (data: any): ShipmentInfo => {
    return {
        provider: data.provider,
        currentStatus: {
            state: data.CurrentStatus.state,
            timestamp: new Date(data.CurrentStatus.timestamp),
        },
        promisedDate: new Date(data.PromisedDate),
        trackingNumber: data.TrackingNumber,
        transitEvents: data.TransitEvents.map((event: any) => ({
            state: event.state,
            timestamp: new Date(event.timestamp),
            hub: event.hub, // Optional field
            reason: event.reason, // Optional field
        })),
        createDate: new Date(data.CreateDate),
    };
};

export const shipmentToPlainObject = (data: ShipmentInfo): any => {
    return {
        provider: data.provider,
        currentStatus: {
            state: data.currentStatus.state,
            timestamp: data.currentStatus.timestamp,
        },
        PromisedDate: data.promisedDate.toISOString(),
        trackingNumber: data.trackingNumber,
        transitEvents: data.transitEvents.map(event => ({
            state: event.state,
            timestamp: event.timestamp,
            hub: event.hub, // Optional field
            reason: event.reason, // Optional field
        })),
        createDate: data.createDate.toISOString(),
    };
};