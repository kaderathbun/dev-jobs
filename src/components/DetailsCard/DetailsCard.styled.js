import styled from 'styled-components'

export const StyledDetailsCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;
  top: 110px;
  width: 100%;
  padding: 35px 25px;
  background-color: ${(props) => props.theme.containers};
  border-radius: 7px;
  margin-bottom: 75px;

  @media (min-width: 768px) {
    padding: 45px 35px;
  }
`
export const DetailsCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr;
  }
`
export const CardHeadingWrapper = styled.div`
  grid-column: 1/2;
`
export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.font};
  margin: 10px 0;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
  list-style: none;
`
export const UnorderedListItem = styled.li`
  display: flex;
  gap: 25px;
  font-size: 1.6rem;
  line-height: 26px;
  color: ${(props) => props.theme.fontSub};

  &:before {
    content: '•';
    font-size: 3rem;
    font-weight: bold;
    color: rgb(87, 98, 224);
    display: inline-block;
    height: 100%;
  }
`
export const OrderedList = styled.ol`
  counter-reset: counter;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
  list-style: none;
`
export const OrderedListItem = styled.li`
  display: flex;
  gap: 25px;
  font-size: 1.6rem;
  line-height: 26px;
  color: ${(props) => props.theme.fontSub};

  &:before {
    counter-increment: counter;
    content: counter(counter);
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(87, 98, 224);
    display: inline-block;
    height: 100%;
  }
`
