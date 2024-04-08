import styled from "styled-components";
import { productsToPreLoad } from "../../../utils/preLoadData";
import ProductCards from "../../product_folder/product_cards/ProductCards";

const HomeContainer = styled.div`
    margin: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
 
function Home () {
    return (
        <HomeContainer>
            <ProductCards products={productsToPreLoad} />
        </HomeContainer>
    );
}

export default Home;