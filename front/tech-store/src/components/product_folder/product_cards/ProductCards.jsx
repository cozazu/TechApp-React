import styled from "styled-components";
import PropType from "prop-types";
import ProductCard from "../product_card/ProductCard";

const ProductCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`
function ProductCards ({products}) {
    return (
        <ProductCardsContainer>
            {products.map((product) => (
                <ProductCard key={product.name}{...product} />            
            ))}
        </ProductCardsContainer>
    );
}

ProductCards.propTypes = {
    products: PropType.arrayOf(
        PropType.shape({
            name: PropType.string.isRequired,
            price: PropType.number.isRequired,
            description: PropType.string.isRequired,
            image: PropType.string.isRequired,
            categoryId: PropType.number.isRequired,
            stock: PropType.number.isRequired
        })
    ).isRequired,
}

export default ProductCards;