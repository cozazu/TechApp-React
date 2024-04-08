import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: ${(props) => props.theme.colors.border};
    outline: none;
    font-size: 16px;
    `

const ButtonSearch = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.terciary};
        color: #000;
    }
`

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 300px;
`

function SearchBar () {
    return (
        <SearchBarContainer>
            <Input type="text" placeholder="Search"/>
            <ButtonSearch type="submit">Search</ButtonSearch>
        </SearchBarContainer>
    );
}

export default SearchBar;