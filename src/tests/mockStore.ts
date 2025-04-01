import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { tasksReducer } from "../features/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const mockStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(mockStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof mockStore.dispatch;
