import { createSlice } from "@reduxjs/toolkit";
const initialState: any = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};
const addToFonts = createSlice({
  name: "addToFonts",
  initialState,
  reducers: {
    addToFonts2: (state, action) => {
      if (state.cart.length === 0) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart = state.cart.filter(
          (item: any) => action.payload.variants !== item.variants
        );
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    removeAllCart: (state, action) => {
      state.cart = [];

      localStorage.setItem("cart", JSON.stringify(state.cart));
      action.payload = 0;
    },
    removeOnlyOneCart: (state, action) => {
      state.cart = state.cart.filter(
        (item: any) => action.payload.variants !== item.variants
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});
export const { addToFonts2, removeAllCart, removeOnlyOneCart } =
  addToFonts.actions;
export default addToFonts.reducer;
