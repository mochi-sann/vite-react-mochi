import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Generation = {
  Name: string
}

const initialState: Generation = {
  Name: ""
}

export const generationSlice = createSlice({
  name: "さいとタイトル",
  initialState,
  reducers: {
    AddList: (state, action) => {
      state.Name = action.payload
    }
  }
})

export const { AddList } = generationSlice.actions

export const selectGeneration = (state: RootState) => state.Todolist

export default generationSlice.reducer
