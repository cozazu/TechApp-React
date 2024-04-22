import BuyCarIcon from "../buyCarIcon"
import { NavBarRight } from "../loginLogout"
import { MenuBurger } from "../menuBurguer"
import StatusMenuProvider from "../menuContext"
import { NavBarLeft } from "../navbar"
import Profile from "../profile"
import SearchBar from "../searchBar"
import { ToggleMenu } from "../toggleMenu"


const Header = () => {
    return (
        <StatusMenuProvider>
            <div className="bg-slate-950 flex md:h-32 h-24 sticky w-full">
                <div className="flex justify-center items-center mx-auto">
                    <img className="h-24 w-24" src="/logoTiendaTech.png" alt="logo tienda" />
                    <h1 className="text-lg text-white font-bold">T-INSHOP</h1>
                </div>
                <div className="md:w-3/4  md:m-auto mx-4 flex-col content-around h-full">
                    <div className="flex justify-between items-center">
                        <SearchBar />
                        <div className="flex justify-center gap-4 items-center">
                            <MenuBurger />
                            <BuyCarIcon />
                            <Profile />                        
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <NavBarLeft />
                        <NavBarRight />
                    </div>                    
                </div>
            </div>
            <ToggleMenu />
        </StatusMenuProvider>
    )
}

export default Header