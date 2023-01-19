import React from 'react'

// styles
import {
  StyledDetailsCard,
  CardHeadingWrapper,
  DetailsCardHeader,
  SectionHeading,
  UnorderedList,
  UnorderedListItem,
  OrderedList,
  OrderedListItem,
} from './DetailsCard.styled'
import {
  ContentBreak,
  InfoSpan,
  Position,
  Location,
  Description,
} from '../shared/CompanyInfo.styled'
import { RowContainer } from '../shared/RowContainer.styled'
import { ContentWrapper } from '../shared/ContentWrapper.styled'
import { DetailsButton } from '../shared/Button.styled'

export default function DetailsCard({ company }) {
  return (
    <StyledDetailsCard>
      <DetailsCardHeader>
        <CardHeadingWrapper>
          <RowContainer>
            <InfoSpan>{company.postedAt}</InfoSpan>
            <ContentBreak />
            <InfoSpan>{company.contract}</InfoSpan>
          </RowContainer>
          <Position>{company.position}</Position>
          <Location secondary>{company.location}</Location>
        </CardHeadingWrapper>
        <DetailsButton href={`${company.apply}`} target="_blank">
          Apply Now
        </DetailsButton>
      </DetailsCardHeader>
      <Description>{company.description}</Description>
      <ContentWrapper>
        <SectionHeading>Requirements</SectionHeading>
        <Description>{company.requirements.content}</Description>
        <UnorderedList>
          {company.requirements.items.map((item, idx) => {
            return <UnorderedListItem key={idx}>{item}</UnorderedListItem>
          })}
        </UnorderedList>
      </ContentWrapper>
      <ContentWrapper>
        <SectionHeading>What You Will Do</SectionHeading>
        <Description>{company.role.content}</Description>
        <OrderedList>
          {company.role.items.map((item, idx) => {
            return <OrderedListItem key={idx}>{item}</OrderedListItem>
          })}
        </OrderedList>
      </ContentWrapper>
    </StyledDetailsCard>
  )
}
