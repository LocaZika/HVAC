import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../../Pages";
import { authSlice } from "../../Middlewares/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
