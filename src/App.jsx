import { useState } from 'react';
import SplineScene from './SplineScene';
import ParticlesComponent from './Particlejs';
import Preloader from './components/Preloader';
import Background from './Backgound';
import NewHeader from './components/NewHeader';
function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {!showMainContent && <Preloader onEnter={() => setShowMainContent(true)} />}
      {showMainContent && (
        <div className="fixed w-full inset-0 transition-opacity duration-1000 opacity-100">
          <Background />
          <ParticlesComponent id="particles" />
          <NewHeader/>
          <SplineScene />
        </div>
      )}
    </div>
  );
}

export default App;
