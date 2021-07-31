import { configureStore } from "@reduxjs/toolkit"
import { save, load } from "redux-localstorage-simple"
import Title from "./Title.store"
import Todolist from "./Todolist.store"

export const store = configureStore({
  reducer: {
    Todolist: Todolist,
    Title: Title
  },
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
