import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.containers};
  border-radius: 7px;
  padding: 40px 25px;
`
