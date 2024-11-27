import { ShipmentInfo,mapShipmentInfo } from "../models/shipment_info_model";
import axiosInstance from "./axios";
import { shipmentToPlainObject } from './../models/shipment_info_model';


export const fetchShipmentTracking = async (trackingNumber: string): Promise<ShipmentInfo> => {
    try {
      const response = await axiosInstance.get(`/track/${trackingNumber}`);
     
      const model = shipmentToPlainObject(mapShipmentInfo(response));
      return model; 
    } catch (error) {
      
      throw error;
    }
  };