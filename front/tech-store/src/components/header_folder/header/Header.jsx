import styled from "styled-components";
import Navbar from "../navbar/NavBar";
import SearchBar from "../searchbar/SearchBar";
import Categories from "../../category_folder/categories/Categories";
import Profile from "../profile/Profile";
import { useState } from "react";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
`

const ImageContainer = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`
const Image = styled.img`
    width: calc(100% - 20px);
    height: auto;
    margin: 10px;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MenuButton = styled.button`
    background: none;
    color: ${(props) => props.theme.colors.secondary};
    border: none;
    cursor: pointer;
    font-size: 32px;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
     display: none;
    }
`    
/* const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
` */

function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <HeaderContainer>
            <ImageContainer>
                <Image src="https://img.freepik.com/foto-gratis/campo-cesped-nubes_1112-621.jpg?w=900&t=st=1712425715~exp=1712426315~hmac=076cedf2722a452b7a19d03066448961cd99f5ffac3bfd228357c67f1ecc4f00" alt="img" />
                <Title>Tech-Store</Title>
            </ImageContainer>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
            </MenuButton>
            {(isMenuOpen || window.innerWidth >= 768) && (
                <Container>
                    <TopContainer>
                    <Navbar />
                    <SearchBar />
                    </TopContainer>
                    <BottomContainer>
                        <Categories />
                    </BottomContainer>
                </Container>
            )}    
            <ProfileContainer>
                <Profile />
            </ProfileContainer>   
        </HeaderContainer>
    );
}

export default Header;