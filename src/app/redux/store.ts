import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './shipment_slice'; // Adjust the path based on your file structure

export const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
