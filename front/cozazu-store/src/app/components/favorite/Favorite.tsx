import { FavoriteContainer, Image } from './Favorite.styles'
import estrellaFavoritos from './estrellaFavoritos.png'
const Favorite: React.FC = (): React.ReactElement => {
  return (
    <FavoriteContainer>
      <Image
        src="estrellaFavoritos.png"
        alt="Favorite"
      />
    </FavoriteContainer>
  )
}

export default Favorite