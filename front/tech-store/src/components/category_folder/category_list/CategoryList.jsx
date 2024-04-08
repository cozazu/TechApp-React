import styled from "styled-components";
import Category from "../category/Category";
import {categoriesToPreLoad} from "../../../utils/preLoadData";

const CategororyListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

function CategoryList () {
    return (
        <CategororyListContainer>
            {categoriesToPreLoad.map((category, index) => {
                return (
                    <Category key={index} category={category} />
                );
            })}
        </CategororyListContainer>
    );
}

export default CategoryList;