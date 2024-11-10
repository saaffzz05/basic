
import Text from "../components/tilText";
import Bottom from "../components/page1bottom";




const Page1 = () => {
   

    return (
        <div id='page1'className="bg-white relative h-screen w-screen px-4 py-4 " >
          <div id="page1-in" className="bg-[#393939] relative  shadow-xl shadow-gray-700 rounded-[35px] h-full w-full p-6 sm:p-12 md:p-16 lg:p-24">
          
    
         <img 
        src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" 
        className="h-20 sm:h-16 md:h-20 mt-[-20px] sm:mt-[-25px] md:mt-[-35px] ml-[-10px] sm:ml-[-15px] md:ml-[-20px]"
    />
               
              <Text />
               <Bottom />

            </div>

        </div>
    )
}
export default Page1;
