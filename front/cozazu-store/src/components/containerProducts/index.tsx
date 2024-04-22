import CardProduct from "../cardProducts"
import {GetDataProducts} from "../../utils/getData"

const ContainerProducts = async (): Promise<React.ReactElement> => {
    const products = await GetDataProducts()
    return (
        
        <div className="flex flex-wrap justify-center gap-4 md:w-3/4 m-auto py-4 ">
            {products.map((product) => (
                <CardProduct key={product.id} {...product} />
            ))}
        </div>    )
}

export default ContainerProducts