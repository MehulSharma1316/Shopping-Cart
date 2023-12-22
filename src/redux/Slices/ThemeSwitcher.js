import { createSlice } from "@reduxjs/toolkit";

export const ThemeSwitcher = createSlice({
   name: "theme",
   initialState: "light",
   reducers: {
    themeMode: (state, action) => {
        return state =  action.payload
    },
   
   }


})

export const {themeMode} = ThemeSwitcher.actions
export default ThemeSwitcher.reducer 

