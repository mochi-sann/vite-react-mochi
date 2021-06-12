import { configureStore } from "@reduxjs/toolkit"
import Title from "./Title.store"
import Todolist from "./Todolist.store"

export const store = configureStore({
  reducer: {
    Todolist: Todolist,
    Title: Title
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
