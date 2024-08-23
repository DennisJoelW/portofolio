import React from 'react'
import {NavBar} from '../Navbar/Navbar'
import react_logo from '../../assets/react.png'
import sneakerz_ios from '../../assets/SNEAKERZ_MOBILE.png'
import sneakerz_ios2 from '../../assets/SNEAKERZ_MOBILE_2.png'
import laravel_logo from '../../assets/laravel.png'
import gemini_logo from '../../assets/gemini.png'
import smartchat_pic_1 from '../../assets/smartchat.png'
import smartchat_pic_2 from '../../assets/smartchat2.png'
import smartchat_pic_3 from '../../assets/smartchat3.png'


function Smartchat() {

    const Tech = (props) => {
        return (
          <div className=' flex flex-col items-center p-1 cursor-pointer border-[#1ec8c8] border-[1px] border-opacity-50 rounded-lg max-w-20 w-full hover:scale-105 transition-transform duration-300'>
            <img src={props.img} alt="" className=' size-14' />
            <p className=' text-[12px]'>{props.techName}</p>
          </div>
        )
      }

  return (
    <div>
        <NavBar />
        <div className=' flex flex-col font-poppins w-full items-center mt-4'>
            <div className=' flex md:flex-row flex-col text-white max-w-[1320px] w-full mx-auto md:h-[45vh] pl-4 pr-4 md:pl-10 md:pr-10 md:gap-16 gap-10 mt-2'>
  
              <div className=' md:w-[46%] w-full flex flex-col justify-center'>
                  <h1 className=' md:text-5xl text-[38px] font-semibold'>Smartchat</h1>
                  <h2 className=' mt-2 text-[#1ec8c8] text-[18px] '>Web Development</h2>
                  <p className=' mt-4 text-justify text-[17px]'>A Fullstack Web application that uses Google’s Generative AI (GEMINI) to answer interactive conversations. It provides a chat interface where users can communicate with an AI model, manage their chat history, and handle multiple conversations.
                  <p className=' mt-4 text-start '>Github : <a href="https://github.com/DennisJoelW/smartchat1" className=' text-blue-400 underline'>github.com/DennisJoelW/smartchat1</a></p>
                  </p>
                  <hr className='mt-8 ' style={{ borderColor: '#1ec8c8', borderWidth: '2px' }} />
  
              </div>
  
  
              <div className=' md:w-[54%] w-full flex flex-col justify-center'>
  
              <h3 className=' text-[#1ec8c8]  text-[18px] md:text-center'>Technologies Used</h3>
  
                  <div className=' flex flex-row mt-3 gap-4 justify-center flex-wrap text-center'>
                    <Tech img={react_logo} techName={"React JS"}/>
                    <Tech img={laravel_logo} techName={"Laravel"}/>
                    <Tech img={gemini_logo} techName={"Gemini"}/>

  
                  </div>
              </div>
  
  
            </div>
  
            <div className=' flex flex-col text-white max-w-[1320px] w-full mx-auto h-[50vh] pl-4 pr-4 md:pl-10 md:pr-10 md:gap-16 gap-10 md:mt-1 mt-16 items-center mb-10 pb-10'>
            <img src={smartchat_pic_2} alt="" className=' shadow-lg rounded-lg w-full h-auto px-16' />
            <img src={smartchat_pic_1} alt="" className=' shadow-lg rounded-lg w-full h-auto px-16' />
            <img src={smartchat_pic_3} alt="" className=' shadow-lg rounded-lg w-full h-auto px-16' />
          </div>
  
  
  
        </div>
    </div>
  )
}

export default Smartchat