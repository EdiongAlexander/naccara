import React from "react";
import { AccreditedBusiness, BackGround, InstaIcon, Logo, MadeInNigeria, TweeterIcon, YoutubeIcon } from "../../images";

const Footer = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${BackGround})`,
    };

    return (
        <div style={backgroundImageStyle}>
            <div className="bg-opacity-[80%] bg-[#E4E9FB] py-12">
                <div className="flex justify-center mx-auto gap-4 sm:px-20 px-6 sm:w-full w-[70%]">
                    <img src={Logo} alt="logo" />
                    <img src={MadeInNigeria} alt="made in nigeria" />
                </div>

                <div className="flex sm:flex-row flex-col gap-4 justify-between pt-10 pb-12 text-[16px] leading-[22.4px] text-[#101010] font-[300] border-b-[0.5px] border-[#A4A4A4] px-6 sm:px-20" >
                    <div>
                        <ul className="flex flex-col gap-4">
                            <p className="font-[500]">HELP</p>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Find A Store Around Me</a></li>
                            <li><a href="#">Find A Professional</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-4">
                            <p className="text-[#101010] font-[500] text-[16px] leading-[22.4px]">COMPANY</p>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Become A Distributor</a></li>
                            <li><a href="#">Become An Affiliate</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-4">
                            <p className="text-[#101010] font-[500] text-[16px] leading-[22.4px]">LOCATION</p>
                            <li><a href="#">+234 809 888 9882 </a></li>
                            <li><a href="#">35A Kwame Nkrumah Crescent Asokoro Abuja</a></li>
                            <li><img src={AccreditedBusiness} alt="accredited" /></li>
                            <li className="font-[500] text-[16px] leading-[23.76px]">Trusted Business</li>
                        </ul>
                    </div>
                </div>


                <div className="text-center py-8 mx-auto sm:w-[468px] w-[60%]">
                    <p className="font-[500] text-[#101010] text-[24px] leading-[30.24px] pb-8">Subscribe to our Newsletter</p>
                    <p className="text-[#4E4E4E] text-[16px] leading-[26.56px] pb-8">Get the latest about Neccara, our skincare tips and exciting news- straight into your inbox.</p>

                    <form action="" className="pb-8">
                        <input type="text" placeholder="Enter your email address" className="text-[#BABABA] font-[500] w-[60%] h-[50px] px-4 border border-[1px] border-[#676767] focus:outline-none rounded"/>
                        <button className="bg-[#001B79] text-[#ffffff] w-[40%] h-[49px] rounded -ml-[2px]">Subscribe</button>
                    </form>

                    <div className="flex justify-center gap-8">
                        <div className="w-[39px] h-[39px] rounded-full bg-[#FFF5E5] flex items-center justify-center">
                            <a href="instagram.com">
                                <img src={InstaIcon} alt="instagram" className="w-[19px]"/>
                            </a>
                        </div>
                        <div className="w-[39px] h-[39px] rounded-full bg-[#FFF5E5] flex items-center justify-center">
                            <a href="twitter.com">
                                <img src={TweeterIcon} alt="twittet" className="w-[19px]"/>
                            </a>
                        </div>
                        <div className="w-[39px] h-[39px] rounded-full bg-[#FFF5E5] flex items-center justify-center">
                            <a href="youtube.com">
                                <img src={YoutubeIcon} alt="youtube" className="w-[19px]"/>
                            </a>
                        </div>
                    </div>

                </div>
                    
                    <p className="mt-8 font-[300] text-[##4E4E4E] text-center">© 2024 Neccara. A Product of Venus Skin Health Limited. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer