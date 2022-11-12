import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../data";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: USERS,
  },
  reducers: {
    register: (state, action) => {
      state.value = [
        ...state.value,
        {
          name: action.payload.name.trim().toLowerCase(),
          email: action.payload.email.trim().toLowerCase(),
          password: action.payload.password,
          status: true,
          favourites: [],
          shoppingCart: [],
          orders: [],
        },
      ];
    },
    logOut: (state, action) => {
      state.value = [
        ...state.value.filter((user) => user.email !== action.payload.email),
        action.payload,
      ];
    },
    deleteUser: (state, action) => {
      state.value = [
        ...state.value.filter((user) => user.email !== action.payload.email)
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOut, register,deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
