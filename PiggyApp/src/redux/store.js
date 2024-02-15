import { configureStore } from "@reduxjs/toolkit";
import debitAccountReducer from "./DebitAccountSlice";

export const store = configureStore({
    reducer: {
        account: debitAccountReducer
    }
});

export default store;