import styled from 'styled-components'

// assets
import checkmarkIcon from '../../assets/desktop/icon-check.svg'

export const StyledFilter = styled.form`
  position: relative;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 25px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.containers};
  margin-bottom: 25px;

  @media (min-width: 768px) {
    padding: 0;
  }
`
export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 15px;

  @media (min-width: 768px) {
    justify-content: center;
    height: 100%;
    border-right: 2px solid ${(props) => props.theme.border};

    &:nth-of-type(1) {
      padding-left: 25px;
    }
    &:nth-of-type(3) {
      font-size: 1.6rem;
      font-weight: ${(props) => props.theme.fontWeightBold};
      color: ${(props) => props.theme.font};
      position: relative;
      border-bottom: none;
      flex-direction: row-reverse;
      border-right: none;
      padding-right: 25px;
      cursor: pointer;

      input:checked ~ span {
        background-color: ${(props) => props.theme.checkboxActive};
      }
      input:checked ~ span:after {
        display: block;
      }
    }
  }
  @media (min-width: 1440px) {
    width: var(--width-large);
  }
`
export const SearchIcon = styled.img``
export const LocationIcon = styled.img``
export const Input = styled.input`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.font};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateY(0);
      height: 24px;
      width: 24px;
      border-radius: 5px;
      opacity: 0;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    width: 55%;
  }
`
export const InputBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
`

export const InputWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: relative;
    width: 24px;
    height: 24px;
  }
`
export const FilterCheckIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.checkbox};

  &::after {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: url(${checkmarkIcon});
  }
  &:hover {
    background-color: ${(props) => props.theme.checkboxHover};
  }
`
