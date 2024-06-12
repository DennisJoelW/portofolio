import React from 'react'
import { useState } from "react";
import nova_img from "../../assets/NOVA.png"
import resepku_img from "../../assets/RESEPKU.png"
import { useNavigate } from 'react-router-dom';
import nova_img2 from "../../assets/novaa.png";
import sneakerz_img from "../../assets/sneakerz.png"
import sneakerz_3 from "../../assets/sneakerz3.png"
import nova_token from "../../assets/nova_token.png"

const Project = () => {

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  const navigate = useNavigate();

  const navigateClick = (path) => {
    navigate(path);
  }

  const visitWeb = (url) => {
    window.location.href = url;
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
    <div className='flex font-poppins w-full items-center mt-28 mb-20'>
        <div className=' flex flex-col text-white max-w-[1320px] w-full mx-auto h-[100vh] items-center pl-4 pr-4 md:pl-10 md:pr-10'>
          <h2 className=" block text-center md:text-5xl text-3xl uppercase font-semibold mb-10 mt-10">MY PROJECTS</h2>

          <div className=' w-full flex md:flex-row flex-col gap-12'>

            <div onClick={() => navigateClick('/ProjectDetail')}
                className='md:w-1/2 w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden justify-center items-center flex flex-col' 
                onMouseOver={() => setHover1(true)} 
                onMouseOut={() => setHover1(false)}>

                <img src={sneakerz_3} className={ hover1 ? "rounded-t-2xl  transition-transform scale-105 duration-300 md:h-[84.5%]" : "rounded-t-2xl scale-100 transition-transform duration-300 md:h-[84.5%] h-[78%] w-full "} alt="" />
                <h2 className={`my-4 px-6 ${hover1 ? "text-[#1ec8c8] transition-transform duration-300" : " text-white transition-transform duration-300"}`}>Sneakerz | Web App</h2>
              
            </div>
          

          
            <div onClick={() => navigateClick('/Resepku')}
                className=' md:w-1/2  w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden justify-center items-center flex flex-col ' 
                onMouseOver={() => setHover3(true)} 
                onMouseOut={() => setHover3(false)}>

                <img src={resepku_img} className={ hover3 ? "rounded-t-2xl  transition-transform scale-105 duration-300" : "rounded-t-2xl scale-100 transition-transform duration-300 "} alt="" />
                <h2 className={` my-4 px-6 ${hover3 ? "text-[#1ec8c8] transition-transform duration-300" : " text-white transition-transform duration-300"}`}>ResepKu | Food Recipe Seeker App</h2>
              
            </div>


          </div>

          <div className=' w-full flex md:flex-row flex-col gap-8 mt-12'>

              <div onClick={() => visitWeb('https://dennisjoelw.github.io/nova_exchange/')}
                className=' md:w-1/3 w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
                onMouseOver={() => setHover2(true)} 
                onMouseOut={() => setHover2(false)}>

                <img src={nova_token} className={ hover2 ? "rounded-t-2xl  transition-transform scale-105 duration-300 md:h-[82%] object-center object-cover" : " object-center object-cover md:h-[82%] rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
                <h2 className={`px-6 my-3 ${hover2 ? "text-[#1ec8c8] transition-transform duration-300 md:h-[18%]" : "md:h-[18%] text-white transition-transform duration-300"} md:text-[16px]`}>Nova | Crypto Landing Page</h2>
                
              </div>

              <div onClick={() => navigateClick('/')}
                className=' md:w-1/3 w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
                onMouseOver={() => setHover4(true)} 
                onMouseOut={() => setHover4(false)}>

                <img src className={ hover4 ? "rounded-t-2xl  transition-transform scale-105 duration-300 md:h-[82%] object-center object-cover" : " object-center object-cover md:h-[82%] rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
                <h2 className={`px-6 my-3 ${hover4 ? "text-[#1ec8c8] transition-transform duration-300 md:h-[18%]" : "md:h-[18%] text-white transition-transform duration-300"} md:text-[16px]`}>Coming soon</h2>
                
              </div>

              <div onClick={() => navigateClick('/')}
                className=' md:w-1/3 w-full h-full bg-[hsl(216,6%,25%)] rounded-2xl border-[hsl(216,6%,30%)] border-2 cursor-pointer overflow-hidden ' 
                onMouseOver={() => setHover5(true)} 
                onMouseOut={() => setHover5(false)}>

                <img  className={ hover5 ? "rounded-t-2xl  transition-transform scale-105 duration-300 md:h-[82%] object-center object-cover" : " object-center object-cover md:h-[82%] rounded-t-2xl scale-100 transition-transform duration-300"} alt="" />
                <h2 className={`px-6 my-3 ${hover5 ? "text-[#1ec8c8] transition-transform duration-300 md:h-[18%]" : "md:h-[18%] text-white transition-transform duration-300"} md:text-[15px]`}>Learning React Native</h2>
                
              </div>

          </div>

        </div>
    </div>
  )
}

export default Project
