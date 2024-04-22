"use client"
import { useEffect, useState } from "react"
import { RiShoppingBagLine, RiUserSharedLine } from "@remixicon/react"
import {getProductById} from "@/utils/getData"
import { IProductcart } from "@/app/types"
import { createOrder } from "@/utils/postOrders";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Cart: React.FC = (): React.ReactElement => {
  const [product, setProduct] = useState<IProductcart[]>([]);
  const router = useRouter();

  useEffect(() => { 
    const arrayCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const products = arrayCart.map(async (item: {id: number, quantity: number}) => {
    const resultProduct = await getProductById(item.id)
    return {...resultProduct, quantity: item.quantity}}
    );
    Promise.all(products).then((data) => setProduct(data))
  },[])
  
  const handleClick = async () => {
    const arrayProducts = product.map((product) => {
      return product.id;
    });

    const response = await createOrder(arrayProducts, Cookies.get("token"));
    console.log(response);

    localStorage.removeItem("cart");
    router.push("/orders");
  };

  return (
    <div className="flex flex-col items-center"> 
      <div className="md:w-3/4 flex flex-wrap m-auto gap-2 justify-center ">
        {product.map((product) => (
          <div className="flex justify-center items-center gap-4 border-2 border-slate-950 md:w-1/3  my-2 rounded-md p-2" key={product.id}>
            <div className="md:w-1/3 border-2 flex justify-center items-center rounded-md">
              <img className="h-20 rounded-md " src={product.image} alt={product.name} />
            </div> 
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.quantity} units</p>
            
          </div>
        ))}      
      </div>
      <button className="flex bg-slate-950 text-slate-50 rounded-md my-4 py-4 px-8 gap-2 justify-center items-center hover:bg-amber-500" onClick={handleClick}><RiShoppingBagLine color="white" size={25} />BUY</button>
    </div>
  )
}  


export default Cart