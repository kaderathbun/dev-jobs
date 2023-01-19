import React from 'react'
import ReactDOM from 'react-dom'

// styles
import {
  StyledModal,
  ModalContainer,
  ModalForm,
  ModalLabel,
  LocationIcon,
  ModalLocationInput,
  ModalCheckInput,
  ModalCheckIcon,
  ButtonWrapper,
} from './Modal.styled'
import { HomeButton } from '../shared/Button.styled'

// assets
import locationIcon from '../../assets/desktop/icon-location.svg'

export default function Modal({
  isOpen,
  setIsOpen,
  location,
  setLocation,
  isFullTime,
  setIsFullTime,
}) {
  if (!isOpen) {
    document.body.style.overflow = 'visible'
    return null
  } else {
    document.body.style.overflow = 'hidden'
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleSetLocation = (e) => {
    setLocation(e.target.value.toLowerCase())
  }
  const handleSetFullTime = (e) => {
    setIsFullTime(e.target.checked)
  }

  return ReactDOM.createPortal(
    <StyledModal onClick={() => setIsOpen(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalForm onSubmit={handleSubmit}>
          <ModalLabel>
            <LocationIcon src={locationIcon} />
            <ModalLocationInput
              type="text"
              placeholder="Filter by location..."
              onChange={handleSetLocation}
              value={location}
            />
          </ModalLabel>
          <ModalLabel>
            Full Time Only
            <ModalCheckInput
              type="checkbox"
              checked={isFullTime}
              onChange={handleSetFullTime}
              value={isFullTime}
            />
            <ModalCheckIcon />
          </ModalLabel>
        </ModalForm>
        <ButtonWrapper>
          <HomeButton onClick={() => setIsOpen(false)} secondary>
            View Results
          </HomeButton>
        </ButtonWrapper>
      </ModalContainer>
    </StyledModal>,
    document.getElementById('portal')
  )
}
