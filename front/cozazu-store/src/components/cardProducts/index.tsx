"use client"

import Image from "next/image"
import { IProduct } from "@/app/types"
import Link from "next/link";

const CardProduct = ({id, name, image, price, description, stock, categoryId}: IProduct): React.ReactElement => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { 
        const id = Number(e.currentTarget.id);
        const cart: {id: number, quantity: number}[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex((item) => item.id === id);
        if (index !== -1) {
            cart[index].quantity++;
        }
        else {
            cart.push({id, quantity: 1});
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart)
        e.preventDefault();
        e.stopPropagation();
        console.log(cart)
    }

    return (
        <Link href={`/products/${id}`} key={id}>
            <div className="w-64 border-2 border-slate-950 flex flex-col content-between items-center p-2 rounded-md hover:scale-105 duration-300">
                <h1>{name}</h1>
                <img className="h-48 rounded-md" src={image} alt={name} />
                <p>{description.slice(0, 50)}...</p>
                <p>$ {price}</p>
                <button className="bg-slate-950 text-slate-50 w-full rounded-md  hover:bg-amber-500" id={String(id)} onClick={handleClick} >Add to Cart</button>
            </div>
        </Link>  
    )
}

export default CardProduct