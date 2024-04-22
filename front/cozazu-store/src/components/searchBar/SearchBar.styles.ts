"use client"

import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  padding: 10px;  
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border: 1px solid #DDDDDD;
  }
`

const ButtonSearch = styled.button`
  background-color: #DDDDDD;
  width: 100px;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 1rem;
  outline: none;

  &:hover {
    background-color: #DDDDDD;
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
    width: 80%;
  }
`

export {
  Input,
  ButtonSearch,
  SearchBarContainer
}