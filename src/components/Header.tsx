import React from 'react';
import { FaBars } from 'react-icons/fa';
import { VscDiffAdded } from "react-icons/vsc";
import { LiaSearchSolid } from "react-icons/lia";
import avatar from '../assets/av.jpg'; 
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white w-full">
      <div className="w-[70%] relative mr-2"> {/* Reduced space with mr-2 */}
        <LiaSearchSolid className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        
        <input 
          type="text" 
          placeholder="ASK MADSCIENTIST" 
          className="w-full pl-10 p-2 rounded-md bg-content-bg border border-gray-500/20 placeholder-gray-400 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex items-center space-x-2 w-[40%] justify-end">
        <button className="flex items-center space-x-1 bg-create-user-green text-xl text-white px-2.5 py-1.5 rounded-md">
          <VscDiffAdded />
          <span className='pr-6'>Create Post</span>
          <IoIosArrowForward />
        </button>

        <div className="flex items-center space-x-4 bg-content-bg border border-gray-500/20 py-2.5 px-2 rounded-md cursor-pointer">
          <img 
            src={avatar} 
            alt="Avatar" 
            className="w-5 h-5 rounded-md"
          />
          <span className="text-sm">John Doe</span>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
