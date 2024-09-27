import React, { useState } from 'react';
interface Props{
    setActive: (content: string) => void;
}
const CommunityNavigation:React.FC<Props> = ({setActive}) => {

  const [activeSection, setActiveSection] = useState<string>('Community');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setActive(section);
  };

  
  return (
    <div className="flex justify-between bg-content-bg rounded-md w-[100%] p-2 sticky top-0 bg-opacity-50 backdrop-blur-md">
    
      <div className="flex space-x-2">
        <button
          onClick={() => handleSectionChange('Community')}
          className={`px-4 py-2 rounded-md ${activeSection === 'Community' ? 'bg-white text-gray-700' : 'bg-none text-gray-400'}`}
        >
          Community
        </button>

        <button
          onClick={() => handleSectionChange('Followers')}
          className={`px-4 py-2 rounded-md ${activeSection === 'Followers' ?  'bg-white text-gray-700' : 'bg-none text-gray-400'}`}
        >
          Followers 0
        </button>

        <button
          onClick={() => handleSectionChange('Following')}
          className={`px-4 py-2 rounded-md ${activeSection === 'Following' ?  'bg-white text-gray-700' : 'bg-none text-gray-400'}`}
        >
          Following 0
        </button>
      </div>

     
      <div className="text-gray-400 ml-auto px-4 py-2">
        <span>Your personalized interests matched recommendations</span>
      </div>

    
    
    </div>
  );
};

export default CommunityNavigation;
