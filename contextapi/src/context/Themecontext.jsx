import { createContext, useState } from "react";

export const ThemeContest = createContext()

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("light")
    
    const toggleTheme = ()=>{
        if(theme ==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return (
       <ThemeContest.Provider
         value= {{theme ,isLight : theme ==="light",toggleTheme}}> {children}</ThemeContest.Provider>
    )
}

// useReducer 