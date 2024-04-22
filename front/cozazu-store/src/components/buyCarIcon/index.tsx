import { RiShoppingBagLine } from "@remixicon/react"
import Link from "next/link"

const BuyCarIcon: React.FC = (): React.ReactElement => {
  return (
    <Link href="/cart">
        <div>
        <RiShoppingBagLine color="white" size={25} />
        </div>
    </Link>    
  )
}

export default BuyCarIcon