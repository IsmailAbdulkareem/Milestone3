import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import cartReducer from "./cartSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Example reducer, update as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
