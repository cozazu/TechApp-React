import { GetDataProducts } from "../../../utils/getData"
import Link from "next/link"

const DetailProduct = async ({ params }: { params: { id: string } }) => {
    const products = await GetDataProducts()
    const product = products.find((product) => product.id === parseInt(params.id))

    return (
        <div className="flex items-start justify-center space-x-6">
            <div className="max-w-lg">
                <img src={product?.image} alt={product?.name} className="rounded-lg border border-gray-300" />
            </div>
            <div className="max-w-md mt-4">
                <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
                <p className="mb-4">{product?.description}</p>
                <p className="text-xl font-bold mb-2">${product?.price}</p>
                <p className="mb-2">Stock: {product?.stock}</p>
                <p className="mb-2">Category: {product?.categoryId}</p>
                
            </div>
        </div>
    )
}

export default DetailProduct
