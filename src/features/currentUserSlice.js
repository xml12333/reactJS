import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: {
      name: "",
      email: "",
      password: "",
      status: false,
      favourites: [],
      shoppingCart: [],
      orders: [],
    },
  },
  reducers: {
    currentUserRegister: (state, action) => {
      state.value = {
        name: action.payload.name.trim().toLowerCase(),
        email: action.payload.email.trim().toLowerCase(),
        password: action.payload.password,
        status: true,
        favourites: [],
        shoppingCart: [],
        orders: [],
      };
    },
    resetCurrentUser: (state, action) => {
      state.value = {
        name: "",
        email: "",
        password: "",
        status: false,
        favourites: [],
        shoppingCart: [],
        orders: [],
      };
    },
    updateCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUserRegister, resetCurrentUser, updateCurrentUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
