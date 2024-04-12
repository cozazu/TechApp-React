import { FavoriteContainer, Image } from './Favorite.styles'

const Favorite: React.FC = (): React.ReactElement => {
  return (
    <FavoriteContainer>
      <Image
        src="	https://cdn-icons-png.flaticon.com/512/130/130193.png"
        alt="Favorite"
      />
    </FavoriteContainer>
  )
}

export default Favorite