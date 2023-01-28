import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/Auth"
import orderReducer from "../features/Order/OrderSlice"
export default configureStore({
  reducer: {
    auth:authReducer,
    order:orderReducer,
  },
});
