import styled from "styled-components";

const itemsNavbar = [
    "Home",
    "About",
    "Products",
    "Contact",
];


const NavbarContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

const ItemNavbar = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.terciary};
    }
`
function Navbar() {
    return (
        <NavbarContainer>
            {itemsNavbar.map((item, index) => {
                return (
                    <ItemNavbar key={index}>
                        {item}
                    </ItemNavbar>
                )
            })}
        </NavbarContainer>
    )
}

export default Navbar;