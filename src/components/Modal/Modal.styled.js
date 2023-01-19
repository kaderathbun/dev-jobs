import styled from 'styled-components'

// assets
import checkmarkIcon from '../../assets/desktop/icon-check.svg'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`
export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: 327px;
  height: 217px;
  background-color: ${(props) => props.theme.modal};
  border-radius: 7px;
`
export const ModalForm = styled.form`
  height: 100%;
  padding: 15px 0;
`
export const ModalLabel = styled.label`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(110, 128, 152, 0.25);
  padding-inline: 30px 15px;
  cursor: pointer;

  &:nth-child(2) {
    font-size: 1.6rem;
    font-weight: ${(props) => props.theme.fontWeightBold};
    color: ${(props) => props.theme.font};
    position: relative;
    border-bottom: none;
    padding: 20px 65px;

    input:checked ~ span {
      background-color: ${(props) => props.theme.checkboxActive};
    }
    input:checked ~ span:after {
      display: block;
    }
  }
`
export const LocationIcon = styled.img``
export const ModalLocationInput = styled.input`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.font};
  padding: 15px;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }
`
export const ModalCheckInput = styled.input`
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  border-radius: 5px;
  opacity: 0;
  cursor: pointer;
`
export const ModalCheckIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 26px;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.checkbox};

  &:hover {
    background-color: ${(props) => props.theme.checkboxHover};
  }
  &::after {
    content: url(${checkmarkIcon});
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const ButtonWrapper = styled.div`
  padding: 0 30px 30px;
`
