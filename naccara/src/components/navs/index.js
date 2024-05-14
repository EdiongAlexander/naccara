import React from "react";
import { Logo, NigerianFlag, SearchIcon, ShoppingBag, UserIcon, WhatsAppIcon } from "../../images";

const TopNav = () => {
    return (
        <div className="">
            <nav className="sm:px-20 px-6 pt-8 pb-2 flex justify-between items-center">
                <div className="w-1/3 justify-start sm:block hidden">
                    <div className="w-[41px]">
                        <select>
                            <option value="nigeria"> &#127475; </option>
                        </select>
                    </div>
                </div>

                <div className="w-1/3 flex justify-center">
                    <div className="w-[264px] flex justify-center">
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                <div className="flex w-1/3 justify-end">
                    <div className="w-[227px] flex justify-between items-center">
                        <div className="h-6 flex items-center px-1 border-r-[0.5px] border-[#4E4E4E]">
                            <img src={SearchIcon} alt="search icon" className="h-6 w-6" />
                        </div>

                        <div className="h-6 flex items-center px-1 border-r-[0.5px] border-[#4E4E4E]">
                            <img src={UserIcon} alt="user icon" />
                        </div>

                        <div className="flex gap-3 text-[#101010] font-normal">
                            <img src={ShoppingBag} alt="cart icon" />
                            <p className="sm:block hidden">My cart</p>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="flex w-full px-6 sm:px-20 py-6 items-center justify-between">
                <div></div>
                <div className="flex gap-4 sm:text-[16px] text-[8px]">
                    <p className="uppercase">shop</p>
                    <p className="uppercase">our brand</p>
                    <p className="uppercase">blog</p>
                    <p className="uppercase">contact us</p>
                </div>

                <div>
                    <img src={WhatsAppIcon} alt="whatsapp-icon" />
                </div>
            </nav>

            <nav className="flex items-center justify-center bg-[#001B79] h-[42px]">
                <p className="text-[#ffffff] text-[18px] leading-[21.6px]">Unveil Confidence</p>
            </nav>
        </div>
    )
}

export default TopNav