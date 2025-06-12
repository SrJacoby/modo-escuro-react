import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./Theme"
import { GlobalStyles } from "./GlobalStyles.jsx"
import Sun from './assets/sun.svg'
import Moon from './assets/moon.svg'

function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <div>
        <h1>Olá! Seja bem-vindo ao site!</h1>
        <p>Ao clicar no botão abaixo, o tema do site mudará!</p>
        <button onClick={() => themeToggler()}><img src={theme === 'light' ? Moon : Sun} alt='Símbolo da mudança de tema'></img></button>
      </div>
    </ThemeProvider>
  )
}

export default App
