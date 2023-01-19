import React from 'react'
import MediaQuery from 'react-responsive'

// syles
import {
  StyledFilter,
  InputLabel,
  SearchIcon,
  LocationIcon,
  Input,
  InputBtn,
  InputWrapper,
  FilterCheckIcon,
} from '../../components/Filter/Filter.styled'

// assets
import filterIcon from '../../assets/mobile/icon-filter.svg'
import searchIcon from '../../assets/desktop/icon-search.svg'
import locationIcon from '../../assets/desktop/icon-location.svg'

export default function Filter({
  setIsOpen,
  search,
  setSearch,
  location,
  setLocation,
  isFullTime,
  setIsFullTime,
}) {
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }
  const handleSetSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }
  const handleSetLocation = (e) => {
    setLocation(e.target.value.toLowerCase())
  }
  const handleSetFullTime = (e) => {
    setIsFullTime(e.target.checked)
  }

  return (
    <>
      {/* form layout at vp < 767 */}
      <MediaQuery maxWidth={767}>
        <StyledFilter>
          <InputLabel>
            <Input
              onChange={handleSetSearch}
              placeholder="Filter by Position..."
              value={search}
            />
            <InputBtn onClick={handleClick}>
              <img src={filterIcon} alt="Filter" />
            </InputBtn>
          </InputLabel>
        </StyledFilter>
      </MediaQuery>
      {/* form layout at vp > 768 */}
      <MediaQuery minWidth={768} maxWidth={1439}>
        <StyledFilter>
          <InputLabel>
            <SearchIcon src={searchIcon} alt="" />
            <Input
              onChange={handleSetSearch}
              placeholder="Filter by position..."
              value={search}
            />
          </InputLabel>
          <InputLabel>
            <LocationIcon src={locationIcon} alt="" />
            <Input
              onChange={handleSetLocation}
              placeholder="Filter by location..."
              value={location}
            />
          </InputLabel>
          <InputLabel>
            Full Time
            <InputWrapper>
              <Input
                type="checkbox"
                checked={isFullTime}
                onChange={handleSetFullTime}
                value={isFullTime}
              />
              <FilterCheckIcon />
            </InputWrapper>
          </InputLabel>
        </StyledFilter>
      </MediaQuery>
      {/* form layout at vp > 1440 */}
      <MediaQuery minWidth={1440}>
        <StyledFilter>
          <InputLabel>
            <SearchIcon src={searchIcon} alt="" />
            <Input
              onChange={handleSetSearch}
              placeholder="Filter by position..."
              value={search}
            />
          </InputLabel>
          <InputLabel>
            <LocationIcon src={locationIcon} alt="" />
            <Input
              onChange={handleSetLocation}
              placeholder="Filter by location..."
              value={location}
            />
          </InputLabel>
          <InputLabel>
            Full Time Only
            <InputWrapper>
              <Input
                type="checkbox"
                checked={isFullTime}
                onChange={handleSetFullTime}
                value={isFullTime}
              />
              <FilterCheckIcon />
            </InputWrapper>
          </InputLabel>
        </StyledFilter>
      </MediaQuery>
    </>
  )
}
