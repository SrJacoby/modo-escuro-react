import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./Theme"
import styled from "styled-components"
import { GlobalStyles } from "./globalStyles"
import Sun from './assets/sun.svg'
import Moon from './assets/moon.svg'

function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const StyledDiv = styled.div`
    color: ${({theme}) => theme.text}
  `

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <StyledDiv>
        <h1>Olá! Seja bem-vindo ao site!</h1>
        <p>Ao clicar no botão abaixo, o tema do site mudará!</p>
        <button onClick={() => themeToggler()}><img src={theme === 'light' ? Moon : Sun}></img></button>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
