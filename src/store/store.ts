import { configureStore } from "@reduxjs/toolkit"
import Todolist from "./Todolist.store"

export const store = configureStore({
  reducer: {
    Todolist: Todolist
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
