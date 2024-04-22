import { categoriesToPreLoad } from "@/utils/CategoriesTopreload"
import CardCategory from "../cardCategory"



const ContainerCategory = () => {
    return (
        <div className="flex   py-10  flex-wrap justify-center gap-4 md:w-3/4 m-auto  ">
            {categoriesToPreLoad.map((product) => (
                <CardCategory key={product.name} name={product.name} image={product.image} />
            ))}
        </div>
    )
}

export default ContainerCategory