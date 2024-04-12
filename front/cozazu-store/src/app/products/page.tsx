import ProductCards from '../components/product_cards'
import Categories from '../components/categories'
import { getProducts, getCategories } from '@/helpers'

async function ProductsPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className='mt-56'>
      <Categories categories={categories} />
      <ProductCards products={products} />
    </div>
  )
}

export default ProductsPage