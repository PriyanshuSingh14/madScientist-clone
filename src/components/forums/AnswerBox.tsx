import React, { useState } from 'react';
import { FaTimes, FaShareAlt, FaRegHandPaper, FaEllipsisH, FaRegSave, FaFlag } from 'react-icons/fa';

interface AnswerBoxProps {
  avatar: string;
  name: string;
  description: string;
  comment: string;
  claps: number;
  answers: number;
  time: string;
  authorView?: boolean;
  onClose: () => void;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({
  avatar,
  name,
  description,
  comment,
  claps,
  answers,
  time,
  authorView,
  onClose,
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="bg-[#252525] w-4/5 h-[90%] p-6 rounded-lg space-y-4 text-white relative overflow-y-auto">
       
        <div className="flex justify-between items-center">
          <FaTimes className="cursor-pointer" onClick={onClose} />
          <FaShareAlt />
        </div>

       
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-md object-cover" />
            <div>
              <h2 className="text-white font-semibold">{name}</h2>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
          <div className="relative">
            <FaEllipsisH className="text-gray-400 cursor-pointer" onClick={toggleMenu} />
            {isMenuOpen && (
              <div className="absolute right-0 top-6 bg-[#252525] border border-gray-600/20 rounded-md p-2 text-white space-y-2">
                <button className="flex items-center space-x-2">
                  <FaRegSave /> <span>Save</span>
                </button>
                <button className="flex items-center space-x-2">
                  <FaFlag /> <span>Report</span>
                </button>
              </div>
            )}
          </div>
        </div>

   
        <div>
          <p>{comment}</p>
        </div>

     
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2">
            <FaRegHandPaper /> <span>{claps}</span>
          </button>
          {authorView && (
            <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full">Author View</span>
          )}
        </div>


        {answers > 0 && (
          <div>
            <p>{answers} Answers</p>
       
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={avatar} alt="Answerer" className="w-12 h-12 rounded-md object-cover" />
                  <div>
                    <h2 className="text-white font-semibold">Answerer Name</h2>
                    <p className="text-gray-400 text-sm">Answerer's Description</p>
                  </div>
                </div>
                <p className="text-gray-400">{time}</p>
              </div>
              <p className="mt-2">This is the answer provided by the user.</p>
            </div>
          </div>
        )}
        {
            answers==0 &&
            <p className='text-xl'> No Answers Yet!!</p>
        }

       
        <div className="mt-6">
          <textarea
            placeholder="Write your own answers here..."
            className="w-full p-1 bg-[#171717]  rounded-lg focus:outline-none text-white"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AnswerBox;
