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
    }
  }
})

export const { AddList } = generationSlice.actions

export const TodoListGen = (state: RootState) => state.Todolist

export default generationSlice.reducer
