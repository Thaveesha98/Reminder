import React from 'react';
import {AiOutlineBell} from 'react-icons/ai'

const Header = () => {
  return (
    <header  >
      <div className="  flex ml-0 p-10 fixed  w-full bg-yellow-400 z-0">
        <div className='flex w-full ml-0'> 
      <img
            src='https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png' 
            alt="uop Logo"
            className="w-10 h-10 mr-2 aling-left" 
          />
      <div className="text-center text-black font-semibold relative"><i>FOS</i> <br/> R e m i n d e r</div> 
      </div>
      
        <div className='flex justify-end items-center w-full'>
          <button className= "text-black px-4 py-2 rounded-full">Home</button>
          <button className="text-black px-4 py-2 ">My Task</button>
          <button className="text-black px-4 py-2 ">Request</button>
          {/* <Link to=""> */}
          <AiOutlineBell className='w-10 h-10 text-black cursor-pointer'/>
          {/* </Link> */}
          </div>
      </div>
    </header>
  );
}

export default Header;
