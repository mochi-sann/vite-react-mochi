import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

type Generation = {
  Name: string
  AppBarName: string
}

const initialState: Generation = {
  Name: "サイトのたいとる",
  AppBarName: "Home"
}

type setAppBarNameAndTitle = {
  title: string
  AppBarName: string
}

export const generationSlice = createSlice({
  name: "Title",
  initialState,
  reducers: {
    SetTitle: (state, action: PayloadAction<string>) => {
      state.Name = action.payload
    },
    SetAppBarName: (state, action: PayloadAction<string>) => {
      state.AppBarName = action.payload
    },
    setAppBarNameAndTitle: (
      state,
      action: PayloadAction<setAppBarNameAndTitle>
    ) => {
      state.AppBarName = action.payload.AppBarName
      state.Name = action.payload.title
    }
  }
})

export const { SetTitle, SetAppBarName } = generationSlice.actions

export const TitleGen = (state: RootState) => state.Title

export default generationSlice.reducer
