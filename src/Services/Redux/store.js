import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../../Pages";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
