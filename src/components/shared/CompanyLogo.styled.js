import styled from 'styled-components'

export const LogoWrapper = styled.span`
  position: absolute;
  top: -25px;
  /* left: 24.5px; */
  left: ${(props) => (props.secondary ? '50%' : '24.5px')};
  transform: translateX(${(props) => (props.secondary ? '-50%' : '0')});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  padding: 7px;

  @media (min-width: 768px) {
    position: ${(props) => (props.secondary ? 'static' : 'absolute')};
    transform: translateX(${(props) => (props.secondary ? '0' : '0')});
    border-radius: ${(props) => (props.secondary ? '0 0px 0 15px' : '15px')};
    grid-column: ${(props) => (props.secondary ? '1/2' : null)};
    grid-row: ${(props) => (props.secondary ? '1/3' : null)};
    width: ${(props) => (props.secondary ? '140px' : '50')};
    height: ${(props) => (props.secondary ? '140px' : '50')};
  }
`
export const CompanyLogo = styled.img`
  @media (min-width: 768px) {
    width: ${(props) => (props.secondary ? '80px' : null)};
    height: ${(props) => (props.secondary ? 'auto' : null)};
  }
`
