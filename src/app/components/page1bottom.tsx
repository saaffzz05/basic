'use client'


import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function Bottom() {
    useGSAP(function(){
        gsap.to('#banner img',{
            rotate:360,
            duration:3,
            repeat:-1,
            ease:"linear",
          
    
        })
    })
    return (
        <div className="absolute bottom-0 flex ml-[-50px] sm:ml-[-70px] md:ml-[-100px] items-end justify-between p-8 sm:p-16 md:p-24 w-full text-lg sm:text-xl">
        <div className="relative bottom-[-40px] sm:bottom-[-50px] md:bottom-[-60px]">
            <h2 className="uppercase font-[anzo2] text-sm sm:text-base md:text-lg">
                Engaging Experiences | Code Crafted
            </h2>
            <h3 className="uppercase font-[anzo2] text-gray-400 text-xs sm:text-sm md:text-base">
                Dynamic Designs
            </h3>
        </div>
        <div id="banner" className=" ">
            <img src="https://cdn-icons-png.flaticon.com/128/11468/11468054.png" className="h-12 sm:h-16 md:h-20 mb-[10px] sm:mb-[15px] md:mb-[20px]" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/2572/2572691.png" className="h-12 sm:h-16 md:h-20" alt="" />
        </div>
    </div>
    
     
    );
  }