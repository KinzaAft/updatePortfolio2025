import Header from "../Componenets/header"
import Footer from "../Componenets/footer"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react';
import cateData from "../Data/project"
import Contact from "../Componenets/want";


export default function about (){
    return(
        <div>
            <Header />
            <div className="h-auto p-4">
  <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-4">PROJECTS</h1>
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    {cateData.map((data) => (
      <div className="shadow h-auto w-full sm:w-[300px] md:w-[350px] bg-slate-100 rounded-3xl p-4 flex flex-col items-center">
        <p className="text-2xl text-center mt-4 text-[#10375C] font-bold">{data.tittle}</p>
        <p className="text-lg text-[#10375C] font-thin text-center mt-4 px-4">{data.description}</p>
        <p className="text-xl text-[#10375C] font-thin text-center mt-4">{data.skills}</p>
        <button className="btn shadow btnani2 h-[35px] w-[100px] border-2 border-orange-600 text-xl text-[#FF6600] rounded-[25px] mt-4">Demo</button>
        <p className="name2 text-center text-[#10375C] mt-2">Available soon</p>
      </div>
    ))}
  </div>
</div>

             <Contact/>
            <Footer />
        </div>
    )
}