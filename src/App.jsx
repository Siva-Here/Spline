import Spline from '@splinetool/react-spline';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const splineRef = useRef(null);

  useEffect(() => {
    const adjustCameraForMobile = () => {
      if (splineRef.current) {
        const isMobile = window.innerWidth < 768;

        // Adjust camera settings for mobile and desktop
        if (isMobile) {
          splineRef.current.emit('setZoom', 0.6); // Zoom out further to fit the full object
          splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Move the camera back for full visibility
        } else {
          splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
          splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default position for desktop
        }
      }
    };

    adjustCameraForMobile();

    // Recalculate on window resize
    window.addEventListener('resize', adjustCameraForMobile);

    return () => {
      window.removeEventListener('resize', adjustCameraForMobile);
    };
  }, []);

  return (
    <div className="spline-container">
      {/* <Spline
        scene="https://prod.spline.design/wUmPtyTB37ttOf71/scene.splinecode"
        onLoad={(spline) => (splineRef.current = spline)}
      /> */}
    {/* <Spline scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode" /> */}
    <Spline
        scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode"
        onLoad={(spline) => (splineRef.current = spline)}
      />

    </div>
  );
}

export default App;
