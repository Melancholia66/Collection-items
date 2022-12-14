import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { collectionApi } from "./api/collectionApi";
import { itemApi } from "./api/itemApi";
import { commentApi } from "./api/commentApi";
import collectionReducer from "./features/collectionSlice";
import userReducer from "./features/userSlise";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    userState: userReducer,
    collectionState: collectionReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      collectionApi.middleware,
      itemApi.middleware,
      commentApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
