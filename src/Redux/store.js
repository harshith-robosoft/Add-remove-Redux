import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/addUserSlice"
export const store = configureStore({
    reducer: {
      users: userReducer,
    }
})
