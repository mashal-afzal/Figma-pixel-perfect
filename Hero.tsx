import Image from "next/image"

export default function Hero(){
    return(
        <div className="relative flex w-[1440px] h-[704px] bg-[#FFFFFF]">
            <div className="w-[1280px] h-[584px] relative top-[60px] left-20 flex bg-[#2A254B]">
                <div className="w-[513px] h-[187px] relative flex flex-col top-[60px] left-[60px] gap-[41px]">
                    <div className=" w-[513px] h-[90px]">
                        <h2 className="font-[Clash Display] font-normal text-[32px] leading-[44.8px] text-[#FFFFFF]"> The furniture brand for <br/> the future, with timeless designs</h2>
                    </div>
                    <div className="w-[170px] h-[56px] flex items-center justify-center rounded-md p-4 opacity-100 bg-[#F9F9F926]">
                    <div className="font-[Satoshi] font-medium text-base leading-6 text-[#FFFFFF]">
                        View collection
                    </div>
                    </div>
                </div>
            
            <div className="w-[602px] h-[81px] absolute top-[443px] left-[60px]">
            <p className="font-[Satoshi-Medium] font-normal text-lg leading-[27px] text-[#FFFFFF]">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand <br/>
           with nice fonts, tasteful colors and a beautiful way to display things digitally <br/>
             using modern web technologies.
            </p>
            </div>
            </div>
            <div className=" absolute right-0 top-[60px]  w-[520px] h-[584px]  overflow-hidden bg-cover bg-center">
            <Image src={"/Right Image.png"} alt="Background Image" width={520} height={584} className="object object-cover"/>
            </div>
            </div>)}
