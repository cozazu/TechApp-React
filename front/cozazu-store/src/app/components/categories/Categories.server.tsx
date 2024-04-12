import CategoriesClient from './Categories.client'
import { ICategory } from '@/app/types'

interface CategoriesServerProps {
  categories: ICategory[]
}

const CategoriesServer: React.FC<CategoriesServerProps> = async ({categories}: CategoriesServerProps): Promise<React.ReactElement> => {

  return <CategoriesClient categories={categories} />
}

export default CategoriesServer;