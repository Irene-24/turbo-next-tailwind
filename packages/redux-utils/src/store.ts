import { configureStore, ThunkAction, Middleware } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./api";

import { Action } from "redux";
//import { createWrapper } from "next-redux-wrapper";

const middlewares: Middleware[] = [pokemonApi.middleware];

const makeStore = () =>
  configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

//export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
