import { IProduct } from "@/app/types"
import { productsToPreLoad } from "./ProductsTopreload"

export const GetDataProducts = async (): Promise<IProduct[]> => {
    const res = await fetch("http://localhost:3001/products")
    const data: IProduct[] = await res.json()
    const dataImages: IProduct[] = data.map((product: IProduct) => {
        return {
            ...product,
            image: productsToPreLoad.find((productToPreLoad) => productToPreLoad.name === product.name)?.image || product.image
        }
    }) 
    return dataImages
}

export const getProductById = async (id: number): Promise<IProduct | undefined> => {
    const res = await GetDataProducts();
    const data = res.find((product) => product.id === id)
    return data
}
