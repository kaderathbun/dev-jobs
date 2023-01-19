import styled from 'styled-components'

export const StyledHeroCard = styled.div`
  position: relative;
  top: -25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 205px;
  padding: 35px 25px;
  background-color: ${(props) => props.theme.containers};
  border-radius: 7px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: min-content 1fr 2fr;
    column-gap: 40px;
    row-gap: 0;
    padding: 0;
    height: 140px;
  }
`
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/3;
    align-items: flex-start;
    gap: 0;
  }
`
