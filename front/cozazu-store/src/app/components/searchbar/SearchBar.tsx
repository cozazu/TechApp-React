import { SearchBarContainer, Input, ButtonSearch } from "./SearchBar.styles"

const SearchBar: React.FC = (): React.ReactElement => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="Search" />
      <ButtonSearch>Search</ButtonSearch>
    </SearchBarContainer>
  )
}

export default SearchBar;