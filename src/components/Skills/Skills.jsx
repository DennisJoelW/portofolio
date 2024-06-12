import React from 'react'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import scroll_wheel from "../../assets/down_arrow.gif";
import linkedin from "../../assets/linkedin.png"
import { RiCodeSSlashLine } from "react-icons/ri";
import { AiFillCode } from "react-icons/ai";
import { SiAndroidstudio } from "react-icons/si";

const Skills = () => {

  const AllSkills = () => {
    return(
      <div className=' flex md:hidden flex-col h-fit w-full md:gap-8 gap-4 justify-center items-center'>

        <div className='md:w-1/3 w-[93%] h-fit md:py-14 py-10 px-10 bg-opacity-50 bg-black rounded-2xl'>
            <SiAndroidstudio size={68} className=' mb-4' />
            <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Android Development</h3>
            <p className='text-justify md:pr-5 text-[16px] '>Android Developer with internship experience using Java, familiar with Kotlin. using MySQL for database management and Retrofit Library for HTTP Request. familiar with architectural patterns like MVVM and MVP.</p>
        </div>
        
        <div className='md:w-1/3 w-[93%] h-fit md:py-14 py-10 px-10  bg-opacity-50 bg-black rounded-2xl'>
            <RiCodeSSlashLine size={70} className=' mb-4'/>
            <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Front-End Development</h3>
            <p className='text-justify md:pr-5 text-[16px]'>Proficient in creating and designing dynamic web applications with React JS and Tailwind CSS to deliver modern front end design.</p>
        </div>

        <div className='md:w-1/3 w-[93%] h-fit md:py-14 py-10 px-10 bg-opacity-50 bg-black rounded-2xl'>
            <AiFillCode size={70} className=' mb-4' />
            <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Back-End Development</h3>
            <p className='text-justify md:pr-5 text-[16px]'>Experienced in developing  REST APIs with Express JS and Node JS, Proficient in database administration using MySQL and PostgreSQL.</p>
        </div>

    </div>

    )
  }

    
  return (
    <div className='  flex font-poppins mx-auto w-full items-center mt-16 mb-38'>
      <div className=' flex flex-col text-white max-w-[1320px] w-full mx-auto md:h-[100vh] h-80vh items-center pl-4 pr-4 md:pl-10 md:pr-10 py-8 '>

         <img src={scroll_wheel} alt="" className=' w-[100px] h-auto md:mb-12 mb-6' />

         <h2 className="text-center md:text-5xl text-3xl uppercase font-semibold md:mb-14 mb-8">MY SKILLS</h2>

 
         <ScrollAnimation animateIn='bounceInLeft' className=' md:flex hidden' >

              <div className=' flex md:flex-row flex-col w-full items-stretch gap-5 md:gap-8 justify-center'>

                  <div className='md:w-1/3 w-full py-16 px-10 bg-opacity-50 bg-black rounded-2xl'>
                      <SiAndroidstudio size={68} className=' mb-4' />
                      <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Android Development</h3>
                      <p className='text-justify md:pr-5 text-[16px] '>Android Developer with internship experience using Java, familiar with Kotlin. using MySQL for database management and Retrofit Library for HTTP Request. familiar with architectural patterns like MVVM and MVP.</p>
                  </div>
                  
                  <div className='md:w-1/3 w-full py-16 px-10  bg-opacity-50 bg-black rounded-2xl'>
                      <RiCodeSSlashLine size={70} className=' mb-4'/>
                      <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Front-End Development</h3>
                      <p className='text-justify md:pr-5 text-[16px]'>Proficient in creating and designing dynamic web applications with React JS and Tailwind CSS to deliver modern front end design. Currently learning React Native for mobile front-end development.</p>
                  </div>

                  <div className='md:w-1/3 w-full py-16 px-10 bg-opacity-50 bg-black rounded-2xl'>
                      <AiFillCode size={70} className=' mb-4' />
                      <h3 className='text-[#1ec8c8] md:text-2xl text-xl font-medium mb-4'>Back-End Development</h3>
                      <p className='text-justify md:pr-5 text-[16px]'>Experienced in developing  REST APIs with Express JS and Node JS, Proficient in database administration using MySQL and PostgreSQL.</p>
                  </div>

              </div>

         </ScrollAnimation> 

         <AllSkills/>

        
      </div>
    </div>
  )
}

export default Skills
