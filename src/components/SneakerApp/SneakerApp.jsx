import React from 'react'
import {NavBar} from '../Navbar/Navbar'
import react_logo from '../../assets/react.png'
import expo_logo from '../../assets/expo.png'
import appwrite_logo from '../../assets/appwrite.png'
import sneakerz_ios from '../../assets/SNEAKERZ_MOBILE.png'
import sneakerz_ios2 from '../../assets/SNEAKERZ_MOBILE_2.png'

function SneakerApp() {

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
                  <h1 className=' md:text-5xl text-[38px] font-semibold'>Sneakerz Mobile App</h1>
                  <h2 className=' mt-2 text-[#1ec8c8] text-[18px] '>Mobile Development</h2>
                  <p className=' mt-4 text-justify text-[17px]'>A Fullstack mobile application that run on IOS and Android. Built using React Native Expo with Appwrite cloud database & storage.
                    Feature includes viewing sneakers from database, searching for shoes, adding & deleting item on cart, submiting sneakers as admin, and user authentication.
                  </p>
                  <hr className='mt-8 ' style={{ borderColor: '#1ec8c8', borderWidth: '2px' }} />
  
              </div>
  
  
              <div className=' md:w-[54%] w-full flex flex-col justify-center'>
  
              <h3 className=' text-[#1ec8c8]  text-[18px] md:text-center'>Technologies Used</h3>
  
                  <div className=' flex flex-row mt-3 gap-4 justify-center flex-wrap text-center'>
                    <Tech img={react_logo} techName={"React Native"}/>
                    <Tech img={expo_logo} techName={"Expo"}/>
                    <Tech img={appwrite_logo} techName={"Appwrite"}/>

  
                  </div>
              </div>
  
  
            </div>
  
            <div className=' flex flex-col text-white max-w-[1320px] w-full mx-auto h-[50vh] pl-4 pr-4 md:pl-10 md:pr-10 md:gap-16 gap-10 md:mt-1 mt-16 items-center mb-10 pb-10'>
            <img src={sneakerz_ios} alt="" className=' shadow-lg rounded-lg' />
            <img src={sneakerz_ios2} alt="" className=' shadow-lg rounded-lg' />
          </div>
  
  
  
        </div>
    </div>
  )
}

export default SneakerApp