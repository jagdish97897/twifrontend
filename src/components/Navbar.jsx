import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resource/bstl.png';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-[9.5rem] sticky top-0 z-50 w-full bg-blue-800 bg-opacity-50">
      <div className="bg-blue-800 w-full h-[100px] flex items-center">
        <div className="h-[50px] w-full max-w-[800px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-12 mr-2" />
          </div>
          <div className="hidden sm:flex space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaClock />
              </div>
              <span>
                Mon - Sat 9:00 - 18:00
                <br />
                Sunday Closed
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaEnvelope />
              </div>
              <span>
                Email
                <br />
                cse@ustl.in
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaPhone />
              </div>
              <span>
                Call Us
                <br />
                +91 11 27351591
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[60px] h-[60px]">

        </div>
        <div className="hidden md:flex font-inter gap-6 lg:gap-14 text-lg text-white items-center">
          <Link to={"/"} className="hover:border-b-2 hover:border-[#ecf662]">Home</Link>
          <Link to={"/about"} className="hover:border-b-2 hover:border-[#ecf662]">About</Link>
          <Link to={"/services"} className="hover:border-b-2 hover:border-[#ecf662]">Services</Link>
          <Link to={"/contact"} className="hover:border-b-2 hover:border-[#ecf662]">Contact</Link>
          <Link to={"/glossary"} className="hover:border-b-2 hover:border-[#ecf662]">Glossary</Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-3">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#f6f9f5]"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#f6f9f5]"
      >
        <FaTwitter size={24} />
      </a>
      <button className="bg-white text-[#52d831] px-2 py-1 rounded-md">Request Quote</button>
    </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white flex flex-col items-center py-2">
          <Link to={"/"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to={"/about"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to={"/services"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to={"/contact"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to={"/golssary"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Glossary</Link>
          <button className="bg-white text-[#52d831] my-2 px-4 py-2 rounded-md w-11/12">Request Quote</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../resource/bstl.png';
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
// function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
// <div className="h-[9.5rem] sticky top-0 z-50 w-full bg-blue-800 bg-opacity-50">
//  <div  className="bg-blue-800 w-full h-[100px] flex items-center">
//       <div className="h-[50px] w-[800px] mx-auto flex justify-between items-center p-4  bg-white ">
//         <div className="flex items-center ">
//           <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
       
//         </div>
//         <div className="flex space-x-8 ">
//           <div className="flex items-center space-x-2">
//           <div className="bg-blue-800 text-white rounded-full p-2">
//               <FaClock />
//             </div>
//             <span>
//               Mon - Sat 9:00 - 18:00
//               <br />
//               Sunday Closed
//             </span>
//           </div>
//           <div className="flex items-center space-x-2">
//           <div className="bg-blue-800 text-white rounded-full p-2">
//               <FaEnvelope />
//             </div>
//             <span>
//               Email
//               <br />
//               cse@ustl.in
//             </span>
//           </div>
//           <div className="flex items-center space-x-2">
//           <div className="bg-blue-800 text-white rounded-full p-2">
//               <FaPhone />
//             </div>
//             <span>
//               Call Us
//               <br />
//               +91 11 27351591
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>


//       <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='w-[60px] h-[60px]'>
        
//         </div>
//         <div className='hidden md:flex font-inter gap-6 lg:gap-14 text-lg text-white items-center'>
//           <Link to={"/"} className="hover:border-b-2 hover:border-[#ecf662]">Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#ecf662]">Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#ecf662]">Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#ecf662]">Contact Us</Link>
//         </div>
//         <div className='hidden md:flex items-center justify-center gap-3'>
//           <button className='bg-[#52d831] px-2 py-1 rounded-md'>Know More</button>
//           <button className='bg-white text-[#52d831] px-2 py-1 rounded-md'>Contact Us</button>
//         </div>
//         <div className='md:hidden'>
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className='text-white'>
//             <IoReorderThreeOutline/>
//           </button>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className='md:hidden bg-green-500 text-white flex flex-col items-center py-2'>
//           <Link to={"/"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           <Link to={"/product"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Product</Link>
//           <Link to={"/booking"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
//           <Link to={"/contactUs"} className="py-2 hover:border-b-2 hover:border-[#ecf662]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <button className='bg-[#52d831] my-2 px-4 py-2 rounded-md w-11/12'>Know More</button>
//           <button className='bg-white text-[#52d831] my-2 px-4 py-2 rounded-md w-11/12'>Contact Us</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../resource/logokgv.jpg'

// function Navbar() {
//   return (
//     <div className='h-[3.5rem] py-2 sticky top-0 z-50 w-full bg-black'>
//       <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8'>
//         <div>
//           <Link to={"/"}>
//             <img src={logo} className='w-[40px] h-[40px]' alt="Logo" loading="lazy" />
//           </Link>
//         </div>
//         <div className='hidden md:flex font-inter gap-6 lg:gap-14 text-lg text-white items-center'>
//           <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
//           <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
//           <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
//           <Link to={"/contactUs"} className="hover:border-b-2 hover:border-[#52d831]">Contact Us</Link>
//         </div>
//         <div className='hidden md:flex items-center justify-center gap-3'>
//           <button className='bg-[#52d831] px-2 py-1 rounded-md'>Know More</button>
//           <button className='bg-white text-[#52d831] px-2 py-1 rounded-md'>Contact Us</button>
//         </div>
//         <div className='md:hidden'>
//           {/* Mobile menu button */}
//           <button className='text-white'>Menu</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar



// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../resource/logokgv.jpg'
// function Navbar() {
//   return (
//     <div className='h-[3.5rem] py-2 sticky top-0 z-50  items-center w-full bg-black '>

//    <div className='flex justify-between gap-20 max-w-[1240px]  mx-auto '>
//    <div ><Link to={"/"}><img src={logo} className='w-[40px] h-[40px]' loading="lazy"/></Link></div>
//    <div className='flex font-inter gap-14 text-lg text-white items-center'>
//        <Link to={"/"} className="hover:border-b-2 hover:border-[#52d831]">Home</Link>
//        <Link to={"/product"} className="hover:border-b-2 hover:border-[#52d831]">Product</Link>
//        <Link to={"/booking"} className="hover:border-b-2 hover:border-[#52d831]">Booking</Link>
//        <Link to={"/contactUs"}  className="hover:border-b-2 hover:border-[#52d831] mr-5">Contact Us</Link>
//    </div>
//     <div className='flex items-center justify-center gap-3'>
//       <button className='bg-[#52d831] px-2 py-1 rounded-md'>Know More</button>
//       <button className='bg-white text-[#52d831] px-2 py-1 rounded-md'>Contact Us</button>
//     </div>
  
//    </div>




// </div> 
//   )
// }

// export default Navbar
