import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Generation = {
  Name: string
  Done: boolean
}

const initialState: Generation[] = []

export const generationSlice = createSlice({
  name: "Todo List",
  initialState,
  reducers: {
    AddList: (state, action) => {
      state.push({ Name: action.payload, Done: false })
    },
    RemoveList: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
})

export const { AddList, RemoveList } = generationSlice.actions

export const TodoListGen = (state: RootState) => state.Todolist

export default generationSlice.reducer
