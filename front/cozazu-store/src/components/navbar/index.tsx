import { RiHome6Fill } from "@remixicon/react";
import Link from "next/link";

const itemsNavBar = ["home", "about", "products", "contact"];

export const NavBarLeft: React.FC = (): React.ReactElement => {
    return (
      <nav className="w-3/4">
        <ul className="md:flex justify-center gap-12 hidden text-slate-50">
          {itemsNavBar.map((item) => (
            <Link href={`/${item}`} key={item}>
              <li className="flex" key={item}>{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
    );
};