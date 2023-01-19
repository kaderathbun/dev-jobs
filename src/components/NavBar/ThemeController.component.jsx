import React, { useState } from 'react'
import { ThemeControllerStyled } from './ThemeController.styled'

// assets
import light from '../../assets/desktop/icon-sun.svg'
import dark from '../../assets/desktop/icon-moon.svg'

export default function ThemeController({ toggleTheme }) {
  const [mode, setMode] = useState('light')

  const handleClick = () => {
    if (mode === 'light') {
      setMode((prevMode) => 'dark')
      toggleTheme()
    } else {
      setMode((prevMode) => setMode('light'))
      toggleTheme()
    }
  }

  return (
    <ThemeControllerStyled>
      <img src={light} alt="Light Mode" />
      <div onClick={handleClick} className="slider">
        <div className={`slider--${mode}`}></div>
      </div>
      <img src={dark} alt="Dark mode" />
    </ThemeControllerStyled>
  )
}
