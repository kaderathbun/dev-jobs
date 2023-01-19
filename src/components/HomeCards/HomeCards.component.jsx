import React from 'react'

// styles
import { StyledCard } from './HomeCards.styled'
import {
  InfoSpan,
  ContentBreak,
  Position,
  Location,
} from '../shared/CompanyInfo.styled'
import { LogoWrapper, CompanyLogo } from '../shared/CompanyLogo.styled'
import { RowContainer } from '../shared/RowContainer.styled'

export default function HomeCards({ item }) {
  return (
    <StyledCard>
      <LogoWrapper style={{ backgroundColor: item.logoBackground }}>
        <CompanyLogo src={item.logo} alt={item.company} />
      </LogoWrapper>
      <RowContainer>
        <InfoSpan>{item.postedAt}</InfoSpan>
        <ContentBreak />
        <InfoSpan>{item.contract}</InfoSpan>
      </RowContainer>
      <Position>{item.position}</Position>
      <InfoSpan>{item.company}</InfoSpan>
      <Location>{item.location}</Location>
    </StyledCard>
  )
}
