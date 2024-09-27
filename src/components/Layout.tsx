import React, { useState } from 'react';

import Header from './Header';
import Projections from './projection/Projections';
import Community from './community/Community';
import Writeups from './writeups/Writeups';
import Forums from './forums/Forums';
import Messages from './messages/Messages';
import Notification from './notification/Notification';
import Navigation from './Navigation';

const Layout: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>('Projections');

  const renderContent = () => {
    switch (activeContent) {
      case 'Projections':
        return <Projections />;
      case 'Community':
        return <Community />;
      case 'Writeups':
        return <Writeups />;
      case 'Forums':
        return <Forums />;
      case 'Messages':
        return <Messages />;
      case 'Notifications':
        return <Notification />;
      default:
        return <Projections />;
    }
  };

  return (
    <div className=" parent-layout h-screen overflow-hidden flex mt-4 mx-[10%] w-[80%] sticky top-0">

      <div className="basis-1/5 sticky top-0 h-screen">
        <Navigation setActiveContent={setActiveContent} />
      </div>


      <div className="basis-4/5 flex flex-col">

        <div className="sticky top-0 z-10 shadow-md">
          <Header />
        </div>


        <div className="flex-grow p-4 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Layout;
