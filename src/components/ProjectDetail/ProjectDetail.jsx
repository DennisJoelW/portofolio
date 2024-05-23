import React from 'react'
import {NavBar} from "../Navbar/Navbar"
import ejs_logo from "../../assets/ejs_logo.png"
import nodejs_logo from "../../assets/nodejs_logo.png"
import express_logo from "../../assets/express_logo.png"
import postgre_logo from "../../assets/postgre_logo.png"
import bootstrap_logo from "../../assets/bootstrap_logo.png"
import sneakerz_homepage from "../../assets/sneakerz_homepage.png"

const Tech = (props) => {
  return (
    <div className=' flex flex-col items-center p-1 cursor-pointer border-[#1ec8c8] border-[1px] border-opacity-50 rounded-lg max-w-20 w-full hover:scale-105 transition-transform duration-300'>
      <img src={props.img} alt="" className=' size-14' />
      <p className=' text-[12px]'>{props.techName}</p>
    </div>
  )
}


const ProjectDetail = () => {
  return (
    <div>

      <NavBar />
      <div className=' flex font-poppins w-full items-center mt-12'>
          <div className=' flex md:flex-row flex-col text-white max-w-[1380px] w-full mx-auto h-[50vh] pl-4 pr-4 md:pl-10 md:pr-10 md:gap-16 gap-10 mt-2'>

            <div className=' md:w-[46%] w-full flex flex-col justify-center'>
                <h1 className=' md:text-5xl text-[38px] font-semibold'>Sneakerz App</h1>
                <h2 className=' mt-2 text-[#1ec8c8] text-[18px] '>Web Development</h2>
                <p className=' mt-4 text-justify text-[17px]'>Full-stack sneakers store web app with EJS, Express.js, PostgreSQL, and Axios. Features include sneakers stock view, admin dashboard to input, edit, delete sneakers stocks.</p>
                <hr className='mt-8 ' style={{ borderColor: '#1ec8c8', borderWidth: '2px' }} />

            </div>


            <div className=' md:w-[54%] w-full flex flex-col justify-center'>

            <h3 className=' text-[#1ec8c8]  text-[18px] md:text-center'>Technologies Used</h3>

                <div className=' flex flex-row mt-3 gap-4 justify-center flex-wrap'>
                  <Tech img={ejs_logo} techName={"EJS"}/>
                  <Tech img={nodejs_logo} techName={"Node JS"}/>
                  <Tech img={express_logo} techName={"Express JS"}/>
                  <Tech img={postgre_logo} techName={"Postgre"}/>
                  <Tech img={bootstrap_logo} techName={"Bootstrap"}/>

                </div>
            </div>


          </div>
      </div>

      

    </div>
  )
}

export default ProjectDetail
