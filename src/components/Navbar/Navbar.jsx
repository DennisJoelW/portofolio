import {Navbar, Container, Nav} from "react-bootstrap";
import "./navbar.css"
import "../../../src/App.css"
import emailIcon from "../../assets/email.png"
import linkedinIcon from "../../assets/linkedin.png"
import githubIcon from "../../assets/github.png"
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";


export const NavBar = () => {

    const[menu, changeMenu] = useState(false)

    const openMenu = () => {
      changeMenu(true)
    }
    const closeMenu = () => {
      changeMenu(false)
    }

    const navigate = useNavigate();
    
    const navigateClick = (path) => {
      navigate(path);
    }

    

    return(

      
      <div className=" w-full font-poppins text-white">
        <div className=" max-w-[1320px] w-full h-[90px] mx-auto flex flex-row items-center justify-between pl-4 pr-4 md:pl-10 md:pr-10">
          <h1 className=" justify-start"></h1>

          <div className=" md:flex flex-row hidden">
            <ul className=" flex flex-row gap-16">
                <li onClick={() => navigateClick('/')} className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Home</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Skills</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Experience</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Projects</li>
            </ul>
            <div className=" md:ml-20 flex flex-row gap-12">
            <a href="mailto:dennisjoelw@gmail.com"><img src={emailIcon} className=" w-[26px] h-[26px] hover:scale-125 duration-300 cursor-pointer " alt="Email Icon" /></a>
            <a href="https://www.linkedin.com/in/dennis-joel"><img src={linkedinIcon} className=" w-[26px] h-[26px] hover:scale-125 duration-300 cursor-pointer " alt="Linkedin icon" /></a>
            <a href="https://github.com/dennisjoelw"> <img src={githubIcon} className=" w-[26px] h-[26px] hover:scale-125 duration-300 cursor-pointer " alt="Github Icon" /></a>
            </div>
          </div>

          <div className=" block md:hidden">
            {menu ? <IoMdClose size={33} className=' cursor-pointer' onClick={closeMenu} color="#1ec8c8"/> :<IoMenuOutline size={33} onClick={openMenu} className=' cursor-pointer' color="#1ec8c8"/>}
          </div>

          <div className={menu ? " z-10 fixed left-0 top-0 w-[70%] border-r border-r-[#1ec8c8] border-b border-b-[#1ec8c8] h-full bg-[hsl(216,6%,5%)] ease-linear duration-[350ms] block md:hidden" : " fixed left-[-100%]"}>
            <ul className=" flex flex-col gap-10 text-xl mt-20 items-center">
                <li onClick={() => navigateClick('/')} className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Home</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Skills</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Experience</li>
                <li className=" hover:text-[#1ec8c8] cursor-pointer ease-linear duration-200 hover:scale-110 ">Projects</li>
            </ul>
            <div className=" md:ml-20 flex flex-row gap-12 items-center justify-center mt-20">
              <a href="mailto:dennisjoelw@gmail.com"><img src={emailIcon}  className=" w-[26px] h-[26px] hover:scale-125 duration-400 cursor-pointer " alt="Email Icon" /></a>
              <a href="https://www.linkedin.com/in/dennis-joel"><img src={linkedinIcon} className=" w-[26px] h-[26px] hover:scale-125 duration-400 cursor-pointer " alt="Linkedin icon" /></a>
              <a href="https://github.com/dennisjoelw"><img src={githubIcon} className=" w-[26px] h-[26px] hover:scale-125 duration-400 cursor-pointer " alt="Github Icon" /></a>
            </div>
          </div>


        </div>
      </div>

    )


}