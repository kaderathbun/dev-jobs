import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext.context'

// styles
import { Container } from '../../components/shared/Container.styled'
import { CardSection, StyledLink } from './Home.styled'
import { HomeButton } from '../../components/shared/Button.styled'
import { StyledMain } from '../../components/shared/StyledMain.styled'

// components
import Filter from '../../components/Filter/Filter.component'
import HomeCards from '../../components/HomeCards/HomeCards.component'
import Modal from '../../components/Modal/Modal.component'

export default function Home() {
  document.title = 'Dev Jobs | Home'
  const { data } = useContext(DataContext)
  const imagePerLoad = 12
  const [next, setNext] = useState(imagePerLoad)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleLoadMore = () => {
    setNext(next + imagePerLoad)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [isFullTime, setIsFullTime] = useState(false)

  return (
    <>
      <StyledMain>
        <Container>
          <Filter
            onSubmit={handleSubmit}
            setIsOpen={setIsOpen}
            setSearch={setSearch}
            search={search}
            location={location}
            setLocation={setLocation}
            isFullTIme={isFullTime}
            setIsFullTime={setIsFullTime}
          />
          <CardSection>
            {data
              ?.filter((item) => {
                return search === ''
                  ? item
                  : item.position.toLowerCase().includes(search)
              })
              ?.filter((item) => {
                return location === ''
                  ? item
                  : item.location.toLowerCase().includes(location)
              })
              ?.filter((item) => {
                return isFullTime === false
                  ? item
                  : item.contract.includes('Full Time')
              })
              .map((item) => {
                return (
                  <StyledLink key={item.id} to={`/details/${item.id}`}>
                    <HomeCards item={item} />
                  </StyledLink>
                )
              })
              ?.slice(0, next)}
            {next < data.length ? (
              <HomeButton onClick={handleLoadMore}>Load More</HomeButton>
            ) : null}
          </CardSection>
        </Container>
      </StyledMain>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        location={location}
        setLocation={setLocation}
        isFullTime={isFullTime}
        setIsFullTime={setIsFullTime}
      />
    </>
  )
}

// mq where modal closes at width
