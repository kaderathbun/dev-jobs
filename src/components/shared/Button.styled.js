import styled from 'styled-components'

export const HomeButton = styled.button`
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  width: ${(props) => (props.secondary ? '100%' : '141px')};
  margin: 0 auto;
  background-color: ${(props) => props.theme.buttons};
  color: ${(props) => props.theme.buttonDetailsFont};
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  height: 48px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #939bf4;
  }

  @media (min-width: 768px) {
    grid-column: 1/-1;
  }
`
export const HeroButton = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  width: ${(props) => (props.secondary ? '100%' : '141px')};
  margin: 0 auto;
  background-color: ${(props) => props.theme.detailsButton};
  color: ${(props) => props.theme.buttonFont};
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  height: 48px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  @media (min-width: 768px) {
    margin: 0;
    margin-left: auto;
    margin-right: 35px;
    grid-row: 1/4;
  }
`
export const DetailsButton = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  width: 100%;
  margin: 50px auto 0;
  background-color: ${(props) => props.theme.buttons};
  color: ${(props) => props.theme.buttonDetailsFont};
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  height: 48px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #939bf4;
  }

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 0;
    margin-left: auto;
    width: 141px;
  }
`
export const FooterButton = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  width: 100%;
  background-color: ${(props) => props.theme.buttons};
  color: ${(props) => props.theme.buttonDetailsFont};
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  height: 48px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #939bf4;
  }

  @media (min-width: 768px) {
    width: 141px;
  }
`
