import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProivder } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actul change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
        <ThemeProivder value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themeBtn */}
          </div>

          <div className="w-full max-w-sm mx-auto">
              {/* Card */}
          </div>
        </div>
      </div>
      </ThemeProivder>

    </>
  )
}

export default App
