import React from "react";
import { BigInsta, Buj, CleanWater, Image1, Image2, Image3, Message, NewToSkincare, Product2, Punch, Science, StartSkincare, Yahoo } from "../../images";

const Main = () => {
    const NewToSkincareImageStyle = {
        backgroundImage: `url(${NewToSkincare})`,
    };

    const StartkincareImageStyle = {
        backgroundImage: `url(${StartSkincare})`,
    };
    return (
        <div className="my-12 sm:px-20 px-6">
            <div className="flex justify-between sm:flex-row flex-col gap-6">
                <div className="flex items-start gap-4 w-full sm:border-r-[0.5px]">
                    <img src={CleanWater} alt="clean-water" />
                    <div className="">
                        <p className="sm:text-[18px] sm:leading-[28.8px] text-[12px] uppercase">Formulated by expert dermatologist</p>
                        <p className="font-[300] text-[10px] sm:text-[16px] sm:leading-[25.6px]">Products tested and proven</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 w-full sm:border-r-[0.5px]">
                    <img src={Science} alt="science" />
                    <div className="">
                        <p className="sm:text-[18px] sm:leading-[28.8px] text-[12px] uppercase"> Backed by Science</p>
                        <p className="font-[300] text-[10px] sm:text-[16px] sm:leading-[25.6px]">This product is formulated in our labs</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 w-full">
                    <img src={Message} alt="message" />
                    <div className="">
                        <p className="sm:text-[18px] sm:leading-[28.8px] text-[12px] uppercase">Expert Recommendation Advised</p>
                        <p className="font-[300] text-[10px] sm:text-[16px] sm:leading-[25.6px]">Speak to our licensed Esthetician</p>
                    </div>
                </div>

            </div>

            <div className="w-[80%] mx-auto mt-12 mb-10">
                <div>
                    <div className="text-center sm:text-[40px] text-[20px] font-medium mb-8">
                        Shop Neccara Products
                    </div>
                    <div className="sm:w-100 flex sm:flex-row flex-col justify-between">
                        <div className="sm:w-[60%] w-full bg-[#ffffff]">
                            <img src={Product2} alt="icon" className="mx-auto" />
                        </div>
                        <div className="sm:w-[40%] w-full">
                            <div className="mt-8">
                                <p className="font-medium text-[24px]">MelanoClear</p>
                                <p className="my-4 text-[16px] text-[#4E4E4E] font-[300px]">
                                    This targeted treatment clarifies your complexion by
                                    addressing hyperpigmentation, sun spots, and dark spots, while
                                    respecting your skin's natural melanin production for a
                                    radiant, even-toned result.
                                </p>
                                <p className="text-[20px] font-medium">₦ 110,000</p>
                                <button className="mt-8 bg-[#001B79] text-[#ffffff] uppercase w-[295px] h-[50px] rounded-[4px]">
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-20">
                <div>
                    <div className="w-full flex justify-between gap-8 sm:flex-row flex-col">
                        <div
                            className="sm:w-[50%] w-full bg-[#ffffff] p-4 flex flex-col justify-between min-h-[570px] bg-center bg-cover bg-no-repeat px-16"
                            style={NewToSkincareImageStyle}
                        >
                            <div className="py-[32px] text-center">
                                <p className="font-medium sm:text-[40px] text-[20px] sm:leading-[64px] text-[#f1f1f1] mt-[200px]">New to Skincare?</p>
                                <p className="my-4 sm:text-[16px] text-[10px] sm:leading-[22.4px] text-[#f1f1f1] font-[400px]">
                                    Book A consultation with one of our Esthetician
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <button className="text-[#001B79] bg-[#ffffff] uppercase w-[295px] h-[50px] rounded-[4px] text-[16px]">
                                    BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                        <div
                            className="sm:w-[50%] w-full bg-[#ffffff] p-4 flex flex-col justify-between min-h-[570px] bg-center bg-cover bg-no-repeat px-16"
                            style={StartkincareImageStyle}
                        >
                            <div className="py-[32px] text-center">
                                <p className="font-medium sm:text-[40px] text-[20px] sm:leading-[64px] text-[#001B79] mt-[200px]">Not Sure Where to Start Your Skincare Journey ?</p>
                                <p className="my-4 sm:text-[16px] text-[10px] leading-[22.4px] text-[#4e4e4e] font-[400px]">
                                    Download our beginners skincare guide
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <button className="mt-8 bg-[#001B79] text-[#ffffff] uppercase w-[295px] h-[50px] rounded-[4px]">
                                    BOOK APPOINTMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="font-[500] sm:text-[40px] text-[20px]  sm:leading-[64px] mt-20 mb-10 text-center">Follow Us @Neccara</p>

            <div className="flex sm:flex-row flex-col gap-4 my-4 justify-between items-start">
                <div className="sm:w-1/4 w-full min-h-[308px] border flex flex-col py-6 justify-between items-center bg-[#E4E9FB] px-8">
                    <p className="font-[500] text-[24px] leading-[33.6px] text-center">Follow Us @Neccara</p>
                    <img src={BigInsta} alt="instagram" className="w-[67px] h-[67px]" />

                    <p>@neccara</p>

                    <button className="mt-8 bg-[#001B79] text-[#ffffff] uppercase w-full px-12 h-[50px] rounded">
                        Follow Us
                    </button>
                </div>

                <div className="sm:w-1/4 w-full min-h-[308px]">
                    <img src={Image1} className="h-full" />
                </div>
                <div className="sm:w-1/4 w-full min-h-[308px]">
                    <img src={Image2} className="h-full" />
                </div>
                <div className="sm:w-1/4 w-full min-h-[308px]">
                    <img src={Image3} className="h-full" />
                </div>

            </div>

            <div>
                <p className="font-[500] sm:text-[40px] text-[20px] sm:leading-[64px] mt-20 mb-12 text-center">
                    Hear What Our Customers Say
                </p>

                <div className="">
                    <div className="flex sm:flex-row flex-col justify-between gap-8">
                        <div className="sm:w-1/4 h-fit sm:min-h-[296px] p-6 border rounded border-[0.5px] border-[#001B79]">
                            <p className="font-[300] leading-[22.4px] text-[#4E4E4E]">
                                "Neccara's products have transformed my skincare routine! I've
                                struggled with dull skin for years, but after using their serums
                                and moisturizers, my complexion is brighter and more radiant than
                                ever. I can't recommend them enough!"
                            </p>

                            <div className="flex items-center mt-4 gap-[9px] items-center text-[18px] text-[#101010]">
                                <img
                                    src={NewToSkincare}
                                    className="w-[56px] h-[56px] rounded-full"
                                />
                                <p className="font-[500] text-[18px] leading-[28.84px] uppercase">Kowthar. A</p>
                            </div>
                        </div>

                        <div className="sm:w-1/4 h-fit sm:min-h-[296px] p-6 border rounded border-[0.5px] border-[#001B79]">
                            <p className="font-[300] leading-[22.4px] text-[#4E4E4E]">
                                "I'm amazed by the results I've seen with Neccara. Their commitment to natural ingredients truly shines through in the quality of their products.
                                My skin feels nourished, hydrated, and looks noticeably healthier. Definitely a game-changer for me!"
                            </p>

                            <div className="flex items-center mt-4 gap-[9px] items-center text-[18px] text-[#101010]">
                                <img
                                    src={NewToSkincare}
                                    className="w-[56px] h-[56px] rounded-full"
                                />
                                <p className="font-[500] text-[18px] leading-[28.84px] uppercase">Mike. b</p>
                            </div>
                        </div>

                        <div className="sm:w-1/4 h-fit sm:min-h-[296px] p-6 border rounded border-[0.5px] border-[#001B79]">
                            <p className="font-[300] leading-[22.4px] text-[#4E4E4E]">
                                "I've tried countless skincare brands, but Neccara is on a whole other level. The texture, the scent, the results – everything about their products screams luxury.
                                My skin feels pampered and rejuvenated, and I've finally found my holy grail skincare line. Thank you, Neccara!"
                            </p>

                            <div className="flex items-center mt-4 gap-[9px] items-center text-[18px] text-[#101010]">
                                <img
                                    src={NewToSkincare}
                                    className="w-[56px] h-[56px] rounded-full"
                                />
                                <p className="font-[500] text-[18px] leading-[28.84px] uppercase">Miller. w</p>
                            </div>
                        </div>

                        <div className="sm:w-1/4 h-fit sm:min-h-[296px] p-6 border rounded border-[0.5px] border-[#001B79]">
                            <p className="font-[300] leading-[22.4px] text-[#4E4E4E]">
                                "I've tried countless skincare brands, but Neccara is on a whole other level. The texture, the scent, the results – everything about their products screams luxury.
                                My skin feels pampered and rejuvenated, and I've finally found my holy grail skincare line. Thank you, Neccara!"
                            </p>

                            <div className="flex items-center mt-4 gap-[9px] items-center text-[18px] text-[#101010]">
                                <img
                                    src={NewToSkincare}
                                    className="w-[56px] h-[56px] rounded-full"
                                />
                                <p className="font-[500] text-[18px] leading-[28.84px] uppercase">Miller. w</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] flex justify-center">
                        <button className="mt-8 text-[#001B79] bg-[#ffffff] mx-auto uppercase w-[295px] h-[50px] rounded  border border-[#001B79]">
                            LEAVE A REVIEW
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20 mb-10 w-[80%] mx-auto">
                <div>
                    <div className="text-center sm:text-[40px] text-[20px] font-medium mb-8">
                        Featured In
                    </div>
                    <div className="w-100 flex justify-between">

                        <div>
                            <img src={Punch} alt="icon" />
                        </div>
                        <div>
                            <img src={Buj} alt="icon" />
                        </div>
                        <div>
                            <img src={Yahoo} alt="icon" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main