import styled from 'styled-components'

const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #616161;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border: 1px solid #F0A500;
  }
`

const ButtonSearch = styled.button`
  background-color: #F0A500;
  width: 100px;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  &:hover {
    background-color: #CF7500;
    transition: 0.5s;
  }
`

const SearchBarContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  @media (min-width: 840px) {
    width: 30%;
  }
`

export {
  Input,
  ButtonSearch,
  SearchBarContainer
}