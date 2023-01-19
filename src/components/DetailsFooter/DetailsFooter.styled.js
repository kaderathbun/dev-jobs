import styled from 'styled-components'

export const StyledDetailsFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  background-color: ${(props) => props.theme.containers};
`
export const FooterWrapper = styled.div`
  @media (min-width: 768px) {
    height: 48px;
  }
`
