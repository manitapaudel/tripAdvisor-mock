import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //name of the slice
  initialState: { value: { name: "Manita", age: 50, email: "manita@123.com" } },
  reducers: {
      login: (state, action) => {
          state.value= action.payload
      }
  }
});

export default userSlice.reducer