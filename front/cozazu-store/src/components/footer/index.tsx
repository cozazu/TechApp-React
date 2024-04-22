import {
    RiFacebookCircleLine,
    RiInstagramLine,
    RiLinkedinBoxLine,
    RiLinkedinLine,
    RiTwitterLine,
    RiYoutubeLine,
  } from "@remixicon/react";
  
  const Footer: React.FC = () => {
    return (
      <footer className="bg-slate-950 h-auto sticky w-full py-10 text-white">
        <div className="md:w-3/4  md:m-auto mx-4 flex justify-around flex-wrap">
          <div className="w-full md:w-auto">
            <h1 className="text-xl text-center mb-4 md:text-start">FOLLOW US</h1>
            <ul className="flex justify-around flex-wrap md:flex-col">
              <li className="flex gap-2">
                <RiFacebookCircleLine color="#ffffff" size={25} />
                Facebook
              </li>  
              <li className="flex gap-2">
                <RiInstagramLine color="#ffffff" size={25} />
                Instagram
              </li>
              <li className="flex gap-2">
                {" "}
                <RiTwitterLine color="#ffffff" size={25} /> Twitter
              </li>
              <li className="flex gap-2">
                <RiLinkedinBoxLine color="#ffffff" size={25} />
                Linkedin
              </li>
              <li className="flex gap-2">
                <RiYoutubeLine color="#ffffff" size={25} />
                Youtube
              </li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto">
            <h1 className="text-xl mb-4">CUSTOMER SERVICE</h1>
            <ul>
              <li>Requests, complaints and claims</li>
              <li>Payment methods</li>
              <li>Returns and Refunds</li>
              <li>Guarantee</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto">
            <h1 className="text-xl mb-4">ABOUT T-INSHOP</h1>
            <ul>
              <li>About us</li>
              <li>Politica de cookies</li>
              <li>Cookies policy</li>
              <li>Return policy</li>
              <li>Warranty policy</li>
              <li>Work with us</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;