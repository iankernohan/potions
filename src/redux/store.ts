import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import potionsReducder from "./potionsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    potions: potionsReducder,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
