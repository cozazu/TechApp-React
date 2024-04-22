import Image from "next/image"

const CardCategory = ({name, image}: {name: string, image: string}): React.ReactElement => {
    return (
        <div className="flex  flex-col  p-1 rounded-lg w-28 hover:scale-125 duration-300 ">
            <div className="p-2 border-2 rounded-lg flex-col">
                <img className="h-12 rounded-md mx-auto " src={image} alt={name} />
            </div>
            <h1 className="text-sm text-center">{name}</h1>
        </div>
    )
}

export default CardCategory