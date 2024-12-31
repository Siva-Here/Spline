import { useState } from 'react';

import Preloader from './components/Preloader';
import MainLanding from './Pages/MainLanding';
function Landing() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {!showMainContent && <Preloader onEnter={() => setShowMainContent(true)} />}
      {showMainContent && (
        <MainLanding/>
      )}
     
    </div>
  );
}
export default Landing