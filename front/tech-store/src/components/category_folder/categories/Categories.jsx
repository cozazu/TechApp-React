import styled from "styled-components";
import CategoryList from "../category_list/CategoryList";

const CategoriesListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

const CategoryContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
`

function Categories () {
    return (
        <CategoryContainer>
            <CategoryList />
        </CategoryContainer>
    );
}

export default Categories;