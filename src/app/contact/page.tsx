 

 const Contact=()=>{
    return(
      //   <div className="bg-white relative h-screen w-screen px-4 py-4 " >
      //       <div  className="bg-gray-500 bg-[url('https://static.wixstatic.com/media/f1c650_b948dfd8fa184e88994ce92320889e94~mv2.jpg/v1/fill/w_840,h_1166,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/new%20background_fn_vertical.jpg')] bg-cover shadow-xl shadow-gray-700 rounded-[35px] h-full w-full z-[-1]p-6 sm:p-12 md:p-16 lg:p-24">
         
      //    <div className="text-[11vw] font-[anzo] text-white flex w-full ">
      //      <h1 >GOT <span className="text-gray-500">A</span> <br/> PROJECT</h1>
      //      <div className="h-full w-0.2 bg-white"></div>
           
      //      </div>
      //      </div>
      //    </div>

      <div  className="bg-white relative h-screen w-screen px-4 py-4 " >
      <div  className="bg-gray-500  overflow-hidden bg-cover shadow-xl shadow-gray-700 rounded-[35px] h-full w-full  ">
          <video autoPlay loop  src="/front.mp4" className="h-full w-full object-cover"></video>
     <div className="flex absolute items-center gap-9 justify-between p-10 text-white bottom-20">
     <h1 className="font-[anzo] text-[10vw] leading-[10vw] ">GOT <span>A</span> <br/> PROJECT</h1>
     <div className="h-[10vw] w-[0.2vw] ml-10 bg-gray-500"></div>
     <h3 className="font-[anzo4] -ml-2  text-[2vw] leading-[3vw] ">WORLDWIDE SERVICE<br/><span className="font-[anzo]  text-[1.5vw] text-gray-700">I CAN COME WHEREEVER YOU CALL ME</span><br/><span className="text-[1.2vw] leading-[3vw]">saaffzz05@gmail.com</span></h3>
     </div>
      </div>
         
           
       </div>
    )
 }
 export default Contact;