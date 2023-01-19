import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyles } from './GobalStyles.styles'
import { DataContext } from './contexts/DataContext.context'
import { ThemeProvider } from 'styled-components'
import { darkMode, lightMode } from './contexts/Theme.styles'
import { useState } from 'react'
import ScrollToTop from './utils/ScrollToTop.utils'

// data
import data from './data.json'

// components
import NavBar from './components/NavBar/NavBar.component'

// pages
import Home from './pages/Home/Home.component'
import Details from './pages/Details/Details.component'

const StyledApp = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.body};
`

function App() {
  const [theme, setTheme] = useState('light')
  const isDarkMode = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <DataContext.Provider value={{ data }}>
        <GlobalStyles />
        <StyledApp>
          <BrowserRouter>
            <NavBar toggleTheme={toggleTheme} />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/details/:itemId" element={<Details />} />
            </Routes>
            <ScrollToTop />
          </BrowserRouter>
        </StyledApp>
      </DataContext.Provider>
    </ThemeProvider>
  )
}

export default App
