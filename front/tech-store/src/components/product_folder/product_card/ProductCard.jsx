import styled from "styled-components"; 
import PropType from "prop-types";
import { categoriesToPreLoad } from "../../../utils/preLoadData";

const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.secundary};
    color: ${({theme}) => theme.colors.primary};
    width: 300px;
    margin: 10px;
    
    img {
        width: 100%;
        border-radius: 10px;
    }

    h2 {
        margin: 10px 0;
    }

    h3 {
        margin: 10px 0;
    }

    h4 {
        margin: 10px 0;
    }
`

function ProductCard({name, price, description, image, categoryId, stock}) {
    return (
        <ProductCardContainer>
            <img src={image} alt={name}/>
            <h2>{name}</h2>            
            <p>{description}</p>
            <h3>$ {price}</h3>
            <h3>{categoriesToPreLoad[categoryId].name}</h3>
            <h4>Disnopible: {stock}</h4>
        </ProductCardContainer>
    );
}

ProductCard.propTypes = {
        name: PropType.string.isRequired,
        price: PropType.number.isRequired,
        description: PropType.string.isRequired,
        image: PropType.string.isRequired,
        categoryId: PropType.number.isRequired,
        stock: PropType.number.isRequired
};

export default ProductCard;