import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateCartItem: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
