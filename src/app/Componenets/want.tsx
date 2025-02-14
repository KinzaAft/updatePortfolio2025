export default function Contact (){
    return(
      <div className="shadow w-full md:w-[1000px] md:h-[200px] mx-auto bg-slate-100 rounded-xl mt-[50px] mb-[20px]">
      <p className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px]">Want to??</p>
      <p className="text-xl text-[#FF6600] text-center font-medium pt-2 m-3">Expand Your Business with a Strong Digital Presence</p>
      <a href="/contact">
      <button className="shadow btnani h-[40px] sm:h-[45px] w-[80%] sm:w-[200px] mx-auto block mt-5 sm:mt-[20px] border-2 border-[#10375C] text-base sm:text-xl text-[#10375C] rounded-[25px] hover:bg-[#10375C] hover:text-white transition-all duration-300">
  Contact Me
</button>

      {/* <button className="shadow btnani h-[45px] w-[200px] mx-auto block mt-[20px] border-2 border-[#10375C] text-xl text-[#10375C] rounded-[25px]">Contact Me</button> */}
      </a>
    </div>
    
  
    )
}