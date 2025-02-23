import React, { useState,useEffect } from 'react'
import LadndingPage from './components/LadndingPage'

const App = () => {

  const [theme, setTheme] = useState('light');

  useEffect(()=>{

      if(theme === 'dark'){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark")
      }

  }, [theme])

  const handleThemeChange = ()=>{
    setTheme(theme === "light"? "dark": "light")
  }
  return (
    <div>
     <LadndingPage change = {handleThemeChange}/>
    </div>
  )
}

export default App
