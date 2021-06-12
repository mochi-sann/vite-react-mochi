import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Generation = {
  Name: string
  Done: boolean
}
type CheckPropst = {
  Done: boolean
  Number: number
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
    },
    CheckToDo: (state, action: PayloadAction<CheckPropst>) => {
      state[action.payload.Number].Done = action.payload.Done
    }
  }
})

export const { AddList, RemoveList, CheckToDo } = generationSlice.actions

export const TodoListGen = (state: RootState) => state.Todolist

export default generationSlice.reducer
