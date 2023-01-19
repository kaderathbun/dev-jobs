import React from 'react'

// styles
import { StyledHeroCard, HeroWrapper } from './HeroCard.styles'
import { LogoWrapper, CompanyLogo } from '../shared/CompanyLogo.styled'
import { CompanyName, InfoSpan } from '../shared/CompanyInfo.styled'
import { HeroButton } from '../shared/Button.styled'

export default function HeroCard({ company }) {
  return (
    <StyledHeroCard>
      <LogoWrapper
        secondary
        style={{ backgroundColor: company.logoBackground }}
      >
        <CompanyLogo
          secondary
          src={`../${company.logo}`}
          alt={company.company}
        />
      </LogoWrapper>
      <HeroWrapper>
        <CompanyName>{company.company}</CompanyName>
        <InfoSpan>{`${company.company
          .toLowerCase()
          .replace(' ', '')}.com`}</InfoSpan>
      </HeroWrapper>
      <HeroButton href={`${company.website}`} target="_blank">
        Company Site
      </HeroButton>
    </StyledHeroCard>
  )
}
