import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  token: localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUsersReducer: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.token = localStorage.getItem("token");
    },
  },
});

export const { getAllUsersReducer } = userSlice.actions;
export default userSlice.reducer;
