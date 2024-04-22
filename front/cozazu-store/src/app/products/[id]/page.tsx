import {GetDataProducts} from "../../../utils/getData"
import Link from "next/link"

const DetailProduct = async ({params}: {params: {id: string}}) => {
    const products = await GetDataProducts()
    const product = products.find((product) => product.id === parseInt(params.id))

    return (
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.image} alt={product?.name} />
            <p>{product?.description}</p>
            <p>${product?.price}</p>
            <p>Stock: {product?.stock}</p>
            <p>Category: {product?.categoryId}</p>        
        </div>
    )
}

export default DetailProduct