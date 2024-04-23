"use client"

import { useLoginContext } from "../loginContext"
import { RiShoppingBagLine } from "@remixicon/react"
import Link from "next/link"

const BuyCarIcon: React.FC = (): React.ReactElement => {
  const { count } = useLoginContext()
  return (
    <Link href="/cart">
        <div className="flex justify-center items-center gap-2">
          <div>
            {count > 0 ? <p className="text-amber-500 animate-bounce">{count}</p> : <p className="text-amber-500">{count}</p>}            
          </div>
          <RiShoppingBagLine color="white" size={25} />
        </div>
    </Link>    
  )
}

export default BuyCarIcon