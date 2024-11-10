'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/all';


const Page2=() => {
gsap.registerPlugin(ScrollTrigger)   
useGSAP(function(){
    gsap.from('.rotateText',{
       transform: `rotateX(-80deg)`,
       opacity:0,
       duration:2,
    //    stagger:1,
       scrollTrigger:{
        trigger:'.rotateText',
        // markers:true,
        start:'top 60%',
        end:'top -100%',
        scrub:2
       }

    })
})
    return(
       <>
       <div id="section2" className="bg-white">
    <h3 className="text-gray-500 text-base sm:text-lg md:text-xl text-center font-[anzo1] p-4 sm:p-6 md:p-[20px]">
        &copy; safz.portfolio 2024 | designed and developed
    </h3>

    <div className="rotateText">
        <h1 className="text-center text-black text-[30vw] sm:text-[35vw] md:text-[42vw] font-[anzo3] uppercase leading-[25vw] sm:leading-[30vw] md:leading-[35vw]">
            Turning
        </h1>
    </div>

    <div className="rotateText">
        <h1 className="text-center text-black text-[30vw] sm:text-[35vw] md:text-[42vw] font-[anzo3] uppercase leading-[25vw] sm:leading-[30vw] md:leading-[35vw]">
            Ideas
        </h1>
    </div>

    <div className="rotateText">
        <h1 className="text-center text-black text-[30vw] sm:text-[35vw] md:text-[42vw] font-[anzo3] uppercase leading-[25vw] sm:leading-[30vw] md:leading-[35vw]">
            Into
        </h1>
    </div>

    <div className="rotateText">
        <h1 className="text-center text-black text-[30vw] sm:text-[35vw] md:text-[42vw] font-[anzo3] uppercase leading-[25vw] sm:leading-[30vw] md:leading-[35vw]">
            Realities
        </h1>
    </div>

    <div className="h-1 w-2/3 relative left-1/2 -translate-x-1/2 mt-10 sm:mt-16 md:mt-20 bg-black"></div>
</div>

        
     </>
    )
}
export default Page2;