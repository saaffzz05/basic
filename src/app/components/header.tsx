import 'remixicon/fonts/remixicon.css'
import Link from 'next/link';
const Header=()=>{
    return(
        <div className="w-full z-20 fixed flex items-center justify-end py-6 sm:py-10 md:py-20 px-4 sm:px-6 md:px-[30px]">

<Link href='/'> <button className="text-white rounded-full bg-black border-4 text-xs sm:text-sm md:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 hover:bg-gray-400">
&lt;

        </button></Link> 

           <Link href='/about'> <button className="text-white rounded-full bg-black border-4 text-xs sm:text-sm md:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 hover:bg-gray-400">
            About
        </button></Link>
        <Link href='/projects'><button className="text-white rounded-full bg-black border-4 text-xs sm:text-sm md:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 hover:bg-gray-400">
            Projects
        </button></Link>
       <Link href='/contact'> <button className="text-white rounded-full bg-black border-4 text-xs sm:text-sm md:text-base py-2 sm:py-3 px-6 sm:px-8 md:px-10 hover:bg-gray-400">
            Hire Me
        </button></Link>
        {/* <i className="ri-more-2-fill text-lg sm:text-xl md:text-2xl ml-2 sm:ml-3 hidden md:block"></i> */}
    </div>
    
    )
    }
    export default Header; 
