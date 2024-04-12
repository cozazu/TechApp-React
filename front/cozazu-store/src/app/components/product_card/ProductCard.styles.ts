import styled from 'styled-components'

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #F0A500;
  background-color: #fdfefe;
  color: #424242;
  width: 200px;

  &:hover {
    box-shadow: 0 0 10px #CF7500;
    transition: 0.5s;
    transform: scale(1.05);
    cursor: pointer;
    scrollbar-arrow-color: #F0A500;;
  }
`

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

const ProductImageContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductTitle = styled.div`
  font-size: 110%;
  font-weight: bold;
  margin: 10px;
  color: #CF7500;
  text-align: center;

  &:hover {
    color: #424242;
    transform: scale(1.15);
    transition: 0.2s;
  }
`

const ProductPrice = styled.div`
  font-size: 150%;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`

const ProductCategory = styled.div`
  font-size: 20px;
  margin: 10px;
`

const ProductStock = styled.div`
  font-size: 20px;
  margin: 10px;
  color: #CF7500;
`

export {
  ProductCardContainer,
  ProductImage,
  ProductImageContainer,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductCategory,
  ProductStock
}