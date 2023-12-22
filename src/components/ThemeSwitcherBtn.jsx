import React from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { themeMode } from '../redux/Slices/ThemeSwitcher';

function ThemeSwitcherBtn() {

    const {theme} = useSelector((state) => state)
    const dispatch = useDispatch()

    console.log("in btn theme",theme.themes)

    function changeHandler() {
        if(theme === "light") {
            dispatch( themeMode("dark"))
        }else {
            dispatch( themeMode("light"))
        }
    }

  return (
    <div>
    <button onClick={changeHandler}>
    {
        theme === "light" ? (
            <div>
                <MdLightMode/>
            </div>
        ) : (
            <div>
                <MdDarkMode/>
            </div>
        )
    }
    </button>      
    </div>
  )
}

export default ThemeSwitcherBtn