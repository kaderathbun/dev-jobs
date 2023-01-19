import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: var(--width-small);
  margin-inline: auto;

  @media (min-width: 768px) {
    max-width: ${(props) => (props.secondary ? '730px' : null)};
  }

  @media (min-width: 1440px) {
    width: var(--width-large);
  }
`
