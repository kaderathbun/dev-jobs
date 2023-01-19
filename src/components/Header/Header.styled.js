import styled from 'styled-components'

// assets
import navBackground from '../../assets/mobile/bg-pattern-header.svg'

export const StyledHeader = styled.nav`
  width: 100%;
  height: 136px;
  background-image: url(${navBackground});
  margin-bottom: 150px;
`

export const Logo = styled.img``

export const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .switch__bg {
    position: relative;
    width: 48px;
    height: 24px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.secondaryColors.white};
    cursor: pointer;
  }
  .switch__slider--light {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryColors.violet};
    transition: all 0.25s ease;
  }
  .switch__slider--dark {
    position: absolute;
    top: 5px;
    left: 29px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryColors.violet};
    transition: all 0.25s ease;
  }
`
