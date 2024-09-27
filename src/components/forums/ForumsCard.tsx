import React, { useState } from 'react';
import { FaShareAlt, FaEllipsisH, FaRegSave, FaFlag, FaRegHandPaper } from 'react-icons/fa';
import AnswerBox from './AnswerBox'; 

interface CardProps {
  avatar: string;
  name: string;
  description: string;
  comment: string;
  time: string;
  claps: number;
  answers: number;
  authorView?: boolean;
}

const ForumsCard: React.FC<CardProps> = ({ avatar, name, description, comment, time, claps, answers, authorView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnswerBoxOpen, setIsAnswerBoxOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAnswerBox = () => {
    setIsAnswerBoxOpen(true); 
  };

  const closeAnswerBox = () => {
    setIsAnswerBoxOpen(false); 
  };

  return (
    <div className="w-full p-4 bg-[#181818] border border-gray-500/20 rounded-md space-y-2">
   
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-md object-cover" />
          <div>
            <h2 className="text-white font-semibold">{name}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
        </div>
        <FaShareAlt className="text-white cursor-pointer" />
      </div>

    
      <div className="flex justify-between items-center">
        <p className="text-white cursor-pointer" onClick={openAnswerBox}>{comment}</p> 
        <div className="flex items-center space-x-2">
          <p className="text-gray-400 text-sm">{time}</p>
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
      </div>

     
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-white">
            <FaRegHandPaper /> <span>{claps}</span>
          </button>
          <p className="text-gray-400">{answers} answers</p>
        </div>
        {authorView && <button className="text-sm text-gray-400 px-4 py-2 rounded-md">Author View</button>}
      </div>

 
      <div>
        <input
          type="text"
          placeholder="Write your answer here"
          className="w-full p-2 rounded-md bg-[#252525] text-gray-400 focus:outline-none focus:border-blue-500 border border-gray-500/20"
        />
      </div>

      {isAnswerBoxOpen && (
        <AnswerBox
          avatar={avatar}
          name={name}
          description={description}
          comment={comment}
          claps={claps}
          answers={answers}
          time={time}
          authorView={authorView}
          onClose={closeAnswerBox}
        />
      )}
    </div>
  );
};

export default ForumsCard;
