import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function TopNav(){
    return(
        <div className="w-[1440px] h-[132px] bg-color-[#FFFFFF] relative sm-w-full sm-h-auto" >
            <div className="w-full h-full px-7 border-[1px] flex items-center justify-between bg-[#FFFFFF] relative sm:flex-wrap sm:justify-center">
                
            <div className="w-4 h-4 absolute top-[26px] left-7 bg-[#FFFFFF] sm:relative sm:top-2 sm:left-5">
                <Image src={"/Search.png"} alt="Search Bar" width={16} height={16} className="Object Contain"/>
                </div>
                <div className="w-[65px] h-[30px] absolute top-5 left-[687px] font-medium text-2xl text-[#22202E] font-[Clash Display] sm:relative sm:top-2 sm:left-auto sm:text-xl">
                Avion </div>

                <div className="absolute top-[26px] left-[1364px] w-4 h-4 bg-[ #FFFFFF] sm:relative sm:top-2 sm:left-auto">
                <Image src={"/Shopping--cart.png"} alt="Shopping cart" width={16} height={16}/> </div>

                    <div className="w-4 h-4 absolute top-[26px] left-[1396px] bg-[#FFFFFF] sm:relative sm:top-2 sm:left-auto">
                        <Image src={"/User--avatar.png"} alt="Avatar" width={16} height={16}/> </div>
                </div>

                <div className="w-[1440px] h-[132px] bg-[#FFFFFF] flex items-center justify-center relative sm:w-full sm:h-auto sm:mt-4 ">
                    <div className="absolute top-[90px] left-[382px] flex gap-11 sm:relative sm:flex-wrap sm:gap-6 sm:justify-center ">
                        <p className="w-[70px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Plant pots</p>
                        <p className="w-[66px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Ceramics</p>
                        <p className="w-[44px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Tables</p>
                        <p className="w-[45] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Chairs</p>
                        <p className=" w-[64px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Crockery</p>
                        <p className="w-[71px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Tableware</p>
                        <p className="w-[51px] h-[22px] font-[Satoshi] font-normal text-base leading-[21.6px] text-[#726E8D] sm:text-sm">Cutlery</p>
                    </div>
                </div>
                    </div>
    )}

