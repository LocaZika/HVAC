import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "",
  brand: "",
  model: "",
  mileage: "",
};
export const formHeroSlice = createSlice({
  name: "formHero",
  initialState,
  reducers: {
    changeYear: (state, action) => {
      state = action.payload;
    },
    changeBrand: (state, action) => {
      state = action.payload;
    },
    changeModel: (state, action) => {
      state = action.payload;
    },
    changeMileage: (state, action) => {
      state = action.payload;
    },
  },
});
export const formHeroState = (state) => state.formHero;
