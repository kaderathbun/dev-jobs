import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
  margin-inline: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    place-content: center;
    column-gap: 15px;
    row-gap: 60px;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    place-content: center;
    column-gap: 30px;
    row-gap: 60px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
