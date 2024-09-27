import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Community from './components/community/Community';
import Writeups from './components/writeups/Writeups';
import Forums from './components/forums/Forums';
import Messages from './components/messages/Messages';
import Notification from './components/notification/Notification';


function App() {
  useEffect(() => {
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path="/community" element={<Community />} />
        <Route path="/writeups" element={<Writeups />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;