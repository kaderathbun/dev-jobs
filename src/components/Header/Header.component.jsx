import React, { useContext } from 'react'
import { StyledHeader, Logo, Switch } from '../styles/Header.styled'
import { Container } from '../shared/Container.styled'

// assets
import logo from '../../assets/desktop/logo.svg'
import light from '../../assets/desktop/icon-sun.svg'
import dark from '../../assets/desktop/icon-moon.svg'
import { DataContext } from '../../contexts/DataContext.context'

export default function Header() {
  const { mode, setMode } = useContext(DataContext)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }
  return (
    <StyledHeader>
      <Container>
        <Logo src={logo} />
        <Switch>
          <img src={light} alt="Light" />
          <div onClick={toggleMode} className="switch__bg">
            <div className={`switch__slider--${mode}`}></div>
          </div>
          <img src={dark} alt="Dark" />
        </Switch>
      </Container>
    </StyledHeader>
  )
}
