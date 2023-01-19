import styled from 'styled-components'

export const InfoSpan = styled.span`
  font-size: 1.6rem;
  color: ${(props) => props.theme.fontSub};
`
export const ContentBreak = styled.span`
  width: 4px;
  height: 4px;
  align-self: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.fontSub};
`
export const Position = styled.h1`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.font};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
export const Location = styled.address`
  font-size: 1.4rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: var(--theme-primary-violet);
  font-style: normal;
  margin-top: ${(props) => (props.secondary ? '0' : '30px')};
`
export const CompanyName = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.font};

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`
export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 26px;
  color: ${(props) => props.theme.fontSub};
`
