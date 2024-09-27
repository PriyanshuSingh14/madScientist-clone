import React from 'react';

import { FaChartLine, FaUsers, FaPen, FaComments, FaEnvelope, FaBell } from 'react-icons/fa';
import logo from '../assets/logo.png';


interface NavigationProps {
  setActiveContent: (content: string) => void;
}
const Navigation: React.FC<NavigationProps> = ({ setActiveContent }) => {
  return (
    <div className='mx-4'>
      <div className="flex flex-col justify-between h-full bg-content-bg border border-gray-500/20 text-white p-4 rounded-md  mb-8">
        <div>
          <div className="mb-8">
            <img
              src={logo}
              alt="Company Logo"
              className="w-24 mx-1 mb-4 w-[90%] rounded-md"
            />
          </div>

          <nav>
            <ul className="space-y-4 mb-12">
              <li
                className="flex items-center space-x-2 py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Projections')}
              >
                <FaChartLine />
                <span className="text-lg">Projections</span>
              </li>

              <li
                className="flex items-center space-x-2  py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Community')}
              >
                <FaUsers />
                <span className="text-lg">Community</span>
              </li>

              <li
                className="flex items-center space-x-2  py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Writeups')}
              >
                <FaPen />
                <span className="text-lg">Write-ups</span>
              </li>

              <li
                className="flex items-center space-x-2  py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Forums')}
              >
                <FaComments />
                <span className="text-lg">Forums</span>
              </li>

              <li
                className="flex items-center space-x-2  py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Messages')}
              >
                <FaEnvelope />
                <span className="text-lg">Messages</span>
              </li>

              <li
                className="flex items-center space-x-2  py-1 px-2 rounded-lg hover:bg-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setActiveContent('Notifications')}
              >
                <FaBell />
                <span className="text-lg">Notifications</span>
              </li>
            </ul>

          </nav>
        </div>

      </div>
      <div>
        <ul className="space-y-2 mt-0 text-gray-500 mx-2">
          <li className="text-sm hover:text-gray-300">
            <a href="/privacy-policy">Privacy Policies</a>
          </li>
          <li className="text-sm hover:text-gray-300">
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li className="text-sm hover:text-gray-300">
            <a href="/community-guidelines">Community Guidelines</a>
          </li>
          <li className="text-sm hover:text-gray-300">
            <a href="/verification">Verification</a>
          </li>
        </ul>
      </div>


      <div className="text-sm text-gray-500 mt-10 mx-2">
        Aonia Tech Private Limited © 2024
      </div>
    </div>
  );
};

export default Navigation;
