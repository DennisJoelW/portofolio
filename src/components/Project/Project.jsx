import React from 'react'
import { useState } from "react";
import nova_img from "../../assets/NOVA.png"
import resepku_img from "../../assets/RESEPKU.png"
import { useNavigate } from 'react-router-dom';

const Project = () => {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const navigate = useNavigate();

  const navigateClick = (path) => {
    navigate(path);
  }


  const ProjectItem = () => {
    return(
      <div className=' w-full flex md:flex-row flex-col gap-12'>

      <div className=' md:w-3/5 w-full h-full flex flex-col md:justify-between'>
        <h2 className=' md:text-4xl text-3xl font-bold md:mb-6 md:pr-28'><span className='text-[#1ec8c8] '>Nova</span> | Crypto Exchange <br /> Landing Page</h2>
        <h3 className=' text-[#1ec8c8] text-xl font-semibold my-2'>Web Development</h3>
        <p className=' text-gray-500 text-justify '>A Landing page for crypto exchange website to learn more using React and Tailwind. Page showing Hero, Tokens, Buy/Sell/Trade Options, and </p>
        <hr className=' mt-12 mb-8 md:block hidden' />

        <div className=' flex flex-row w-full md:h-full mt-2 items-end'>
          <div className='flex flex-col w-1/2'>
            <h3 className=' text-[#1ec8c8] mb-2'>Technologies</h3>
                <p>React JS, Tailwind CSS, Github</p>
          </div>
          <div className='flex flex-col w-1/2'>

          </div>
        </div>

      </div>
    </div>
    )
  }



  return (
    <div className='flex font-poppins w-full items-center mt-16'>
        <div className=' flex flex-col text-white max-w-[1380px] w-full mx-auto h-[100vh] items-center pl-4 pr-4 md:pl-10 md:pr-10'>
          <h2 className=" block text-center md:text-5xl text-3xl uppercase font-semibold md:mb-20 mb-10">MY PROJECTS</h2>

          <div className=' w-full flex md:flex-row flex-col gap-8'>

          <div onClick={() => navigateClick('/ProjectDetail')}
              className=' md:w-[28%] w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
              onMouseOver={() => setHover1(true)} 
              onMouseOut={() => setHover1(false)}>

              <img src={nova_img} className={ hover1 ? "rounded-t-2xl  transition-transform scale-105 duration-300 h-[82%] object-center object-cover" : " object-center object-cover h-[82%] rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
              <h2 className={`px-6 mt-4 mb-4 ${hover1 ? "text-[#1ec8c8] transition-transform duration-300 h-[18%]" : "h-[18%] text-white transition-transform duration-300"}`}>Nova | Crypto Exchange Landing Page</h2>
            
          </div>
          
          <div onClick={() => navigateClick('/ProjectDetail')}
              className=' md:w-[28%] w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
              onMouseOver={() => setHover1(true)} 
              onMouseOut={() => setHover1(false)}>

              <img src={nova_img} className={ hover2 ? "rounded-t-2xl  transition-transform scale-105 duration-300 h-[82%] object-center object-cover" : " object-center object-cover h-[82%] rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
              <h2 className={`px-6 mt-4 mb-4 ${hover2 ? "text-[#1ec8c8] transition-transform duration-300 h-[18%]" : "h-[18%] text-white transition-transform duration-300"}`}>Nova | Crypto Exchange Landing Page</h2>
            
          </div>
          
          <div onClick={() => navigateClick('/ProjectDetail')}
              className=' md:w-[46%]  w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
              onMouseOver={() => setHover3(true)} 
              onMouseOut={() => setHover3(false)}>

              <img src={resepku_img} className={ hover3 ? "rounded-t-2xl  transition-transform scale-105 duration-300" : "rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
              <h2 className={`px-6 mt-4 mb-4 ${hover3 ? "text-[#1ec8c8] transition-transform duration-300" : "text-white transition-transform duration-300"}`}>Nova | Crypto Exchange Landing Page</h2>
            
          </div>


          </div>

        </div>
    </div>
  )
}

export default Project
