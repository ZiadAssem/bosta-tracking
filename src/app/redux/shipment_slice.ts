import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ShipmentInfo, mapShipmentInfo} from '../models/shipment_info_model';
import { fetchShipmentTracking } from '../api/shipment_API';

interface ShipmentState {
  shipment?: ShipmentInfo;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: ShipmentState = {
  status: 'idle',
};

// Async thunk to fetch shipment data
export const fetchShipment = createAsyncThunk<ShipmentInfo, string>(
  'shipment/fetchShipment',
  async (trackingNumber) => {
    const model = await fetchShipmentTracking(trackingNumber);
    return model;
  }
);

// Slice
const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipment.pending, (state) => {
        state.status = 'loading';
        console.log('pending')
      })
      .addCase(fetchShipment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.shipment = action.payload;
        console.log(' fulfilled',)
      })
      .addCase(fetchShipment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
        
        console.log('rejected',action.error.code)
      });
  },
});

export default shipmentSlice.reducer;
