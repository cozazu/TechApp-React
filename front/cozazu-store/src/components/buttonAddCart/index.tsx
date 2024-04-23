"use client"

import { useLoginContext } from "@/components/loginContext";

const ButtonAddCart = ({id}: {id: number | undefined}) => {

    const {count, setCount} = useLoginContext();
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
        const totalproducts = cart.reduce(
            (acc: number, item: { id: number; quantity: number }) => {
              return acc + item.quantity;
            }, 0);
      
        setCount(totalproducts);
    }

    return (
        <button className="bg-slate-950 text-slate-50 w-full rounded-md  hover:bg-amber-500" id={String(id)} onClick={handleClick} >Add to Cart</button>
    )
}

export default ButtonAddCart;