import React from 'react'
import MediaQuery from 'react-responsive'

// styles
import { StyledDetailsFooter, FooterWrapper } from './DetailsFooter.styled'
import { FooterButton } from '../shared/Button.styled'
import { Container } from '../shared/Container.styled'
import { Position, InfoSpan } from '../shared/CompanyInfo.styled'

export default function DetailsFooter({ company }) {
  return (
    <StyledDetailsFooter>
      <MediaQuery maxWidth={767}>
        <Container style={{ display: 'flex', alignItems: 'center' }}>
          <FooterButton href={`${company.apply}`} target="_blank">
            Apply Now
          </FooterButton>
        </Container>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Container
          secondary
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr min-content',
            placeContent: 'center',
          }}
        >
          <FooterWrapper>
            <Position style={{ fontSize: '2rem' }}>{company.position}</Position>
            <InfoSpan>{company.company}</InfoSpan>
          </FooterWrapper>
          <FooterButton href={`${company.apply}`} target="_blank">
            Apply Now
          </FooterButton>
        </Container>
      </MediaQuery>
    </StyledDetailsFooter>
  )
}
