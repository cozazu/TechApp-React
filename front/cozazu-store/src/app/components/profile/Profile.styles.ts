import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F0A500;
  border-radius: 50%;
  padding: 10px;
`

const Image = styled.img`
  width: 30px;
  height: auto;
`

export {
  ProfileContainer,
  Image
}