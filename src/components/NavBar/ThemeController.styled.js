import styled from 'styled-components'

export const ThemeControllerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .slider {
    position: relative;
    width: 48px;
    height: 24px;
    border-radius: 15px;
    background-color: #fff;
    cursor: pointer;

    &--light {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.buttons};
      transition: all 0.25s ease-out;
    }
    &--dark {
      position: absolute;
      top: 50%;
      left: 29px;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.buttons};
      transition: all 0.25s ease-out;
    }
  }
`
