import { ICategory } from '@/app/types'
import { CategoryContainer, Front, Back } from './Category.styles'

const Category = ({ name, image }: ICategory): React.ReactElement => {
  return (
    <CategoryContainer>
      <Front $image={image} >{""}</Front>
      <Back>{name}</Back>
    </CategoryContainer>
  )
}

export default Category