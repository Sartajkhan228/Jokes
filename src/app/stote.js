import { configureStore } from "@reduxjs/toolkit";
import { jokesSlice } from "../feature/apiSlice";

export const store = configureStore({
    reducer: {
        [jokesSlice.reducerPath]: jokesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jokesSlice.middleware),
})