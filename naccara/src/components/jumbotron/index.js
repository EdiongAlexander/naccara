import React from "react";
import { BackGround, ProductImage } from "../../images";

const Jumbotron = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${BackGround})`,
    };
    return (
        <div className={``}
            style={backgroundImageStyle}
        >
            <div className="flex sm:flex-row flex-col items-center justify-between bg-opacity-[80%] bg-[#E4E9FB] w-full sm:px-20 px-6 py-8">
                <div className="sm:w-[40%] w-full">
                    <p className="sm:text-[40px] text-[20px] leading-[32px] sm:leading-[64px] text-[#001B79]">Neccara: Beyond Beautiful, It's Science-Backed Melanin Magic</p>
                    <p className="text-[#4E4E4E] sm:text-[18px] sm:leading-[25.2px] text-[10px]">Luxury meets science in skincare formulated specifically for
                        the brilliance of deeper skin tones. We don't just address concerns,
                        we celebrate your complexion with powerful,
                        meticulously curated ingredients that work wonders.
                    </p>

                    <button className="mt-8 bg-[#001B79] text-[#ffffff] uppercase w-full sm:w-[295px] h-[50px] rounded">shop now</button>
                </div>

                <div className="sm:h-[599px] sm:w-[539px] hidden sm:block">
                    <img src={ProductImage} alt="product" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron