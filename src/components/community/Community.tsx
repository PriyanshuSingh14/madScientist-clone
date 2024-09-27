import React, { useEffect, useState } from 'react'
import CommunityNavigation from './CommunityNavigation'
import CommunityContent from './CommunityContent';

const Community = () => {
    const [activeSection, setActiveSection] = useState<string>('Community');
    
  return (
    <div className='w-[100%]  '>
        <CommunityNavigation setActive={setActiveSection}/>
          <div className="mt-4">
        {activeSection === 'Community' && <div className='text-white'><CommunityContent/></div>}
        {activeSection === 'Followers' && <div className='text-white'>No followers yet</div>}
        {activeSection === 'Following' && <div className='text-white' >You are not following someone</div>}
      </div>
    </div>
  )
}

export default Community