import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { postsApi } from "./api/post";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(postsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedDispatch = () => typeof useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
