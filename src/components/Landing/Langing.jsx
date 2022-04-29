import React from "react";
import HeaderContainer from "../Header/HeaderContainer";
import LandingImg from "../../img/landingImg.svg";
import Logo from "../CommonComponents/Logo";
import MainScreen from "../CommonComponents/MainScreen";

export default function Langing() {
  return (
    <>
      <HeaderContainer /> 
      <MainScreen>
          <div className='h-[600px] flex items-center justify-center gap-7'>
            <div className='w-[300px] not-prose'>
              <Logo />
              <p className='text-3xl mt-3'>
                Hello, you need authorize to use this app😎
              </p>{" "}
              <button className='mt-5 bg-[#228be6] hover:animate-pulse p-2 text-white rounded'>
                Login/Register
              </button>
            </div>
            <img src={LandingImg} alt='landing' className=' h-1/2' />
          </div>
      </MainScreen>
        
    </>
  );
}
