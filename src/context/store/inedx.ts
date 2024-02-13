import { configureStore } from "@reduxjs/toolkit";
import addToFonts2 from "../features/AddToFonts";
export const store = configureStore({
  reducer: {
    addToFonts: addToFonts2,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
