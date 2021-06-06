import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Generation = {
  Name: string
}

const initialState: Generation[] = [
  {
    Name: "aaaaaa"
  }
]

export const generationSlice = createSlice({
  name: "さいとタイトル",
  initialState,
  reducers: {
    AddList: (state, action) => {
      state.push({ Name: action.payload })
    },
    RemoveList: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
})

export const { AddList, RemoveList } = generationSlice.actions

export const TodoListGen = (state: RootState) => state.Todolist

export default generationSlice.reducer
