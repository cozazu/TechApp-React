import { CartContainer, Image } from './Cart.styles'
import bolsaDeLaCompra from './bolsaDeLaCompra.png'

const Cart: React.FC = (): React.ReactElement => {
  return (
    <CartContainer>
      <Image
        src="bolsaDeLaCompra.png"
        alt="Cart"
      />
    </CartContainer>
  )
}

export default Cart;