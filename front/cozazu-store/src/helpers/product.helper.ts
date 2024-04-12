import { IProduct } from '@/app/types'
import { productsToPreLoad } from '@/utils/preLoadData'

async function getProductsDB() {
  const res = await fetch('http://localhost:3001/products')
  const products: IProduct[] = await res.json()
  return products
}

async function getProducts() {
  const productsDB = await getProductsDB()
  const products = productsDB.map((product, index) => {
    return {
      ...product,
      image: productsToPreLoad[index].image,
    }
  })
  return products
}

async function getProductById(id: string) {
  const products = await getProducts();
  const product = products.find((product) => product.id.toString() === id)
  if(!product) throw new Error('Product not found')
  return product 
}

export { getProducts, getProductById }