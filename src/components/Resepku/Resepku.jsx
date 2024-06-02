import React from 'react'
import {NavBar} from "../Navbar/Navbar"
import ejs_logo from "../../assets/ejs_logo.png"
import kotlin_logo from "../../assets/kotlin.png"
import androidstudio_logo from "../../assets/androi.png"
import sneakerz_homepage from "../../assets/sneakerz_homepage.png"
import resepku from "../../assets/RESEPKU.png"

const Resepku = () => {

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
                  <h1 className=' md:text-5xl text-[38px] font-semibold'>Resepku</h1>
                  <h2 className=' mt-2 text-[#1ec8c8] text-[18px] '>Mobile Development</h2>
                  <p className=' mt-4 text-justify text-[17px]'> A MVVM food recipe android app using kotlin with themealdb.com API. api http request using the retrofit framework
Activity. Features include login, search for food, food categories, food recipe details, favorites. </p>
                  <hr className='mt-8 ' style={{ borderColor: '#1ec8c8', borderWidth: '2px' }} />
  
              </div>
  
  
              <div className=' md:w-[54%] w-full flex flex-col justify-center'>
  
              <h3 className=' text-[#1ec8c8]  text-[18px] md:text-center'>Technologies Used</h3>
  
                  <div className=' flex flex-row mt-3 gap-4 justify-center flex-wrap text-center'>
                    <Tech img={kotlin_logo} techName={"Kotlin"}/>
                    <Tech img={androidstudio_logo} techName={"Android Studio"}/>

  
                  </div>
              </div>
  
  
            </div>
  
            <div className=' flex flex-col text-white max-w-[1320px] w-full mx-auto h-[50vh] pl-4 pr-4 md:pl-10 md:pr-10 md:gap-16 gap-10 md:mt-1 mt-16 items-center mb-10 pb-10'>
              <img src={resepku} alt="" className=' shadow-lg rounded-lg' />
            </div>
  
  
  
        </div>
  
      </div>
    )
  }

export default Resepku
