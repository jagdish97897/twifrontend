import React from 'react';
import { Link } from 'react-router-dom';
import bstl from "../resource/bstl.png";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-400 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="md:col-span-1 flex items-center">
            <Link to={"/"}>
              <img src={bstl} className="w-[200px] h-[200px]" alt="Logo"/>
            </Link>
          </div>
          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {/* Column 1 */}
            <div className="text-center md:text-left">
              <div className="font-semibold text-white">Home</div>
              <Link to="/booking" className="block text-white">Book Now</Link>
              <Link to="/contactUs" className="block text-white">Get In Touch</Link>
            </div>
            {/* Column 2 */}
            <div className="text-center md:text-left">
              <div className="font-semibold text-white">Product</div>
              <Link to={"/product"} className="block text-white">Featured Product</Link>
              <a href="https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158" className="block text-white">News Stories</a>
            </div>
            {/* Column 3 */}
            <div className="text-center md:text-left">
              <div className="font-semibold text-white">Company</div>
              <Link to={"/"} className="block text-white">About us</Link>
              <div className="block text-white">Careers</div>
            </div>
            {/* Buttons */}
            <div className="text-center md:text-right">
              <Link to={"/contactUs"}>
                <button className="inline-flex items-center justify-center min-h-[40px] max-h-[56px] px-6 py-2 rounded-full bg-[#57E226] text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="bg-[#57E226] h-1"></div>
    </footer>
  );
}

export default Footer;



// import React from 'react';
// import { Button2 } from './Button2';
// import logo from "../resource/logokgv.jpg";
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className='bg-black'>
//       <div className='max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-16'>
//         <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12'>
//           {/* Logo */}
//           <div className='md:col-span-1 flex items-center'>
//             <Link to={"/"}>
//               <img src={logo} className='w-16 h-16' alt="Logo"/>
//             </Link>
//           </div>
//           {/* Links */}
//           <div className='md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12'>
//             {/* Column 1 */}
//             <div className='text-center md:text-left'>
//               <div className='font-semibold text-white'>Home</div>
//               <Link to="/booking" className='block text-white'>Book Now</Link>
//               <Link to="/contactUs" className='block text-white'>Get In Touch</Link>
//             </div>
//             {/* Column 2 */}
//             <div className='text-center md:text-left'>
//               <div className='font-semibold text-white'>Product</div>
//               <Link to={"/product"} className='block text-white'>Featured Product</Link>
//               <a href="https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158" className='block text-white'>News Stories</a>
//             </div>
//             {/* Column 3 */}
//             <div className='text-center md:text-left'>
//               <div className='font-semibold text-white'>Company</div>
//               <Link to={"/"} className='block text-white'>About us</Link>
//               <div className='block text-white'>Careers</div>
//             </div>
//             {/* Buttons */}
//             <div className='text-center md:text-right'>
//               <Button2/>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Divider */}
//       <div className='bg-[#57E226] h-1'></div>
//     </div>
//   );
// };

// export default Footer;



// import React from 'react'

// import { Button2 } from './Button2'
// import logo from "../resource/logokgv.jpg"
// import { Link } from 'react-router-dom'

// export const Footer = () => {
//   return (
//     <div className='w-screen bg-black pl-20 pr-8 pt-16 pb-16'>
//     <div className='w-11/12 max-w-[1240px]   flex justify-between'>
//     <div ><Link to={"/"}><img src={logo} className='w-[60px] h-[60px]'/></Link></div>
//           <div className='flex justify-center items-center  gap-10 h-28 mb-8 ' >
//              {/* col1 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Home</div>
//                 <Link to="/booking" ><div>Book Now</div></Link>
//                 <Link to="/contactUs">Get In Touch</Link>
              
                
                
//               </div>

//               {/* col2 */}
//               <div className='text-white '>
//               <div className='font-semibold   '>Product</div>
//                 <Link to={"/product"}><div>Featured Product</div></Link>
//                 <Link to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}>News Stories</Link>
//               </div>

//               {/* col 3 */}
//               <div className='text-white '>
//                 <div className='font-semibold  '>Company</div>
//                 <Link to={"/"}>About us</Link>
//                 <div>Careers</div>
//               </div>

//               {/* col4 -> buttons*/}
//               <div className='flex-col items-center justify-center  gap-10 '>
//                 <Button2/>
//               </div>
//           </div>
//     </div>
//     <div className='w-full rounded-md bg-[#57E226] h-[1px] '></div>

//     </div>
//   )
// }
