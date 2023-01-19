import React from 'react'
import { Link } from 'react-router-dom'

// styles
import { StyledNav, NavContainer, NavLogo } from './NavBar.styled.js'

// assets
import logo from '../../assets/desktop/logo.svg'

// components
import ThemeController from './ThemeController.component.jsx'

export default function NavBar({ toggleTheme }) {
  return (
    <StyledNav>
      <NavContainer>
        <Link to='/'>
          <NavLogo src={logo} alt="DevJobs" />
        </Link>
        <ThemeController toggleTheme={toggleTheme} />
      </NavContainer>
    </StyledNav>
  )
}
