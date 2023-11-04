import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" p-4 fixed bottom-0 w-full flex space-x-5 bg-yellow-400">
      <div >
        <div className='flex'> 
      <img
            src='https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png' 
            alt="uop Logo"
            className="w-10 h-10 mr-2 aling-left" // Adjust the width and height as needed
          />
      <div className="text-center text-black font-semibold"><i>FOS</i> <br/> R e m i n d e r</div> 
      </div>
        
  
      <p className="text-black justify-center w-[100%] ml-[150%] mb-0">Copyright ⓒ {currentYear} All rights reserved-Faculty of science,UoP</p>
      </div>
    </footer>
  );
}

export default Footer;