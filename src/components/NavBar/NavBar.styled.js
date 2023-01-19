import styled from 'styled-components'

// assets
import mobileBg from '../../assets/mobile/bg-pattern-header.svg'
import tabletBg from '../../assets/tablet/bg-pattern-header.svg'
import desktopBg from '../../assets/desktop/bg-pattern-header.svg'

export const StyledNav = styled.nav`
  width: 100%;
  height: 136px;
  background-image: url(${mobileBg});
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: bottom left;

  @media (min-width: 768px) {
    height: 162px;
    background-image: url(${tabletBg});
    background-size: cover;
    background-position: bottom center;
  }

  @media (min-width: 1440px) {
    background-image: url(${desktopBg});
    background-position: bottom left;
  }
`
export const NavContainer = styled.div`
  height: 75%;
  width: var(--width-small);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    width: var(--width-large);
  }
`
export const NavLogo = styled.img``
