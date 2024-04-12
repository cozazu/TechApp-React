'use client'

import { CategoriesContainer } from './Categories.styles'
import Category from '../category/Category'
import { ICategory } from '@/app/types'

interface CategoriesClientProps {
  categories: ICategory[]
}

const CategoriesClient: React.FC<CategoriesClientProps> = ({ categories }: CategoriesClientProps): React.ReactElement => {
  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </CategoriesContainer>
  )
}

export default CategoriesClient