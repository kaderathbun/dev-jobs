import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext.context'

// styles
import { StyledMain } from '../../components/shared/StyledMain.styled'
import { Container } from '../../components/shared/Container.styled'

// components
import HeroCard from '../../components/HeroCard/HeroCard.component'
import DetailsCard from '../../components/DetailsCard/DetailsCard.component'
import DetailsFooter from '../../components/DetailsFooter/DetailsFooter.component'

export default function Details() {
  const { data } = useContext(DataContext)
  const { itemId } = useParams()

  const company = data.find((company) => company.id.toString() === itemId)
  document.title = `Dev Jobs | Apply to ${company.company}`

  return (
    <>
      <StyledMain>
        <Container secondary>
          <HeroCard company={company} />
          <DetailsCard company={company} />
        </Container>
        <DetailsFooter company={company} />
      </StyledMain>
    </>
  )
}
